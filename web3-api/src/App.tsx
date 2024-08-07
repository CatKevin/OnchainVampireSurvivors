import {
  ConnectButton,
  useActiveWallet,
  useActiveWalletChain,
  useConnectedWallets,
} from "thirdweb/react";
import { client, getGameContract, initMetaMaskWeb3 } from "./client";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import {
  prepareContractCall,
  readContract,
  sendTransaction,
  waitForReceipt,
} from "thirdweb";
import { useEffect, useState } from "react";
import { baseSepolia } from "thirdweb/chains";
import { TransactionReceipt } from "thirdweb/dist/types/transaction/types";
import Web3 from "web3";

const wallets = [
  inAppWallet(),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
];

export function App() {
  window.thirdwebClient = client;

  const wallet = useActiveWallet();
  const chainId = useActiveWalletChain();

  const [account, setAccount] = useState<String | null>(null);

  useEffect(() => {
    console.log("window.userAccount:", window.userAccount);
    if (wallet) {
      window.userAccount = wallet.getAccount()?.address;
    } else {
      window.userAccount = undefined;
    }
  }, [wallet]);

  useEffect(() => {
    if (chainId?.id == baseSepolia.id) {
      window.isBaseSepoliaNetwork = true;
    } else {
      window.isBaseSepoliaNetwork = false;
    }
  }, [chainId]);

  /// ###########################################
  /// wallet connect
  /// ###########################################

  const onConnectButtonClick = () => {
    initMetaMaskWeb3((newAccount: String) => {
      setAccount(newAccount);
    });
  };

  const onConnectedButtonClick = () => {
    // let button = document.getElementsByClassName("tw-connected-wallet")[0];
    // if (button != null && button instanceof HTMLButtonElement) {
    //   button.click();
    // }
  };

  window.onConnectButtonClick = onConnectButtonClick;
  window.onConnectedButtonClick = onConnectedButtonClick;

  /// ###########################################
  /// read contract function
  /// ###########################################

  const getTopListInfo = async (onSuccess?: (receipt: any) => void) => {
    const gameContract = getGameContract();
    if (gameContract) {
      let data = await gameContract.methods.getTopListInfo().call();
      onSuccess?.(data);
    }
  };

  const getPlayerAllAssets = async (onSuccess?: (receipt: any) => void) => {
    const gameContract = getGameContract();
    if (account != null && gameContract) {
      let data = await gameContract.methods.getPlayerAllAssets(account).call();
      onSuccess?.(data);
    }
  };

  const getPlayerLastLotteryResult = async (
    onSuccess?: (receipt: any) => void
  ) => {
    const gameContract = getGameContract();
    if (account != null && gameContract) {
      let data = await gameContract.methods
        .getPlayerLastLotteryResult(account)
        .call();
      onSuccess?.(data);
    }
  };

  const getPlayerAllWeaponInfo = async (onSuccess?: (receipt: any) => void) => {
    const gameContract = getGameContract();
    if (account != null && gameContract) {
      let data = await gameContract.methods
        .getPlayerAllWeaponInfo(account)
        .call();
      onSuccess?.(data);
    }
  };

  const getPlayerAllSkinInfo = async (onSuccess?: (receipt: any) => void) => {
    const gameContract = getGameContract();
    if (account != null && gameContract) {
      let data = await gameContract.methods
        .getPlayerAllSkinInfo(account)
        .call();
      onSuccess?.(data);
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
    const gameContract = getGameContract();
    if (account != null && gameContract) {
      await gameContract.methods
        .startGame()
        .send({
          from: account,
        })
        .on("receipt", function (receipt: any) {
          console.log(receipt);
          onSuccess?.(receipt);
        })
        .on("error", function (error: any) {
          console.log(error);
          alert("start game failed！");
          onError?.(error);
        });
    }
  };

  const gameOver = async (
    time: bigint,
    kills: bigint,
    onSuccess?: (receipt: any) => void,
    onError?: (receipt: any) => void
  ) => {
    const gameContract = getGameContract();
    if (account != null && gameContract) {
      await gameContract.methods
        .gameOver(time, kills)
        .send({
          from: account,
        })
        .on("receipt", function (receipt: any) {
          console.log(receipt);
          onSuccess?.(receipt);
        })
        .on("error", function (error: any) {
          console.log(error);
          alert("gameOver failed！");
          onError?.(error);
        });
    }
  };

  const buyOrUpgradeSkin = async (
    id: bigint,
    onSuccess?: (receipt: any) => void,
    onError?: (receipt: any) => void
  ) => {
    const gameContract = getGameContract();
    if (account != null && gameContract) {
      await gameContract.methods
        .buyOrUpgradeSkin(id)
        .send({
          from: account,
        })
        .on("receipt", function (receipt: any) {
          console.log(receipt);
          onSuccess?.(receipt);
        })
        .on("error", function (error: any) {
          console.log(error);
          alert("buyOrUpgradeSkin failed！");
          onError?.(error);
        });
    }
  };

  const buyOrUpgradeWeapon = async (
    id: bigint,
    onSuccess?: (receipt: any) => void,
    onError?: (receipt: any) => void
  ) => {
    const gameContract = getGameContract();
    if (account != null && gameContract) {
      await gameContract.methods
        .buyOrUpgradeWeapon(id)
        .send({
          from: account,
        })
        .on("receipt", function (receipt: any) {
          console.log(receipt);
          onSuccess?.(receipt);
        })
        .on("error", function (error: any) {
          console.log(error);
          alert("buyOrUpgradeWeapon failed！");
          onError?.(error);
        });
    }
  };

  const requestLottery = async (
    onSuccess?: (receipt: any) => void,
    onError?: (receipt: any) => void
  ) => {
    const gameContract = getGameContract();
    if (account != null && gameContract) {
      let gasTokenAmount = await gameContract.methods.getGasTokenAmountByUsd(4).call();
      await gameContract.methods
        .requestLottery()
        .send({
          from: account,
          value: gasTokenAmount,
        })
        .on("receipt", function (receipt: any) {
          console.log(receipt);
          onSuccess?.(receipt);
        })
        .on("error", function (error: any) {
          console.log(error);
          alert("requestLottery failed！");
          onError?.(error);
        });
    }
  };

  const mintGold = async (
    onSuccess?: (receipt: any) => void,
    onError?: (receipt: any) => void
  ) => {
    const gameContract = getGameContract();
    if (account != null && gameContract) {
      let gasTokenAmount = await gameContract.methods.getGasTokenAmountByUsd(1).call();
      await gameContract.methods
        .mintGold()
        .send({
          from: account,
          value: gasTokenAmount,
        })
        .on("receipt", function (receipt: any) {
          console.log(receipt);
          onSuccess?.(receipt);
        })
        .on("error", function (error: any) {
          console.log(error);
          alert("mintGold failed！");
          onError?.(error);
        });
    }
  };

  const reLive = async (
    onSuccess?: (receipt: any) => void,
    onError?: (receipt: any) => void
  ) => {
    const gameContract = getGameContract();
    if (account != null && gameContract) {
      let gasTokenAmount = await gameContract.methods.getGasTokenAmountByUsd(5).call();
      await gameContract.methods
        .reLive()
        .send({
          from: account,
          value: gasTokenAmount,
        })
        .on("receipt", function (receipt: any) {
          console.log(receipt);
          onSuccess?.(receipt);
        })
        .on("error", function (error: any) {
          console.log(error);
          alert("reLive failed！");
          onError?.(error);
        });
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
        {/* <ConnectButton client={client} wallets={wallets} chain={move_evm} /> */}
      </div>
    </main>
  );
}
