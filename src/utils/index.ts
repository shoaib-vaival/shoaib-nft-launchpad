import { MetaMask } from "@web3-react/metamask";
import type { Connector } from "@web3-react/types";
import { WalletConnect as WalletConnect } from "@web3-react/walletconnect";

export function getName(connector: Connector) {
  if (connector instanceof MetaMask) return "MetaMask";
  if (connector instanceof WalletConnect) return "WalletConnect"; 
  return "Unknown";
}

export function setToLocalStorage(key: string, value: any) {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(key, value);
  }
}
export function getFromLocalStorage(key: string) {
  if (typeof window !== "undefined" && window.localStorage) {
    return localStorage.getItem(key);
  }
}
//Supported file types
const supportedFileTypes = [
  "png",
  "PNG",
  "jpg",
  "JPG",
  "jpeg",
  "JPEG",
  "svg",
  "SVG",
];

// Function to handle file selection
export const validateFile = (file?: File | null) => {
  if (file && !supportedFileTypes?.includes(file?.type?.split('/')[1])) {
    return 'Only png and jpg files are allowed';
  } else if (file && file?.size > 6e6) {
    return 'Please select a file upto 6MB';
  } else {
    return 'ok';
  }
};
