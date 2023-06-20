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
import { addChain, switchChain } from "../connectors/walletChains";

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
  const metamaskAccount = useAccount();
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

  const changeChain = async () => {
    if (provider) {
      // console.log("Chain Id Web3Provider:", chainId);
      if (chainId !== 80001) {
        switchChain(80001);
      }
    }
  };

  useEffect(() => {
    if (metaMask) void changeChain();
  }, [chainId]);

  const connectWalletConnect = async () => {
    const result = await walletConnect.activate(80001);
    setToLocalStorage("isWalletConnected", true);
  };
  const disconnectWalletConnect = () => {
    walletConnect?.deactivate();
    setToLocalStorage("isWalletConnected", false);
    localStorage.removeItem("walletconnect");
    localStorage.removeItem("accessToken");
  };

  const connect = async () => {
    try {
      const result = await metaMask.activate(80001);
      setToLocalStorage("isWalletConnected", true);
    } catch (error) {
      addChain(80001);
      console.log("Connection Error: ", error);
    }
  };
  const disconnect = () => {
    metaMask?.resetState();
    setToLocalStorage("isWalletConnected", false);
    localStorage.removeItem("accessToken");
  };

  return (
    <Context.Provider
      value={{
        account: metamaskAccount || "",
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
