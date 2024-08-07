import { createThirdwebClient, defineChain, getContract } from "thirdweb";
import Web3 from "web3";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const clientId = import.meta.env.VITE_TEMPLATE_CLIENT_ID;
const WinEthereum = window["ethereum"];
const WinWeb3 = window["web3"];

export const client = createThirdwebClient({
  clientId: clientId,
});

export const networkConfig = {
  chainId: "0x150",
  rpcUrls: ["https://mevm.devnet.m1.movementlabs.xyz"],
  chainName: "move-evm",
  nativeCurrency: {
    name: "MOV",
    symbol: "MOV", // 2-6 characters long
    decimals: 18,
  },
};

export const GameContract = "0xe48A8B147911A47Fd69FC0119bD8994eB70A4D1f";

export const GameContractABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "buyOrUpgradeSkin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "buyOrUpgradeWeapon",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "kills",
        type: "uint256",
      },
    ],
    name: "gameOver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initLotteryList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintGold",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "OwnableUnauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "grade",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reLive",
        type: "uint256",
      },
    ],
    name: "GameLogEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "prevOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "reLive",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "requestLottery",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "random",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "itemType",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "num",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct ZKGameClient.LotteryItem",
        name: "lotteryItem",
        type: "tuple",
      },
    ],
    name: "RequestLottery",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "gameLogMap",
    outputs: [
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "reLive",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "grade",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gasTokenAggregator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "usd",
        type: "uint256",
      },
    ],
    name: "getGasTokenAmountByUsd",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "getPlayerAllAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "gold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "diamond",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "getPlayerAllSkinInfo",
    outputs: [
      {
        internalType: "uint256[]",
        name: "skinIdList",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "skinLevelList",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "getPlayerAllWeaponInfo",
    outputs: [
      {
        internalType: "uint256[]",
        name: "weaponIdList",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "weaponLevelList",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "getPlayerLastLotteryResult",
    outputs: [
      {
        internalType: "uint256",
        name: "itemType",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTopListInfo",
    outputs: [
      {
        internalType: "uint256[10]",
        name: "",
        type: "uint256[10]",
      },
      {
        internalType: "uint256[10]",
        name: "",
        type: "uint256[10]",
      },
      {
        internalType: "address[10]",
        name: "",
        type: "address[10]",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdateTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "LotteryItemList",
    outputs: [
      {
        internalType: "uint256",
        name: "itemType",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "playerDiamondMap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "playerGoldMap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "playerLastlotteryResultIndexMap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "playerLatestGameLogIdMap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "playerSkinLevelMap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "playerSkinMap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "playerWeaponLevelMap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "playerWeaponMap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "topGradeList",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "topPlayerList",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "topTimeList",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalGame",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalLotteryTimes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "VRF",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

let provider = new Web3.providers.HttpProvider(networkConfig.rpcUrls[0]);
let web3 = await new Web3(provider);
 // @ts-ignore
let gameContract = new web3.eth.Contract(GameContractABI, GameContract);

export const initMetaMaskWeb3 = async (callback: Function) => {
  let checkMetaMaskFlag = await checkMetaMask();
  if (checkMetaMaskFlag) {
    let config = networkConfig;

    let switchFlag = await switchNetwork(config);
    if (switchFlag) {
      let setWeb3ProviderFlag = await setWeb3Provider(config);
      if (setWeb3ProviderFlag) {
        web3 = await new Web3(provider);
        let accounts = await web3.eth.getAccounts();
        console.log(accounts);
        if (accounts.length == 0) {
          return;
        }
        await web3.eth.getBalance(accounts[0], async (err, wei) => {
          if (!err) {
            let balance = web3.utils.fromWei(wei, "ether");
            console.log("balance:", balance);
            console.log("provider:", provider);
            console.log("web3:", web3);
            web3.eth.defaultAccount = accounts[0];
            callback(accounts[0]);
            await initContracts();
          }
        });
        WinEthereum.on("accountsChanged", function (accounts: any) {
          if (accounts.length == 0) {
            return;
          }
          web3.eth.getBalance(accounts[0], async (err, wei) => {
            if (!err) {
              let balance = web3.utils.fromWei(wei, "ether");
              console.log("balance:", balance);
              console.log(accounts[0]);
              web3.eth.defaultAccount = accounts[0];
              callback(accounts[0]);
              await initContracts();
            }
          });
        });
        WinEthereum.on("networkChanged", function (networkId: any) {
          console.log("networkChanged", networkId);
          // TODO: change network
        });
      } else {
        console.log("setWeb3Provider error");
      }
    } else {
      console.log("switch chain failed");
    }
  } else {
    console.log("checkMetaMask error");
  }
};

export const getGameContract = () => {
  return gameContract;
};

const initContracts = async () => {
   // @ts-ignore
  gameContract = new web3.eth.Contract(GameContractABI, GameContract);
};

// metamask

const checkMetaMask = async () => {
  if (WinEthereum) {
    if (typeof WinEthereum !== "undefined") {
      console.log("MetaMask is installed!");
      return true;
    } else {
      console.log("MetaMask is not installed!");
      return false;
    }
  } else {
    return false;
  }
};

const setWeb3Provider = async (config: any) => {
  if (WinEthereum) {
    provider = WinEthereum;
    try {
      await WinEthereum.enable();
    } catch (error) {
      console.error("User denied account access");
      return false;
    }
  } else if (WinWeb3) {
    provider = WinWeb3.currentProvider;
  } else {
    provider = new Web3.providers.HttpProvider(config.rpcUrls[0]);
  }
  return true;
};

const switchNetwork = async (config: any) => {
  console.log(WinEthereum.chainId);
  if (WinEthereum.chainId == config.chainId) {
    return true;
  }
  return await switchChain(config);
};

const switchChain = async (config: any) => {
  try {
    let chainId = config.chainId;
    await WinEthereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId }],
    });
    return true;
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    console.log(switchError);
    // @ts-ignore
    if (switchError.code === 4902) {
      return await addChain(config);
    }
    return false;
    // handle other "switch" errors
  }
};

const addChain = async (data: any) => {
  try {
    await WinEthereum.request({
      method: "wallet_addEthereumChain",
      params: [data],
    });
    return true;
  } catch (addError) {
    console.log(addError);
    return false;
    // handle "add" error
  }
};

window.thirdwebClient = client;
