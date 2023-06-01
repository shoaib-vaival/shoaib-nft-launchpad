import type { AppProps } from 'next/app';
import AppProvider from '../src/AppProvider';
import './../styles/collection.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
