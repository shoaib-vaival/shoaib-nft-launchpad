import type { AppProps } from "next/app";
import AppProvider from "../AppProvider";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
