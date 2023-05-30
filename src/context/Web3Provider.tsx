import React, { useContext, useState, createContext, useEffect } from 'react';
import { getFromLocalStorage, setToLocalStorage } from '../utils';
import { metaMask , metaMaskHooks} from './../connectors/metaMask'

// const isActivating = useIsActivating()

// const isActive = useIsActive()

// const provider = useProvider()
// const ENSNames = useENSNames(provider)

interface Web3Interface {
    account: string | null;
    connect: React.Dispatch<React.SetStateAction<string | null>>;
    disconnect: React.Dispatch<React.SetStateAction<string | null>>;
}

const Context = createContext({} as Web3Interface);

export function useWeb3Context() {
    return useContext(Context);
}

export function Web3ContextProvider({ children }: { children: React.ReactNode }) {
    const { useChainId, useAccount } = metaMaskHooks
    console.log(metaMaskHooks);
    const chainId = useChainId()
    const account = useAccount()
    const isWalletConnected = getFromLocalStorage('isWalletConnected');

    useEffect(()=>{
        console.log(isWalletConnected)
        if(isWalletConnected === true){
            metaMask.connectEagerly()
            console.log(chainId,'chainId',isWalletConnected )
        }
    },[])

    const  connect = async()=>{
        const result = await metaMask.activate(chainId)
        setToLocalStorage('isWalletConnected', true)

    }
    const disconnect = ()=>{
        if (metaMask?.resetState) {
            metaMask?.resetState()
           setToLocalStorage('isWalletConnected', false)
        }
        }
 

  return <Context.Provider value={{account:account||'', connect:connect, disconnect:disconnect}}>{children}</Context.Provider>;
}
