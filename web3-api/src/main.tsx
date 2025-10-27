import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { PushUniversalWalletProvider } from "@pushchain/ui-kit";
import { CHAIN_NETWORK } from "./config";

// Define Wallet Config
const walletConfig = {
  network: CHAIN_NETWORK,
};

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PushUniversalWalletProvider config={walletConfig}>
      <App />
    </PushUniversalWalletProvider>
  </React.StrictMode>
);
