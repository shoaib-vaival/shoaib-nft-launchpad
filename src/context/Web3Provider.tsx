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
  connect: React.Dispatch<React.SetStateAction<string | null>>;
  disconnect: React.Dispatch<React.SetStateAction<string | null>>;
  connectWalletConnect: React.Dispatch<React.SetStateAction<string | null>>;
  disconnectWalletConnect: React.Dispatch<React.SetStateAction<string | null>>;
}

const Context = createContext({} as Web3Interface);

export function useWeb3Context() {
  return useContext(Context);
}

export function Web3ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { useChainId, useAccount } = metaMaskHooks;

  const {
    useAccounts,
    useIsActivating,
    useIsActive,
    useProvider,
    useENSNames,
  } = walletConnecthooks;

  const walletConnectAccount = useAccounts();
  const chainId = useChainId();
  const account = useAccount();

  const isWalletConnected = getFromLocalStorage("isWalletConnected");

  useEffect(() => {
    console.log(isWalletConnected);
    if (isWalletConnected === "true") {
      metaMask.connectEagerly();
      console.log(chainId, "chainId", isWalletConnected);
    }
  }, []);

  const connectWalletConnect = async () => {
    const result = await walletConnect.activate(chainId);
    setToLocalStorage("isWalletConnected", true);
  };
  const disconnectWalletConnect = () => {
    walletConnect?.resetState();
    setToLocalStorage("isWalletConnected", false);
  };

  const connect = async () => {
    const result = await metaMask.activate(chainId);
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
        connect: connect,
        disconnect: disconnect,
        connectWalletConnect: connectWalletConnect,
        disconnectWalletConnect: disconnectWalletConnect,
      }}
    >
      {children}
    </Context.Provider>
  );
}
