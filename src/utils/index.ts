import { MetaMask } from "@web3-react/metamask";
import type { Connector } from "@web3-react/types";
import { WalletConnect as WalletConnect } from "@web3-react/walletconnect";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { color, Text} from "@chakra-ui/react";
export const getName = (connector: Connector) => {
  if (connector instanceof MetaMask) return "MetaMask";
  if (connector instanceof WalletConnect) return "WalletConnect";
  return "Unknown";
};

export const setToLocalStorage = (key: string, value: any) => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(key, value);
  }
}
export const getFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined" && window.localStorage) {
    return localStorage.getItem(key);
  }
};
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
export const validateFile = (file?: File | null, fileSizeLimit?: number) => {
  if (file && !supportedFileTypes?.includes(file?.type?.split("/")[1])) {
    return  ("Only png and jpg files are allowed");
  } else if (file && file?.size > (fileSizeLimit ? fileSizeLimit : 6e6)) {
    return `Please select a file upto 6MB`;
  } else {
    return "ok";
  }
};

export const dayJs = (date:any)=>{
   dayjs.extend(relativeTime)
   return dayjs(date)
}
export  const convertToQueryParam = (obj: Record<string, any>): Record<string, string> =>{
  const queryParams: Record<string, string> = {};

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      queryParams[key] = obj[key]
        .map((value: any) => encodeURIComponent(value))
        .join(`&${encodeURIComponent(key)}=`);
    }
  }

  return queryParams;
}

export  const convertPropertyObject=(obj: any): any=> {
  const convertedObj: any = {};

  for (const key in obj.property) {
    if (obj.property.hasOwnProperty(key)) {
      const value = obj.property[key];
      const nestedKey = `property[${key}]`;
      convertedObj[nestedKey] = value.join(',');
    }
  }

  return { property: convertedObj };
}

export const addEllipsis=(str:string) => {
  if(str){
    if (str.length > 20) {
      return str.slice(0, 20) + "...";
    }
  }
  return str;
}

export const addEllipsisInMiddle = (str:string, maxLength:number)=> {
  if (str.length > maxLength) {
    const ellipsisLength = 3; // Length of the ellipsis ("...")
    const leftPartLength = Math.ceil((maxLength - ellipsisLength) / 2);
    const rightPartLength = Math.floor((maxLength - ellipsisLength) / 2);
    
    const leftPart = str.slice(0, leftPartLength);
    const rightPart = str.slice(str.length - rightPartLength);

    return leftPart + "..." + rightPart;
  }
  return str;
}