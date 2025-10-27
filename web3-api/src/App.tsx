import {
  ConnectButton,
  useActiveWallet,
  useActiveWalletChain,
  useConnectedWallets,
} from "thirdweb/react";
// import { client, GameContract, somniaTestnet } from "./client";
import {
  prepareContractCall,
  readContract,
  sendTransaction,
  waitForReceipt,
} from "thirdweb";
import { useEffect } from "react";
import { TransactionReceipt } from "thirdweb/dist/types/transaction/types";
import {
  PushUI,
  PushUniversalAccountButton,
  PushUniversalWalletProvider,
  usePushChainClient,
  usePushWalletContext,
} from "@pushchain/ui-kit";

// const wallets = [
//   inAppWallet(),
//   createWallet("io.metamask"),
//   createWallet("com.coinbase.wallet"),
// ];

export function App() {
  // window.thirdwebClient = client;

  // const wallet = useActiveWallet();
  // const chainId = useActiveWalletChain();

  const { connectionStatus } = usePushWalletContext();
  const { pushChainClient } = usePushChainClient();

  useEffect(() => {
    if (connectionStatus == PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED) {
      window.isNetworkConnected = true;
      window.userAccount = pushChainClient?.universal.account
    } else {
      window.isNetworkConnected = false;
      window.userAccount = undefined;
    }
  }, [connectionStatus, pushChainClient]);

  /// ###########################################
  /// wallet connect
  /// ###########################################

  const onConnectButtonClick = () => {
    let button = document.getElementsByClassName("sc-hvigdm")[0];
    if (button != null && button instanceof HTMLButtonElement) {
      button.click();
    }
  };

  const onConnectedButtonClick = () => {
    let button = document.getElementsByClassName("sc-hvigdm")[0];
    if (button != null && button instanceof HTMLButtonElement) {
      button.click();
    }
  };

  window.onConnectButtonClick = onConnectButtonClick;
  window.onConnectedButtonClick = onConnectedButtonClick;

  /// ###########################################
  /// read contract function
  /// ###########################################

  // const getTopListInfo = async (onSuccess?: (receipt: any) => void) => {
  //   const data = await readContract({
  //     contract: GameContract,
  //     method: "getTopListInfo",
  //     params: [],
  //   });
  //   onSuccess?.(data);
  // };

  // const getPlayerAllAssets = async (onSuccess?: (receipt: any) => void) => {
  //   let account = wallet?.getAccount()?.address;
  //   if (account) {
  //     const data = await readContract({
  //       contract: GameContract,
  //       method: "getPlayerAllAssets",
  //       params: [account],
  //     });
  //     onSuccess?.(data);
  //   }
  // };

  // const getPlayerLastLotteryResult = async (
  //   onSuccess?: (receipt: any) => void
  // ) => {
  //   let account = wallet?.getAccount()?.address;
  //   if (account) {
  //     const data = await readContract({
  //       contract: GameContract,
  //       method: "getPlayerLastLotteryResult",
  //       params: [account],
  //     });
  //     onSuccess?.(data);
  //   }
  // };

  // const getPlayerAllWeaponInfo = async (onSuccess?: (receipt: any) => void) => {
  //   let account = wallet?.getAccount()?.address;
  //   if (account) {
  //     const data = await readContract({
  //       contract: GameContract,
  //       method: "getPlayerAllWeaponInfo",
  //       params: [account],
  //     });
  //     onSuccess?.(data);
  //   }
  // };

  // const getPlayerAllSkinInfo = async (onSuccess?: (receipt: any) => void) => {
  //   let account = wallet?.getAccount()?.address;
  //   if (account) {
  //     const data = await readContract({
  //       contract: GameContract,
  //       method: "getPlayerAllSkinInfo",
  //       params: [account],
  //     });
  //     onSuccess?.(data);
  //   }
  // };

  // window.getTopListInfo = getTopListInfo;
  // window.getPlayerAllAssets = getPlayerAllAssets;
  // window.getPlayerLastLotteryResult = getPlayerLastLotteryResult;
  // window.getPlayerAllWeaponInfo = getPlayerAllWeaponInfo;
  // window.getPlayerAllSkinInfo = getPlayerAllSkinInfo;

  /// ###########################################
  /// write contract function
  /// ###########################################

  // const startGame = async (
  //   onSuccess?: (receipt: any) => void,
  //   onError?: (receipt: any) => void
  // ) => {
  //   try {
  //     let account = wallet?.getAccount();
  //     if (account) {
  //       const transaction = prepareContractCall({
  //         contract: GameContract,
  //         method: "startGame",
  //         params: [],
  //         value: BigInt(10 ** 16), // gas token amount for payable function
  //       });
  //       const transactionResult = await sendTransaction({
  //         transaction: transaction,
  //         account: account,
  //       });
  //       const receipt: TransactionReceipt = await waitForReceipt(
  //         transactionResult
  //       );
  //       switch (receipt.status) {
  //         case "success":
  //           onSuccess?.(receipt);
  //           break;
  //         case "reverted":
  //           onError?.(receipt);
  //           break;
  //       }
  //     }
  //   } catch (e: any) {
  //     let message = e["message"];
  //     if (message != null && message != undefined && message !== "") {
  //       alert(message);
  //     }
  //   }
  // };

  // const gameOver = async (
  //   time: bigint,
  //   kills: bigint,
  //   onSuccess?: (receipt: any) => void,
  //   onError?: (receipt: any) => void
  // ) => {
  //   try {
  //     let account = wallet?.getAccount();
  //     if (account) {
  //       const transaction = prepareContractCall({
  //         contract: GameContract,
  //         method: "gameOver",
  //         params: [time, kills],
  //       });
  //       const transactionResult = await sendTransaction({
  //         transaction: transaction,
  //         account: account,
  //       });
  //       const receipt: TransactionReceipt = await waitForReceipt(
  //         transactionResult
  //       );
  //       switch (receipt.status) {
  //         case "success":
  //           onSuccess?.(receipt);
  //           break;
  //         case "reverted":
  //           onError?.(receipt);
  //           break;
  //       }
  //     }
  //   } catch (e: any) {
  //     let message = e["message"];
  //     if (message != null && message != undefined && message !== "") {
  //       alert(message);
  //     }
  //   }
  // };

  // const buyOrUpgradeSkin = async (
  //   id: bigint,
  //   onSuccess?: (receipt: any) => void,
  //   onError?: (receipt: any) => void
  // ) => {
  //   try {
  //     let account = wallet?.getAccount();
  //     if (account) {
  //       const transaction = prepareContractCall({
  //         contract: GameContract,
  //         method: "buyOrUpgradeSkin",
  //         params: [id],
  //       });
  //       const transactionResult = await sendTransaction({
  //         transaction: transaction,
  //         account: account,
  //       });
  //       const receipt: TransactionReceipt = await waitForReceipt(
  //         transactionResult
  //       );
  //       switch (receipt.status) {
  //         case "success":
  //           onSuccess?.(receipt);
  //           break;
  //         case "reverted":
  //           onError?.(receipt);
  //           break;
  //       }
  //     }
  //   } catch (e: any) {
  //     let message = e["message"];
  //     if (message != null && message != undefined && message !== "") {
  //       alert(message);
  //     }
  //   }
  // };

  // const buyOrUpgradeWeapon = async (
  //   id: bigint,
  //   onSuccess?: (receipt: any) => void,
  //   onError?: (receipt: any) => void
  // ) => {
  //   try {
  //     let account = wallet?.getAccount();
  //     if (account) {
  //       const transaction = prepareContractCall({
  //         contract: GameContract,
  //         method: "buyOrUpgradeWeapon",
  //         params: [id],
  //       });
  //       const transactionResult = await sendTransaction({
  //         transaction: transaction,
  //         account: account,
  //       });
  //       const receipt: TransactionReceipt = await waitForReceipt(
  //         transactionResult
  //       );
  //       switch (receipt.status) {
  //         case "success":
  //           onSuccess?.(receipt);
  //           break;
  //         case "reverted":
  //           onError?.(receipt);
  //           break;
  //       }
  //     }
  //   } catch (e: any) {
  //     let message = e["message"];
  //     if (message != null && message != undefined && message !== "") {
  //       alert(message);
  //     }
  //   }
  // };

  // const requestLottery = async (
  //   onSuccess?: (receipt: any) => void,
  //   onError?: (receipt: any) => void
  // ) => {
  //   try {
  //     let account = wallet?.getAccount();
  //     if (account) {
  //       const transaction = await prepareContractCall({
  //         contract: GameContract,
  //         method: "requestLottery",
  //         params: [],
  //         value: BigInt(4 * 10 ** 16), // gas token amount for payable function
  //       });
  //       const transactionResult = await sendTransaction({
  //         transaction: transaction,
  //         account: account,
  //       });
  //       const receipt: TransactionReceipt = await waitForReceipt(
  //         transactionResult
  //       );
  //       switch (receipt.status) {
  //         case "success":
  //           onSuccess?.(receipt);
  //           break;
  //         case "reverted":
  //           onError?.(receipt);
  //           break;
  //       }
  //     }
  //   } catch (e: any) {
  //     let message = e["message"];
  //     if (message != null && message != undefined && message !== "") {
  //       alert(message);
  //     }
  //   }
  // };

  // const mintGold = async (
  //   onSuccess?: (receipt: any) => void,
  //   onError?: (receipt: any) => void
  // ) => {
  //   try {
  //     let account = wallet?.getAccount();
  //     if (account) {
  //       const transaction = await prepareContractCall({
  //         contract: GameContract,
  //         method: "mintGold",
  //         params: [],
  //         value: BigInt(10 ** 16), // gas token amount for payable function
  //       });
  //       const transactionResult = await sendTransaction({
  //         transaction: transaction,
  //         account: account,
  //       });
  //       const receipt: TransactionReceipt = await waitForReceipt(
  //         transactionResult
  //       );
  //       switch (receipt.status) {
  //         case "success":
  //           onSuccess?.(receipt);
  //           break;
  //         case "reverted":
  //           onError?.(receipt);
  //           break;
  //       }
  //     }
  //   } catch (e: any) {
  //     let message = e["message"];
  //     if (message != null && message != undefined && message !== "") {
  //       alert(message);
  //     }
  //   }
  // };

  // const reLive = async (
  //   onSuccess?: (receipt: any) => void,
  //   onError?: (receipt: any) => void
  // ) => {
  //   try {
  //     let account = wallet?.getAccount();
  //     if (account) {
  //       const transaction = await prepareContractCall({
  //         contract: GameContract,
  //         method: "reLive",
  //         params: [],
  //         value: BigInt(5 * 10 ** 16), // gas token amount for payable function
  //       });
  //       const transactionResult = await sendTransaction({
  //         transaction: transaction,
  //         account: account,
  //       });
  //       const receipt: TransactionReceipt = await waitForReceipt(
  //         transactionResult
  //       );
  //       switch (receipt.status) {
  //         case "success":
  //           onSuccess?.(receipt);
  //           break;
  //         case "reverted":
  //           onError?.(receipt);
  //           break;
  //       }
  //     }
  //   } catch (e: any) {
  //     let message = e["message"];
  //     if (message != null && message != undefined && message !== "") {
  //       alert(message);
  //     }
  //   }
  // };

  // window.startGame = startGame;
  // window.gameOver = gameOver;
  // window.buyOrUpgradeSkin = buyOrUpgradeSkin;
  // window.buyOrUpgradeWeapon = buyOrUpgradeWeapon;
  // window.requestLottery = requestLottery;
  // window.mintGold = mintGold;
  // window.reLive = reLive;

  // // contract
  // window.storageContract = GameContract;

  return (
    <main>
      <div style={{ display: "none" }}>
        <PushUniversalAccountButton />
        {connectionStatus == PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (
          <p>
            LFG! Push Chain Executor Account (UEA): $
            {pushChainClient?.universal.account}
          </p>
        )}
        {/* <ConnectButton client={client} wallets={wallets} chain={somniaTestnet} /> */}
      </div>
    </main>
  );
}
