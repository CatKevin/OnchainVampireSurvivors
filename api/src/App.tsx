import { useState, useEffect } from "react";

import { Network } from "@aptos-labs/ts-sdk";
import { AccountInfo, UserResponseStatus } from "@aptos-labs/wallet-standard";
import { getAdapter } from "./misc/adapter";
import { toast } from "sonner";
import { BUY_OR_UPGRADE_CHARACTER_FUNCTION, BUY_OR_UPGRADE_WEAPON_FUNCTION, GAME_OVER_FUNCTION, GET_PLAYER_ALL_ASSETS_FUNCTION, GET_PLAYER_ALL_CHARACTERS_INFO_FUNCTION, GET_PLAYER_ALL_WEAPONS_INFO_FUNCTION, GET_PLAYER_LAST_LOTTERY_RESULT_FUNCTION, GET_TOP_LIST_INFO_FUNCTION, MINT_GOLD_FUNCTION, REQUEST_LOTTERY_FUNCTION, START_GAME_FUNCTION } from "./config";
import { networkMap } from "./misc/utils";
import { getAptos } from "./misc/aptos";

export function App() {
  const [userAccount, setUserAccount] = useState<AccountInfo>();
  const [chainId, setChainId] = useState<number>();

  useEffect(() => {
    const setIsAptosTestnet = async () => {
      const adapter = await getAdapter();
      const network = await adapter.network();
      window.isAptosTestnet = network.chainId === 2;
      setChainId(network.chainId);
    };
    setIsAptosTestnet();
  }, [chainId]);

  useEffect(() => {
    const init = async () => {
      const adapter = await getAdapter();
      if (await adapter.canEagerConnect()) {
        try {
          const response = await adapter.connect(undefined, networkMap[2]);
          if (response.status === UserResponseStatus.APPROVED) {
            setUserAccount(response.args);
            window.userAccount = response.args.address.toString();
            const network = await adapter.network();
            setChainId(network.chainId);
            window.isAptosTestnet = network.chainId === 2;
          }
        } catch (error) {
          await adapter.disconnect().catch(() => {});
          setUserAccount(undefined);
          console.log(error);
          window.isAptosTestnet = false;
        }
      }
      // Events
      adapter.on("connect", (accInfo: any) => {
        if (accInfo && "address" in accInfo) {
          setUserAccount(accInfo);
          window.userAccount = accInfo.address.toString();
        }
      });

      adapter.on("disconnect", () => {
        setUserAccount(undefined);
        window.userAccount = undefined;
        console.log("adapter disconnected");
      });

      adapter.on("accountChange", (accInfo: any) => {
        if (accInfo && "address" in accInfo) {
          setUserAccount(accInfo);
          window.userAccount = accInfo.address.toString();
        }
      });

      adapter.on("networkChange", (networkInfo: any) => {
        window.isAptosTestnet = networkInfo.chainId === 2;
        if(networkInfo.chainId !== 2) {
          setUserAccount(undefined);
          window.userAccount = undefined;
        }
      });
    };
    init();
    // Try eagerly connect
  }, []);

  /// ###########################################
  /// wallet connect
  /// ###########################################

  const onConnect = async () => {
    const adapter = await getAdapter();
    try {
      const response = await adapter.connect(undefined, networkMap[2]);
      if (response.status === UserResponseStatus.APPROVED) {
        setUserAccount(response.args);
        window.userAccount = response.args.address.toString();
        const network = await adapter.network();
        setChainId(network.chainId);
        window.isAptosTestnet = network.chainId === 2;
        toast.success("Wallet connected!");
      } else {
        toast.error("User rejected connection");
        return;
      }
    } catch (error) {
      toast.error("Wallet connection failed!");
      // If error, disconnect ignore error
      await adapter.disconnect().catch(() => {});
      return;
    }
    try {
      // Check chainId
      const chainId = await adapter.network();
      window.isAptosTestnet = chainId.chainId === 2;
      if (chainId.chainId !== 2) {
        const changeNetworkResponse = await adapter.changeNetwork(networkMap[2]);
        if (changeNetworkResponse.status === UserResponseStatus.APPROVED) {
          const network = await adapter.network();
          window.isAptosTestnet = network.chainId === 2;
          setChainId(network.chainId);
          toast.success("Network changed!");
        } else {
          toast.error("User rejected network change");
          return;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onDisconnect = async () => {
    try {
      const adapter = await getAdapter();
      await adapter.disconnect();
      setUserAccount(undefined);
      window.userAccount = undefined;
      window.isAptosTestnet = false;
    } catch (error) {
      console.log(error);
    }
  };

  const switchToAptosTestnet = async () => {
    try {
      const adapter = await getAdapter();
      const network = await adapter.network();
      window.isAptosTestnet = network.chainId === 2;
      
      let changeNetworkResponse;
      if (network.chainId !== 2) {
        changeNetworkResponse = await adapter.changeNetwork(networkMap[2]);
      }

      if (
        changeNetworkResponse &&
        changeNetworkResponse.status === UserResponseStatus.APPROVED
      ) {
        const changedNetwork = await adapter.network();
        setChainId(changedNetwork.chainId);
        window.isAptosTestnet = changedNetwork.chainId === 2;
      }
    } catch (error) {
      toast.error("Couldn't change network");
      console.log(error);
    }
  };

  window.onConnectButtonClick = onConnect;
  window.onConnectedButtonClick = onDisconnect;
  window.switchNetwork = switchToAptosTestnet;

  /// ###########################################
  /// read contract function
  /// ###########################################

  const getTopListInfo = async (onSuccess?: (receipt: any) => void) => {
    try {
      let accountAddress = userAccount?.address.toString();
      console.log('accountAddress:', accountAddress)
      if (accountAddress) {
        const aptos = getAptos();
        const data = await aptos.view({
          payload: {
            function: GET_TOP_LIST_INFO_FUNCTION,
            functionArguments: [],
          },
        });
        console.log(data);
        onSuccess?.(data);
      }
    } catch (e: any) {
      console.log("e:", e);
      let message = e["message"];
      if (message != null && message != undefined && message !== "") {
        alert(message);
      }
    }
  };

  const getPlayerAllAssets = async (onSuccess?: (receipt: any) => void) => {
    try {
      let accountAddress = userAccount?.address.toString();
      if (accountAddress) {
        const aptos = getAptos();
        const data = await aptos.view({
          payload: {
            function: GET_PLAYER_ALL_ASSETS_FUNCTION,
            functionArguments: [accountAddress],
          },
        });
        console.log(data);
        onSuccess?.(data);
      }
    } catch (e: any) {
      console.log("e:", e);
      let message = e["message"];
      if (message != null && message != undefined && message !== "") {
        alert(message);
      }
    }
  };

  const getPlayerAllWeaponInfo = async (onSuccess?: (receipt: any) => void) => {
    try {
      let accountAddress = userAccount?.address.toString();
      if (accountAddress) {
        const aptos = getAptos();
        const data = await aptos.view({
          payload: {
            function: GET_PLAYER_ALL_WEAPONS_INFO_FUNCTION,
            functionArguments: [accountAddress],
          },
        });
        console.log(data);
        onSuccess?.(data);
      }
    } catch (e: any) {
      console.log("e:", e);
      let message = e["message"];
      if (message != null && message != undefined && message !== "") {
        alert(message);
      }
    }
  };

  const getPlayerAllSkinInfo = async (onSuccess?: (receipt: any) => void) => {
    try {
      let accountAddress = userAccount?.address.toString();
      if (accountAddress) {
        const aptos = getAptos();
        const data = await aptos.view({
          payload: {
            function: GET_PLAYER_ALL_CHARACTERS_INFO_FUNCTION,
            functionArguments: [accountAddress],
          },
        });
        console.log(data);
        onSuccess?.(data);
      }
    } catch (e: any) {
      console.log("e:", e);
      let message = e["message"];
      if (message != null && message != undefined && message !== "") {
        alert(message);
      }
    }
  };

  const getPlayerLastLotteryResult = async (onSuccess?: (receipt: any) => void) => {
    try {
      let accountAddress = userAccount?.address.toString();
      if (accountAddress) {
        const aptos = getAptos();
        const data = await aptos.view({
          payload: {
            function: GET_PLAYER_LAST_LOTTERY_RESULT_FUNCTION,
            functionArguments: [accountAddress],
          },
        });
        console.log(data);
        onSuccess?.(data);
      }
    } catch (e: any) {
      console.log("e:", e);
      let message = e["message"];
      if (message != null && message != undefined && message !== "") {
        alert(message);
      }
    }
  };

  window.getTopListInfo = getTopListInfo;
  window.getPlayerAllAssets = getPlayerAllAssets;
  window.getPlayerAllWeaponInfo = getPlayerAllWeaponInfo;
  window.getPlayerAllSkinInfo = getPlayerAllSkinInfo;
  window.getPlayerLastLotteryResult = getPlayerLastLotteryResult;

  /// ###########################################
  /// write contract function
  /// ###########################################

  const startGame = async (
    onSuccess?: (receipt: any) => void,
    onError?: (receipt: any) => void
  ) => {
    try {
      const aptos = getAptos();
      let accountAddress = userAccount?.address.toString();
      if (accountAddress) {
        const transaction = await aptos.transaction.build.simple({
          sender: accountAddress,
          data: {
            function: START_GAME_FUNCTION,
            functionArguments: [],
          },
        });
        const adapter = await getAdapter();
        const committedTxn = await adapter.signAndSubmitTransaction(
          transaction
        );
        console.log("signedTx:", committedTxn);
        if (committedTxn.status !== UserResponseStatus.APPROVED) {
          alert("Transaction rejected");
          onError?.("Transaction rejected");
        } else {
          const args = committedTxn.args;
          console.log(`Submitted transaction: ${args.hash}`);
          const response = await aptos.waitForTransaction({ transactionHash: args.hash });
          // console.log({ response })
          if(response.success == true) {
            onSuccess?.(response);
          }
        }
      }
    } catch (e: any) {
      console.log("e:", e);
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
      const aptos = getAptos();
      let accountAddress = userAccount?.address.toString();
      if (accountAddress) {
        const transaction = await aptos.transaction.build.simple({
          sender: accountAddress,
          data: {
            function: GAME_OVER_FUNCTION,
            functionArguments: [time, kills],
          },
        });
        const adapter = await getAdapter();
        const committedTxn = await adapter.signAndSubmitTransaction(
          transaction
        );
        console.log("signedTx:", committedTxn);
        if (committedTxn.status !== UserResponseStatus.APPROVED) {
          alert("Transaction rejected");
          onError?.("Transaction rejected");
        } else {
          const args = committedTxn.args;
          console.log(`Submitted transaction: ${args.hash}`);
          const response = await aptos.waitForTransaction({ transactionHash: args.hash });
          // console.log({ response })
          if(response.success == true) {
            onSuccess?.(response);
          }
        }
      }
    } catch (e: any) {
      console.log("e:", e);
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
      const aptos = getAptos();
      let accountAddress = userAccount?.address.toString();
      if (accountAddress) {
        const transaction = await aptos.transaction.build.simple({
          sender: accountAddress,
          data: {
            function: BUY_OR_UPGRADE_CHARACTER_FUNCTION,
            functionArguments: [id],
          },
        });
        const adapter = await getAdapter();
        const committedTxn = await adapter.signAndSubmitTransaction(
          transaction
        );
        console.log("signedTx:", committedTxn);
        if (committedTxn.status !== UserResponseStatus.APPROVED) {
          alert("Transaction rejected");
          onError?.("Transaction rejected");
        } else {
          const args = committedTxn.args;
          console.log(`Submitted transaction: ${args.hash}`);
          const response = await aptos.waitForTransaction({ transactionHash: args.hash });
          // console.log({ response })
          if(response.success == true) {
            onSuccess?.(response);
          }
        }
      }
    } catch (e: any) {
      console.log("e:", e);
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
      const aptos = getAptos();
      let accountAddress = userAccount?.address.toString();
      if (accountAddress) {
        const transaction = await aptos.transaction.build.simple({
          sender: accountAddress,
          data: {
            function: BUY_OR_UPGRADE_WEAPON_FUNCTION,
            functionArguments: [id],
          },
        });
        const adapter = await getAdapter();
        const committedTxn = await adapter.signAndSubmitTransaction(
          transaction
        );
        console.log("signedTx:", committedTxn);
        if (committedTxn.status !== UserResponseStatus.APPROVED) {
          alert("Transaction rejected");
          onError?.("Transaction rejected");
        } else {
          const args = committedTxn.args;
          console.log(`Submitted transaction: ${args.hash}`);
          const response = await aptos.waitForTransaction({ transactionHash: args.hash });
          // console.log({ response })
          if(response.success == true) {
            onSuccess?.(response);
          }
        }
      }
    } catch (e: any) {
      console.log("e:", e);
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
      const aptos = getAptos();
      let accountAddress = userAccount?.address.toString();
      if (accountAddress) {
        const transaction = await aptos.transaction.build.simple({
          sender: accountAddress,
          data: {
            function: REQUEST_LOTTERY_FUNCTION,
            functionArguments: [],
          },
        });
        const adapter = await getAdapter();
        const committedTxn = await adapter.signAndSubmitTransaction(
          transaction
        );
        console.log("signedTx:", committedTxn);
        if (committedTxn.status !== UserResponseStatus.APPROVED) {
          alert("Transaction rejected");
          onError?.("Transaction rejected");
        } else {
          const args = committedTxn.args;
          console.log(`Submitted transaction: ${args.hash}`);
          const response = await aptos.waitForTransaction({ transactionHash: args.hash });
          // console.log({ response })
          if(response.success == true) {
            onSuccess?.(response);
          }
        }
      }
    } catch (e: any) {
      console.log("e:", e);
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
      const aptos = getAptos();
      let accountAddress = userAccount?.address.toString();
      if (accountAddress) {
        const transaction = await aptos.transaction.build.simple({
          sender: accountAddress,
          data: {
            function: MINT_GOLD_FUNCTION,
            functionArguments: [],
          },
        });
        const adapter = await getAdapter();
        const committedTxn = await adapter.signAndSubmitTransaction(
          transaction
        );
        console.log("signedTx:", committedTxn);
        if (committedTxn.status !== UserResponseStatus.APPROVED) {
          alert("Transaction rejected");
          onError?.("Transaction rejected");
        } else {
          const args = committedTxn.args;
          console.log(`Submitted transaction: ${args.hash}`);
          const response = await aptos.waitForTransaction({ transactionHash: args.hash });
          // console.log({ response })
          if(response.success == true) {
            onSuccess?.(response);
          }
        }
      }
    } catch (e: any) {
      console.log("e:", e);
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
      alert('The current function is not open yet!!');
      onError?.("");
    } catch(e: any) {
      let message = e["message"];
      if(message != null && message != undefined && message !== "") {
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
      {/* <button onClick={()=>getTopListInfo()}>getTopListInfo</button> */}
      {/* <button onClick={() => startGame()}>startGame</button>
      <br></br>
      <button onClick={() => getPlayerAllAssets()}>getPlayerAllAssets</button> */}
      {/* <div style={{ display: "none" }}>
        <button
          onClick={async () => {
            if (userAccount?.address !== undefined) {
              await onDisconnect();
            } else {
              await onConnect();
            }
          }}
          className=" relative overflow-hidden bg-black text-white w-[180px] h-[50px] rounded-lg glow-effect hover:scale-110 transition-transform duration-250"
        >
          <span className="absolute inset-0 flex items-center justify-center z-10">
            {userAccount?.address !== undefined
              ? userAccount?.address.toString()?.substring(0, 10)
              : "Connect"}
          </span>
          <div className="absolute inset-0 bg-black stars-bg animate-move-stars z-0"></div>
        </button>
        <button onClick={switchToMovementAptosTestnet}>
          changeNetwork to ...
        </button>
        <br></br>
        <button>chainId: {chainId}</button>
      </div> */}
    </main>
  );
}
