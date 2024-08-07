// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@thirdweb-dev/contracts/extension/Ownable.sol";

interface IUltraVerifier {
    function getVerificationKeyHash() external pure returns (bytes32);

    function verify(
        bytes calldata _proof,
        bytes32[] calldata _publicInputs
    ) external view returns (bool);
}

contract ZKGameClient is Ownable {
    struct MessageItem {
        address player;
        uint time;
        uint kills;
    }

    // 0: Gold; 1: Diamond; 2: skin; 3: Weapon
    struct LotteryItem {
        uint itemType;
        uint num;
    }

    struct GameLog{
        uint startTime;
        uint endTime;
        address player;
        uint reLive;
        uint grade;
    }

    event RequestLottery(
        uint256 requestId,
        uint256 random,
        LotteryItem lotteryItem
    );

    event GameLogEvent(
        uint startTime,
        uint endTime,
        address player,
        uint grade,
        uint reLive
    );
    
    // Lottery
    uint256 public totalLotteryTimes = 0;
    LotteryItem[] public LotteryItemList;
    mapping(address => uint256) public playerLastlotteryResultIndexMap; /*  address --> requestId */

    // player's weapon
    mapping(address => uint[]) public playerWeaponMap; /* player --> uint[] */
    mapping(address => mapping(uint=>uint)) public playerWeaponLevelMap; /* player --> id ->level*/
    mapping(address => uint[]) public playerSkinMap; /* player --> uint[] */
    mapping(address => mapping(uint=>uint)) public playerSkinLevelMap; /* player --> id ->level*/
    mapping(address => uint) public playerGoldMap; /* player --> uint */
    mapping(address => uint) public playerDiamondMap; /* player --> uint */

    /// topList
    uint[10] public topGradeList; // Top 10 grade List, kills
    uint[10] public topTimeList; // Top 10 grade List, timestamp
    address[10] public topPlayerList; // Top 10 player List, address
    uint public lastUpdateTime; // last update time of topList

    /// log
    mapping(address => uint) public playerLatestGameLogIdMap; // id => GameLog
    mapping(uint => GameLog) public gameLogMap; // id => GameLog
    uint public totalGame = 0;

    constructor(){
        _setupOwner(msg.sender);
        initLotteryList();
    }

    // lottery
    function initLotteryList() public onlyOwner {
        // LotteryItemList.push(LotteryItem(0,100));
        // LotteryItemList.push(LotteryItem(0,50));
        LotteryItemList.push(LotteryItem(1,10));
        LotteryItemList.push(LotteryItem(0,50));
        LotteryItemList.push(LotteryItem(0,150));
        LotteryItemList.push(LotteryItem(3,18));
        LotteryItemList.push(LotteryItem(0,200));
        // LotteryItemList.push(LotteryItem(0,50));
        LotteryItemList.push(LotteryItem(1,20));
        // LotteryItemList.push(LotteryItem(0,50));
        // LotteryItemList.push(LotteryItem(0,200));
        LotteryItemList.push(LotteryItem(3,9));
    }

    function distribution(address payable winner, uint amount) internal {
        winner.transfer(amount);
    }

    function startGame() public {
    // function startGame() public payable {
        // TODO: pay money

        playerLatestGameLogIdMap[msg.sender] = totalGame;
        gameLogMap[totalGame].startTime = block.timestamp;
        gameLogMap[totalGame].player = msg.sender;
        totalGame = totalGame + 1;
    }

    function reLive() public payable {
        uint gasTokenAmountToPay = 5*10**15; // 0.005
        require(msg.value >= gasTokenAmountToPay,"Gas Token is not enough!");
        address payable top1Player = payable(topPlayerList[0]);
        if(top1Player != address(0)) {
            distribution(top1Player, gasTokenAmountToPay);
        }
    }

    // function testWeaponSkin() external  {
    //     playerWeaponMap[msg.sender].push(5);
    //     playerWeaponMap[msg.sender].push(15);
    //     playerSkinMap[msg.sender].push(2);
    // }

    function getPlayerAllWeaponInfo(address player) external view returns(uint[] memory weaponIdList, uint[] memory weaponLevelList) {
        weaponIdList = playerWeaponMap[player];
        weaponLevelList = new uint[](weaponIdList.length);
        for(uint i=0; i < weaponIdList.length; i++) {
            weaponLevelList[i] = playerWeaponLevelMap[player][i];
        }
        return (weaponIdList, weaponLevelList);
    }

    function getPlayerAllSkinInfo(address player) external view returns(uint[] memory skinIdList, uint[] memory skinLevelList) {
        skinIdList = playerSkinMap[player];
        skinLevelList = new uint[](skinIdList.length);
        for(uint i=0; i < skinIdList.length; i++) {
            skinLevelList[i] = playerSkinLevelMap[player][i];
        }
        return (skinIdList, skinLevelList);
    }

    function buyOrUpgradeSkin(uint id) external {
        uint[] memory skinList = playerSkinMap[msg.sender];
        bool found = false;
        for(uint i=0; i<skinList.length; i++) {
            if(skinList[i] == id) {
                found = true;
            }
        }
        if(found || id == 0) {
            playerSkinLevelMap[msg.sender][id]++;
        } else {
            playerSkinMap[msg.sender].push(id);
        }
    }

    function buyOrUpgradeWeapon(uint id) external {
        uint[] memory weaponList = playerWeaponMap[msg.sender];
        bool found = false;
        for(uint i=0; i<weaponList.length; i++) {
            if(weaponList[i] == id) {
                found = true;
            }
        }
        if(found || id == 0) {
            playerWeaponLevelMap[msg.sender][id]++;
        } else {
            playerWeaponMap[msg.sender].push(id);
        }
    }

    function mintGold()  external payable {
        uint gasTokenAmountToPay = 10**15; // 0.001
        require(msg.value >= gasTokenAmountToPay,"Gas Token is not enough!");
        playerGoldMap[msg.sender] += 500;
    }

    // random number generator
    function VRF(uint256 salt) public view returns (uint256) {
        return salt + block.timestamp;
    }

    // lottery
    function requestLottery() external payable {
        // pay
        uint gasTokenAmountToPay = 4*10**15; // 0.004
        require(msg.value >= gasTokenAmountToPay,"Gas Token is not enough!");

        totalLotteryTimes = totalLotteryTimes + 1;

        // get random from VRF
        uint256 random = VRF(totalLotteryTimes);

        // get lottery reault
        uint len = LotteryItemList.length;
        uint index = random % len;
        LotteryItem memory item = LotteryItemList[index];

        playerLastlotteryResultIndexMap[msg.sender] = index;

        // distribution rewards
        if(item.itemType == 0) {
            playerGoldMap[msg.sender] += item.num;
        } else if(item.itemType == 1) {
            playerDiamondMap[msg.sender] += item.num;
        } else if(item.itemType == 2) {
            // TODO
        } else if(item.itemType == 3) {
            playerWeaponMap[msg.sender].push(item.num);
        }

        emit RequestLottery(
            totalLotteryTimes,
            random,
            item
        );
    }

    // lottery
    function getPlayerLastLotteryResult(address player) external view returns (uint itemType,uint num) {
        uint256 index = playerLastlotteryResultIndexMap[player];
        LotteryItem memory item = LotteryItemList[index];
        return (item.itemType, item.num);
    }


    // player info
    function getPlayerAllAssets(address player) external view returns(uint gold,uint diamond) {
        return (playerGoldMap[player], playerDiamondMap[player]);
    }

    function gameOver(uint time, uint kills) external {
        // TODO: zk proof

        // save data
        uint logId = playerLatestGameLogIdMap[msg.sender];
        gameLogMap[logId].endTime = block.timestamp;
        gameLogMap[logId].grade = time;
        pushDataToTopList(MessageItem(msg.sender,time, kills));

        emit GameLogEvent(
            gameLogMap[logId].startTime,
            gameLogMap[logId].endTime,
            gameLogMap[logId].player,
            time,
            gameLogMap[logId].reLive
        );
    }

    /// Use binary search algorithm
    function pushDataToTopList(MessageItem memory messageItem) internal {
        uint time = messageItem.time;
        uint kills = messageItem.kills;
        address player = messageItem.player;

        if(topGradeList[topGradeList.length -1] < kills) {
            uint left = 0;
            uint right = topGradeList.length - 1;
            uint mid;

            while (left < right) {
                mid = (left + right) / 2;
                if (topGradeList[mid] < kills) {
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }

            for(uint i = topGradeList.length - 1; i > left; i--) {
                topGradeList[i] = topGradeList[i - 1];
                topTimeList[i] = topTimeList[i - 1];
                topPlayerList[i] = topPlayerList[i - 1];
            }
            topGradeList[left] = kills;
            topTimeList[left] = time;
            topPlayerList[left] = player;
        }

        lastUpdateTime = block.timestamp;
    }

    function getTopListInfo() public view returns (uint[10] memory , uint[10] memory, address[10] memory, uint) {
        return (topGradeList, topTimeList, topPlayerList, lastUpdateTime);
    }

    function _canSetOwner() internal virtual view override returns (bool) {
        return msg.sender == owner();
    }
}
