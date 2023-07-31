import type { AppProps } from 'next/app';
import AppProvider from '../src/AppProvider';
import { Layout } from '../src/components/Layouts';
import './../styles/globals.css'
import { StoreProvider } from 'easy-peasy';
import store from '../src/redux/store';
import React from 'react';
import { Router } from 'next/router';
import { CustomLoader, Loader } from '../src/components/Loader';

type Props = StoreProvider['props'] & { children: React.ReactNode };

// This is a workaround until easy-peasy supports React 18
const StoreProviderCasted = StoreProvider as unknown as React.ComponentType<Props>;

const MyApp = ({ Component, pageProps }: AppProps) => {

  
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const startLoading = () => setLoading(true);
    const endLoading = () => setLoading(false);

    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', endLoading);
    Router.events.on('routeChangeError', endLoading);

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', endLoading);
      Router.events.off('routeChangeError', endLoading);
    };
  }, []);

  return (
    <AppProvider>
    <Layout>
    <StoreProviderCasted store={store}>
      {loading ? <CustomLoader /> : <Component {...pageProps} />}
      </StoreProviderCasted>
      </Layout>
    </AppProvider>
  );
};

export default MyApp;
