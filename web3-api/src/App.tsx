import { useState, useEffect } from "react";

import { Network } from "@aptos-labs/ts-sdk";
import { AccountInfo, UserResponseStatus } from "@aptos-labs/wallet-standard";
import { getAdapter } from "./misc/adapter";
import { toast } from "sonner";
import { networkMap } from "./misc/utils";
import { getMovement } from "./misc/movement";
import { GET_MESSAGE_FUNCTION, GET_TOP_LIST_FUNCTION, SET_MESSAGE_FUNCTION } from "./config";

export function App() {
  const [userAccount, setUserAccount] = useState<AccountInfo>();
  const [currentNetwork, setCurrentNetwork] = useState<string>();
  const [chainId, setChainId] = useState<number>();

  useEffect(() => {
    const setIsMovement = async () => {
      const adapter = await getAdapter();
      const network = await adapter.network();
      window.isMovementNetwork = network.chainId === 27;
      setChainId(network.chainId);
    };
    setIsMovement();
  }, [chainId]);

  useEffect(() => {
    const init = async () => {
      const adapter = await getAdapter();
      if (await adapter.canEagerConnect()) {
        try {
          const response = await adapter.connect();
          if (response.status === UserResponseStatus.APPROVED) {
            setUserAccount(response.args);
            window.userAccount = response.args.address.toString();
            const network = await adapter.network();
            setCurrentNetwork(network.chainId === 27 ? "Aptos" : "Movement");
            setChainId(network.chainId);
          }
        } catch (error) {
          await adapter.disconnect().catch(() => {});
          console.log(error);
        }
      }
      // Events
      adapter.on("connect", (accInfo) => {
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

      adapter.on("accountChange", (accInfo) => {
        if (accInfo && "address" in accInfo) {
          setUserAccount(accInfo);
          window.userAccount = accInfo.address.toString();
        }
      });

      adapter.on("networkChange", (networkInfo) => {
        window.isMovementNetwork = networkInfo.chainId === 27;
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
      const response = await adapter.connect(undefined, {
        chainId: 27,
        name: Network.CUSTOM,
        url: "https://aptos.testnet.suzuka.movementlabs.xyz/v1",
      });
      if (response.status === UserResponseStatus.APPROVED) {
        setUserAccount(response.args);
        window.userAccount = response.args.address.toString();
        const network = await adapter.network();
        setCurrentNetwork(network.chainId === 27 ? "Aptos" : "Movement");
        setChainId(network.chainId);
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
      if (chainId.chainId !== 27) {
        // If chainId is different than 4 (movement devnet) change it
        const changeNetworkResponse = await adapter.changeNetwork({
          chainId: 27,
          name: Network.CUSTOM,
          url: "https://aptos.testnet.suzuka.movementlabs.xyz/v1",
        });
        if (changeNetworkResponse.status === UserResponseStatus.APPROVED) {
          setCurrentNetwork(chainId.chainId === 27 ? "Movement" : "Aptos");
          setChainId(chainId.chainId);
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
      console.log("start");
      const adapter = await getAdapter();
      console.log(adapter);
      await adapter.disconnect();
      console.log("done");
      setUserAccount(undefined);
      window.userAccount = undefined;
    } catch (error) {
      console.log(error);
    }
  };

  const switchToMovementAptosTestnet = async () => {
    try {
      const adapter = await getAdapter();
      const network = await adapter.network();

      let changeNetworkResponse;
      if (network.chainId !== 27) {
        // Aptos network is active (mainnet, devnet or testnet)
        changeNetworkResponse = await adapter.changeNetwork(networkMap[27]);
      }

      if (
        changeNetworkResponse &&
        changeNetworkResponse.status === UserResponseStatus.APPROVED
      ) {
        const changedNetwork = await adapter.network();
        toast.success(`Changed network to ${currentNetwork}!`);
        setCurrentNetwork(changedNetwork.chainId === 27 ? "Aptos" : "Movement");
        setChainId(changedNetwork.chainId);
      }
    } catch (error) {
      toast.error("Couldn't change network");
      console.log(error);
    }
  };

  window.onConnectButtonClick = onConnect;
  window.onConnectedButtonClick = onDisconnect;
  window.switchNetwork = switchToMovementAptosTestnet;

  /// ###########################################
  /// read contract function
  /// ###########################################

  const getTopList = async (onSuccess?: (receipt: any) => void) => {
    try {
      const aptos = getMovement(27);
      let accountAddress = userAccount?.address.toString();
      if (accountAddress) {
        const aptos = getMovement(27);
        const newMessage = await aptos.view({
          payload: {
            function: GET_TOP_LIST_FUNCTION,
            functionArguments: [],
          },
        });
        console.log("Message:", newMessage);
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
      const aptos = getMovement(27);
      let accountAddress = userAccount?.address.toString();
      if (accountAddress) {
        const aptos = getMovement(27);
        const newMessage = await aptos.view({
          payload: {
            function: GET_MESSAGE_FUNCTION,
            functionArguments: [accountAddress],
          },
        });
        console.log("Message:", newMessage);
      }
    } catch (e: any) {
      console.log("e:", e);
      let message = e["message"];
      if (message != null && message != undefined && message !== "") {
        alert(message);
      }
    }
  };

  window.getPlayerAllAssets = getPlayerAllAssets;

  /// ###########################################
  /// write contract function
  /// ###########################################

  const startGame = async (
    onSuccess?: (receipt: any) => void,
    onError?: (receipt: any) => void
  ) => {
    try {
      const aptos = getMovement(27);
      let accountAddress = userAccount?.address.toString();
      if (accountAddress) {
        const transaction = await aptos.transaction.build.simple({
          sender: accountAddress,
          data: {
            function: SET_MESSAGE_FUNCTION,
            functionArguments: [new Date().toString()],
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

  window.startGame = startGame;

  return (
    <main>
      <button onClick={()=>getTopList()}>getTopList</button>
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
          changeNetwork to {currentNetwork}
        </button>
        <br></br>
        <button>chainId: {chainId}</button>
      </div> */}
    </main>
  );
}
