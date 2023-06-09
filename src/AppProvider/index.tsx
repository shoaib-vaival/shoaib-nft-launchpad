import React from "react";
import { GlobalStateContextProvider } from "../context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Web3ReactProvider, Web3ReactHooks } from "@web3-react/core";
import type { MetaMask } from "@web3-react/metamask";
import { metaMaskHooks, metaMask } from "./../connectors/metaMask";
import { Web3ContextProvider } from "../context/Web3Provider";
import { theme } from "../theme";
import { ChakraProvider } from "@chakra-ui/provider";
import { WalletConnect } from "@web3-react/walletconnect";
import { walletConnect, walletConnecthooks } from "../connectors/walletConnect";
import { Web3Provider } from "@ethersproject/providers";
import { ethers } from "ethers";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const connectors: [MetaMask | WalletConnect, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnecthooks],
];

// function getLibrary(provider: any, connectors: any) {
//   return new Web3Provider(provider);
// }
// function getLibrary(provider: any) {
//   const library = new ethers.providers.Web3Provider(provider);
//   return library;
// }

// function getLibrary(provider: any): Web3Provider {
//   // this will vary according to whether you use e.g. ethers or web3.js
//   const library = new Web3Provider(provider)
//   library.pollingInterval = 12000
//   return library
// }
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlobalStateContextProvider>
      <ChakraProvider theme={theme}>
        <Web3ReactProvider connectors={connectors}>
          <Web3ContextProvider>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </Web3ContextProvider>
        </Web3ReactProvider>
      </ChakraProvider>
    </GlobalStateContextProvider>
  );
};

export default AppProvider;
