import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { PushUI, PushUniversalWalletProvider } from "@pushchain/ui-kit";

// Define Wallet Config
const walletConfig = {
  network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,
};

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PushUniversalWalletProvider config={walletConfig}>
      <App />
    </PushUniversalWalletProvider>
  </React.StrictMode>
);
