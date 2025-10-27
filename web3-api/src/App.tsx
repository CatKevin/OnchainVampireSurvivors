import { useEffect } from "react";
import {
  PushUI,
  PushUniversalAccountButton,
  usePushChain,
  usePushChainClient,
  usePushWalletContext,
} from "@pushchain/ui-kit";
import { ethers } from "ethers";
import { GAME_ABI, GAME_CONTRACT_ADDRESS, JSON_RPC_PROVIDER } from "./config";


export function App() {
  const { connectionStatus } = usePushWalletContext();
  const { pushChainClient } = usePushChainClient();
  const { PushChain } = usePushChain();

  useEffect(() => {
    if (connectionStatus == PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED) {
      window.isNetworkConnected = true;
      window.userAccount = pushChainClient?.universal.account;
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

  const getGameContract = async () => {
    const provider = new ethers.JsonRpcProvider(JSON_RPC_PROVIDER);
    const contract = new ethers.Contract(
      GAME_CONTRACT_ADDRESS,
      GAME_ABI,
      provider
    );
    return contract;
  };

  /// ###########################################
  /// read contract function
  /// ###########################################

  const getTopListInfo = async (onSuccess?: (receipt: any) => void) => {
    try {
      let contract = await getGameContract();
      const data = await contract.getTopListInfo();
      onSuccess?.(data);
    } catch (err) {
      console.error("Error getTopListInfo:", err);
    }
  };

  const getPlayerAllAssets = async (onSuccess?: (receipt: any) => void) => {
    try {
      let contract = await getGameContract();
      let account = pushChainClient?.universal.account;
      if (account) {
        const data = await contract.getPlayerAllAssets(account);
        onSuccess?.(data);
      }
    } catch (err) {
      console.error("Error getPlayerAllAssets:", err);
    }
  };

  const getPlayerLastLotteryResult = async (
    onSuccess?: (receipt: any) => void
  ) => {
    try {
      let contract = await getGameContract();
      let account = pushChainClient?.universal.account;
      if (account) {
        const data = await contract.getPlayerLastLotteryResult(account);
        onSuccess?.(data);
      }
    } catch (err) {
      console.error("Error getPlayerLastLotteryResult:", err);
    }
  };

  const getPlayerAllWeaponInfo = async (onSuccess?: (receipt: any) => void) => {
    try {
      let contract = await getGameContract();
      let account = pushChainClient?.universal.account;
      if (account) {
        const data = await contract.getPlayerAllWeaponInfo(account);
        onSuccess?.(data);
      }
    } catch (err) {
      console.error("Error getPlayerAllWeaponInfo:", err);
    }
  };

  const getPlayerAllSkinInfo = async (onSuccess?: (receipt: any) => void) => {
    try {
      let contract = await getGameContract();
      let account = pushChainClient?.universal.account;
      if (account) {
        const data = await contract.getPlayerAllSkinInfo(account);
        onSuccess?.(data);
      }
    } catch (err) {
      console.error("Error getPlayerAllSkinInfo:", err);
    }
  };

  window.getTopListInfo = getTopListInfo;
  window.getPlayerAllAssets = getPlayerAllAssets;
  window.getPlayerLastLotteryResult = getPlayerLastLotteryResult;
  window.getPlayerAllWeaponInfo = getPlayerAllWeaponInfo;
  window.getPlayerAllSkinInfo = getPlayerAllSkinInfo;

  /// ###########################################
  /// write contract function
  /// ###########################################

  const startGame = async (
    onSuccess?: (receipt: any) => void,
    onError?: (receipt: any) => void
  ) => {
    try {
      let account = pushChainClient?.universal.account;
      if (account) {
        const tx = await pushChainClient?.universal.sendTransaction({
          to: GAME_CONTRACT_ADDRESS,
          data: PushChain.utils.helpers.encodeTxData({
            abi: GAME_ABI,
            functionName: "startGame",
          }),
          value: BigInt(10 ** 16), // gas token amount for payable function
        });
        const resp = await tx?.wait();
        switch (resp?.status) {
          case 1:
            onSuccess?.(resp);
            break;
          case 0:
            onError?.(resp);
            break;
        }
      }
    } catch (e: any) {
      let message = e["message"];
      if (message != null && message != undefined && message !== "") {
        alert(message);
      }
    }
  };

  const gameOver = async (
    time: bigint,
    kills: bigint,
    onSuccess?: (receipt: any) => void,
    onError?: (receipt: any) => void
  ) => {
    try {
      let account = pushChainClient?.universal.account;
      if (account) {
        const tx = await pushChainClient?.universal.sendTransaction({
          to: GAME_CONTRACT_ADDRESS,
          data: PushChain.utils.helpers.encodeTxData({
            abi: GAME_ABI,
            functionName: "gameOver",
            args: [time, kills],
          }),
          value: BigInt(0),
        });
        const resp = await tx?.wait();
        switch (resp?.status) {
          case 1:
            onSuccess?.(resp);
            break;
          case 0:
            onError?.(resp);
            break;
        }
      }
    } catch (e: any) {
      let message = e["message"];
      if (message != null && message != undefined && message !== "") {
        alert(message);
      }
    }
  };

  const buyOrUpgradeSkin = async (
    id: bigint,
    onSuccess?: (receipt: any) => void,
    onError?: (receipt: any) => void
  ) => {
    try {
      let account = pushChainClient?.universal.account;
      if (account) {
        const tx = await pushChainClient?.universal.sendTransaction({
          to: GAME_CONTRACT_ADDRESS,
          data: PushChain.utils.helpers.encodeTxData({
            abi: GAME_ABI,
            functionName: "buyOrUpgradeSkin",
            args: [id],
          }),
          value: BigInt(0),
        });
        const resp = await tx?.wait();
        switch (resp?.status) {
          case 1:
            onSuccess?.(resp);
            break;
          case 0:
            onError?.(resp);
            break;
        }
      }
    } catch (e: any) {
      let message = e["message"];
      if (message != null && message != undefined && message !== "") {
        alert(message);
      }
    }
  };

  const buyOrUpgradeWeapon = async (
    id: bigint,
    onSuccess?: (receipt: any) => void,
    onError?: (receipt: any) => void
  ) => {
    try {
      let account = pushChainClient?.universal.account;
      if (account) {
        const tx = await pushChainClient?.universal.sendTransaction({
          to: GAME_CONTRACT_ADDRESS,
          data: PushChain.utils.helpers.encodeTxData({
            abi: GAME_ABI,
            functionName: "buyOrUpgradeWeapon",
            args: [id],
          }),
          value: BigInt(0),
        });
        const resp = await tx?.wait();
        switch (resp?.status) {
          case 1:
            onSuccess?.(resp);
            break;
          case 0:
            onError?.(resp);
            break;
        }
      }
    } catch (e: any) {
      let message = e["message"];
      if (message != null && message != undefined && message !== "") {
        alert(message);
      }
    }
  };

  const requestLottery = async (
    onSuccess?: (receipt: any) => void,
    onError?: (receipt: any) => void
  ) => {
    try {
      let account = pushChainClient?.universal.account;
      if (account) {
        const tx = await pushChainClient?.universal.sendTransaction({
          to: GAME_CONTRACT_ADDRESS,
          data: PushChain.utils.helpers.encodeTxData({
            abi: GAME_ABI,
            functionName: "requestLottery",
            args: [],
          }),
          value: BigInt(4 * 10 ** 16), // gas token amount for payable function
        });
        const resp = await tx?.wait();
        switch (resp?.status) {
          case 1:
            onSuccess?.(resp);
            break;
          case 0:
            onError?.(resp);
            break;
        }
      }
    } catch (e: any) {
      let message = e["message"];
      if (message != null && message != undefined && message !== "") {
        alert(message);
      }
    }
  };

  const mintGold = async (
    onSuccess?: (receipt: any) => void,
    onError?: (receipt: any) => void
  ) => {
    try {
      let account = pushChainClient?.universal.account;
      if (account) {
        const tx = await pushChainClient?.universal.sendTransaction({
          to: GAME_CONTRACT_ADDRESS,
          data: PushChain.utils.helpers.encodeTxData({
            abi: GAME_ABI,
            functionName: "mintGold",
            args: [],
          }),
          value: BigInt(10 ** 16), // gas token amount for payable function
        });
        const resp = await tx?.wait();
        switch (resp?.status) {
          case 1:
            onSuccess?.(resp);
            break;
          case 0:
            onError?.(resp);
            break;
        }
      }
    } catch (e: any) {
      let message = e["message"];
      if (message != null && message != undefined && message !== "") {
        alert(message);
      }
    }
  };

  const reLive = async (
    onSuccess?: (receipt: any) => void,
    onError?: (receipt: any) => void
  ) => {
    try {
      let account = pushChainClient?.universal.account;
      if (account) {
        const tx = await pushChainClient?.universal.sendTransaction({
          to: GAME_CONTRACT_ADDRESS,
          data: PushChain.utils.helpers.encodeTxData({
            abi: GAME_ABI,
            functionName: "reLive",
            args: [],
          }),
          value: BigInt(5 * 10 ** 16), // gas token amount for payable function
        });
        const resp = await tx?.wait();
        switch (resp?.status) {
          case 1:
            onSuccess?.(resp);
            break;
          case 0:
            onError?.(resp);
            break;
        }
      }
    } catch (e: any) {
      let message = e["message"];
      if (message != null && message != undefined && message !== "") {
        alert(message);
      }
    }
  };

  window.startGame = startGame;
  window.gameOver = gameOver;
  window.buyOrUpgradeSkin = buyOrUpgradeSkin;
  window.buyOrUpgradeWeapon = buyOrUpgradeWeapon;
  window.requestLottery = requestLottery;
  window.mintGold = mintGold;
  window.reLive = reLive;

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
      </div>
    </main>
  );
}
