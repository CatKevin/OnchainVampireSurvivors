import { createThirdwebClient, defineChain, getContract } from "thirdweb";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const clientId = import.meta.env.VITE_TEMPLATE_CLIENT_ID;


export const merlinTestnet = defineChain({
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

export const bobTestnet = defineChain({
  id: 808813,
  name: "BOB Sepolia Testnet",
  rpc: "https://bob-sepolia.rpc.gobob.xyz/",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  blockExplorers: [
    {
      name: "bob-sepolia-dm6uw0yhh3 explorer",
      url: "https://bob-sepolia.explorer.gobob.xyz/",
    },
  ],
  testnet: true,
});

export const zkBTCDevnet = defineChain({
  id: 19236265,
  name: "zkBTC devnet",
  rpc: "https://devilmorallyelephant-rpc.eu-north-2.gateway.fm",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  blockExplorers: [
    {
      name: "zkBTC devilmorallyelephant explorer",
      url: "https://devilmorallyelephant-blockscout.eu-north-2.gateway.fm",
    },
  ],
  testnet: true,
});

export const client = createThirdwebClient({
  clientId: clientId,
});

export const merlinTestnetGameContract = getContract({
  client,
  chain: merlinTestnet,
  address: "0x47D976E1aAF44e75CAcdf636e83a07E46Ac3eEDc", // Merlin testnet
});

export const bobTestnetGameContract = getContract({
  client,
  chain: bobTestnet,
  address: "0xD268c248f82217df2140fB6Ff9e2ddbD858925aa", // Bob testnet
});

export const zkBTCDevnetGameContract = getContract({
  client,
  chain: zkBTCDevnet,
  address: "0xD268c248f82217df2140fB6Ff9e2ddbD858925aa", // zkBTC Devnet
});

export const getGameContract = (chain: String | null) => {
  switch(chain) {
    case "MerlinTestnet":
      return merlinTestnetGameContract;
    case "BobTestnet":
      return bobTestnetGameContract;
    case "zkBTCDevnet":
      return zkBTCDevnetGameContract;
    default:
      return merlinTestnetGameContract;
  }
}



window.thirdwebClient = client;
