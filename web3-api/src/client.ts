import { createThirdwebClient, defineChain, getContract } from "thirdweb";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const clientId = import.meta.env.VITE_TEMPLATE_CLIENT_ID;

export const thetaTestnet = defineChain({
  id: 365,
  name: "Theta Testnet",
  rpc: "https://eth-rpc-api-testnet.thetatoken.org/rpc",
  nativeCurrency: { name: "TFUEL", symbol: "TFUEL", decimals: 18 },
  blockExplorers: [
    {
      name: "theta testnet explorer",
      url: "https://beta-explorer.thetatoken.org/",
    },
  ],
  testnet: true,
});

export const client = createThirdwebClient({
  clientId: clientId,
});

export const GameContract = getContract({
  client,
  chain: thetaTestnet,
  address: "0x61e95dd9a59772abcfcd3e3244468f9ebef4ef1f", // ZKGameClient contract
});

window.thirdwebClient = client;
