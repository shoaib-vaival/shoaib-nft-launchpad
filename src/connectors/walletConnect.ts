import { initializeConnector } from "@web3-react/core";
import { WalletConnect } from "@web3-react/walletconnect";

import { URLS } from "./walletChains";

export const [walletConnect, walletConnecthooks] =
  initializeConnector<WalletConnect>(
    (actions) =>
      new WalletConnect({
        actions,
        options: {
          rpc: { 80001: "https://rpc-mumbai.maticvigil.com" },
        },
      })
  );
