import { initializeConnector } from "@web3-react/core";
// import { WalletConnect } from "@web3-react/walletconnect";
// import { URLS } from "./walletChains";

// export const [walletConnect, walletConnecthooks] =
//   initializeConnector<WalletConnect>(
//     (actions) =>
//       new WalletConnect({
//         actions,
//         options: {
//           rpc: { [80001]: "https://rpc-mumbai.maticvigil.com" },
//         },
//       })
//   );

import { WalletConnect } from "@web3-react/walletconnect-v2";
import { MAINNET_CHAINS } from "./walletChains";

const [mainnet, ...optionalChains] = Object.keys(MAINNET_CHAINS).map(Number);

export const [walletConnect, walletConnecthooks] =
  initializeConnector<WalletConnect>(
    (actions) =>
      new WalletConnect({
        actions,
        defaultChainId: 80001,
        options: {
          rpcMap: {
            [80001]:
              "https://polygon-mumbai.g.alchemy.com/v2/PX1XSmZcVYruPtpF_BoYDX-92sIdhk0T}",
          },
          // projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
          projectId: "610d37cebcee58b655d731c1c8425709",
          chains: [80001],
          optionalChains,
          optionalMethods: [
            "eth_signTypedData",
            "eth_signTypedData_v4",
            "eth_sign",
          ],
          showQrModal: true,
        },
      })
  );
