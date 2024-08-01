import { createThirdwebClient, defineChain, getContract } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const clientId = import.meta.env.VITE_TEMPLATE_CLIENT_ID;

export const client = createThirdwebClient({
  clientId: clientId,
});

export const GameContract = getContract({
  client,
  chain: baseSepolia,
  address: "0x307BA0c49666435f6055422af07645163eE68473", // ZKGameClient contract
});

window.thirdwebClient = client;
