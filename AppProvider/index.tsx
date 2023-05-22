import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme';
import { GlobalStateContextProvider } from '../context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import '@fontsource/inter/400.css';
// import '@fontsource/inter/500.css';
// import '@fontsource/inter/600.css';
// import '@fontsource/inter/700.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlobalStateContextProvider>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </ChakraProvider>
    </GlobalStateContextProvider>
  );
};

export default AppProvider;
