import React, { useContext, useState, createContext, useEffect } from "react";
import { getFromLocalStorage, setToLocalStorage } from "../utils";
import { metaMask, metaMaskHooks } from "./../connectors/metaMask";
import Web3 from "web3";
import {
  useWeb3React,
  Web3ReactHooks,
  Web3ReactProvider,
} from "@web3-react/core";
import { walletConnect, walletConnecthooks } from "../connectors/walletConnect";

// const isActivating = useIsActivating()

// const isActive = useIsActive()

// const provider = useProvider()
// const ENSNames = useENSNames(provider)

interface Web3Interface {
  account: string | null;
  chainId: string | number | null;
  walletConnectAccount: string | string[] | null;
  provider: ReturnType<Web3ReactHooks["useProvider"]>;
  connect: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  disconnect: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  connectWalletConnect: React.Dispatch<React.SetStateAction<string | null>>;
  disconnectWalletConnect: React.Dispatch<React.SetStateAction<string | null>>;
}

const Context = createContext({} as Web3Interface);

export const useWeb3Context = () => useContext(Context);

export const Web3ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { useAccount } = metaMaskHooks;

  const {
    useAccounts,
    useIsActivating,
    useIsActive,
    useProvider,
    useENSNames,
    useChainId,
  } = walletConnecthooks;

  const { account, provider, chainId } = useWeb3React();
  const walletConnectAccount = useAccounts();
  const isWalletConnected = getFromLocalStorage("isWalletConnected");

  useEffect(() => {
    if (isWalletConnected === "true") {
      try {
        metaMask.connectEagerly();
        console.log(chainId, "chainId", isWalletConnected);
      } catch (error) {
        walletConnect.connectEagerly();
      }
    }

    // if (provider?.connection.url == "metamask") {
    //   metaMask.activate();
    // } else {
    //   walletConnect.activate();
    // }
  }, []);

  const connectWalletConnect = async () => {
    const result = await walletConnect.activate(80001);
    setToLocalStorage("isWalletConnected", true);
  };
  const disconnectWalletConnect = () => {
    walletConnect?.deactivate();
    setToLocalStorage("isWalletConnected", false);
    localStorage.removeItem("walletconnect");
  };

  const connect = async () => {
    const result = await metaMask.activate(80001);
    setToLocalStorage("isWalletConnected", true);
  };
  const disconnect = () => {
    if (metaMask?.resetState) {
      metaMask?.resetState();
      setToLocalStorage("isWalletConnected", false);
    }
  };

  return (
    <Context.Provider
      value={{
        account: account || "",
        chainId: chainId || "",
        walletConnectAccount: walletConnectAccount || "",
        provider: provider,
        connect: connect,
        disconnect: disconnect,
        connectWalletConnect: connectWalletConnect,
        disconnectWalletConnect: disconnectWalletConnect,
      }}
    >
      {children}
    </Context.Provider>
  );
};
