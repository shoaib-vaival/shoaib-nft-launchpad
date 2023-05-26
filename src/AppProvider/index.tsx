import React from 'react';
import { GlobalStateContextProvider } from '../context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Web3ReactProvider, Web3ReactHooks } from "@web3-react/core";
import type { MetaMask } from '@web3-react/metamask'
import { metaMaskHooks, metaMask } from './../connectors/metaMask'
import { Web3ContextProvider } from '../context/Web3Provider';
import { theme } from '../theme';
import { ChakraProvider } from '@chakra-ui/provider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const connectors: [MetaMask , Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
]

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlobalStateContextProvider>
      <ChakraProvider theme={theme}>
      <Web3ReactProvider connectors = {connectors}>
        <Web3ContextProvider>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </Web3ContextProvider>
      </Web3ReactProvider>
      </ChakraProvider>
    </GlobalStateContextProvider>
  );
};

export default AppProvider;
