import { createThirdwebClient, defineChain, getContract } from "thirdweb";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const clientId = import.meta.env.VITE_TEMPLATE_CLIENT_ID;

// merlin testnet
export const testnet = defineChain({
  id: 686868,
  name: "Merlin Testnet",
  rpc: "https://testnet-rpc.merlinchain.io",
  nativeCurrency: { name: "BTC", symbol: "BTC", decimals: 18 },
  blockExplorers: [
    {
      name: "The Merlin Testnet Blockchain Explorer",
      url: "https://testnet-scan.merlinchain.io",
    },
  ],
  testnet: true,
});

export const client = createThirdwebClient({
  clientId: clientId,
});

export const GameContract = getContract({
  client,
  chain: testnet,
  address: "0x47D976E1aAF44e75CAcdf636e83a07E46Ac3eEDc", // Merlin testnet
});

window.thirdwebClient = client;
