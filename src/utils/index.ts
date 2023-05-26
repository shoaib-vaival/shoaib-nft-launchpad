// import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
// import { GnosisSafe } from '@web3-react/gnosis-safe'
import { MetaMask } from '@web3-react/metamask'
// import { Network } from '@web3-react/network'
import type { Connector } from '@web3-react/types'
// import { WalletConnect as WalletConnect } from '@web3-react/walletconnect'
// import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2'

export function getName(connector: Connector) {
  if (connector instanceof MetaMask) return 'MetaMask'
//   if (connector instanceof WalletConnectV2) return 'WalletConnect V2'
//   if (connector instanceof WalletConnect) return 'WalletConnect'
//   if (connector instanceof CoinbaseWallet) return 'Coinbase Wallet'
//   if (connector instanceof Network) return 'Network'
//   if (connector instanceof GnosisSafe) return 'Gnosis Safe'
  return 'Unknown'
}

export function setToLocalStorage(key:string, value:any){
    if(typeof window !== 'undefined' && window.localStorage){
        localStorage.setItem(key, value)
    }
}
export function getFromLocalStorage(key:string){
    if(typeof window !== 'undefined' && window.localStorage){
      return localStorage.getItem(key);
    }
}
//Supported file types
const supportedFileTypes = ["png", "PNG", "jpg", "JPG", "jpeg", "JPEG", "svg", "SVG"];

// Function to handle file selection
export const validateFile = (file?: File | null) => {
  if (file && !supportedFileTypes?.includes(file?.type?.split("/")[1])) {
    return "Only png and jpg files are allowed";
  } else if (file && file?.size > 6e6) {
    return "Please select a file upto 6MB";
  } else {
    return "ok";
  }
};
