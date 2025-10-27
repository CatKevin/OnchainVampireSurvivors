import { PushUI } from "@pushchain/ui-kit";

export const CHAIN_NETWORK = PushUI.CONSTANTS.PUSH_NETWORK.TESTNET;

export const GAME_CONTRACT_ADDRESS = "0xD42893fF04e15a6c4021103e0E2f046968278293";

export const JSON_RPC_PROVIDER = "https://evm.rpc-testnet-donut-node1.push.org/";

export const GAME_ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "buyOrUpgradeSkin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "buyOrUpgradeWeapon",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "kills",
				"type": "uint256"
			}
		],
		"name": "gameOver",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initLotteryList",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initWeaponAndSkinData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "OwnableUnauthorized",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "endTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "player",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "grade",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "reLive",
				"type": "uint256"
			}
		],
		"name": "GameLogEvent",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "mintGold",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "prevOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnerUpdated",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "reLive",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "requestLottery",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "random",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "itemType",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "num",
						"type": "uint256"
					}
				],
				"indexed": false,
				"internalType": "struct ZKGameClient.LotteryItem",
				"name": "lotteryItem",
				"type": "tuple"
			}
		],
		"name": "RequestLottery",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "setOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startGame",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "testWeaponSkin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "gameLogMap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endTime",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "reLive",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "grade",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			}
		],
		"name": "getPlayerAllAssets",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "gold",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "diamond",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			}
		],
		"name": "getPlayerAllSkinInfo",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "skinIdList",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "skinLevelList",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			}
		],
		"name": "getPlayerAllWeaponInfo",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "weaponIdList",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "weaponLevelList",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			}
		],
		"name": "getPlayerLastLotteryResult",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "itemType",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTopListInfo",
		"outputs": [
			{
				"internalType": "uint256[10]",
				"name": "",
				"type": "uint256[10]"
			},
			{
				"internalType": "uint256[10]",
				"name": "",
				"type": "uint256[10]"
			},
			{
				"internalType": "address[10]",
				"name": "",
				"type": "address[10]"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastUpdateTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "LotteryItemList",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "itemType",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "playerDiamondMap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "playerGoldMap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "playerLastlotteryResultIndexMap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "playerLatestGameLogIdMap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "playerSkinLevelMap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "playerSkinMap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "playerWeaponLevelMap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "playerWeaponMap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "skinLevelPriceList",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "skinPriceMap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "priceType",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "topGradeList",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "topPlayerList",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "topTimeList",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalGame",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalLotteryTimes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "salt",
				"type": "uint256"
			}
		],
		"name": "VRF",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "weaponLevelPriceList",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "weaponPriceMap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "priceType",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
