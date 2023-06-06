import type { AddEthereumChainParameter } from "@web3-react/types";
import Web3 from "web3";
import { chainUrls } from "./consts";

const MATIC: AddEthereumChainParameter["nativeCurrency"] = {
  name: "Matic",
  symbol: "MATIC",
  decimals: 18,
};

interface BasicChainInformation {
  urls: string[];
  name: string;
}

interface ExtendedChainInformation extends BasicChainInformation {
  nativeCurrency: AddEthereumChainParameter["nativeCurrency"];
  blockExplorerUrls: AddEthereumChainParameter["blockExplorerUrls"];
}

const isExtendedChainInformation = (
  chainInformation: BasicChainInformation | ExtendedChainInformation
): chainInformation is ExtendedChainInformation => {
  return !!(chainInformation as ExtendedChainInformation).nativeCurrency;
};

// export const getAddChainParameters = (
//   chainId: number
// ): AddEthereumChainParameter | number | undefined => {
//   const chainInformation = CHAINS[chainId];

//   if (isExtendedChainInformation(chainInformation)) {
//     const addChainParameters: AddEthereumChainParameter = {
//       chainId: Web3.utils.toHex(chainId),
//       chainName: chainInformation.name,
//       nativeCurrency: chainInformation.nativeCurrency,
//       rpcUrls: chainInformation.urls,
//       blockExplorerUrls: chainInformation.blockExplorerUrls,
//     };

//     if (window.ethereum && window.ethereum.isMetaMask) {
//       try {
//         window.ethereum.request(
//           {
//             method: "wallet_switchEthereumChain",
//             params: [
//               {
//                 chainId: addChainParameters.chainId,
//               },
//             ],
//           },
//           (switchError: any) => {
//             if (switchError && switchError.code === 4902) {
//               try {
//                 typeof window !== "undefined" &&
//                   window.ethereum &&
//                   window.ethereum.request(
//                     {
//                       method: "wallet_addEthereumChain",
//                       params: [addChainParameters],
//                     },
//                     (addError: any, _response: any) => {
//                       if (addError) {
//                         console.error(
//                           "Error adding chain to MetaMask:",
//                           addError
//                         );
//                       }
//                     }
//                   );
//               } catch (addError) {
//                 console.error("Error adding chain to MetaMask:", addError);
//               }
//             } else if (switchError) {
//               console.error("Error switching chain in MetaMask:", switchError);
//             }
//           }
//         );
//       } catch (switchError) {
//         console.error("Error switching chain in MetaMask:", switchError);
//       }
//     }
//     return addChainParameters;
//   } else {
//     return chainId;
//   }
// };

export const IsMetaMaskInstalled = () => {
  if (typeof window.ethereum === "undefined") {
    alert("MetaMask Not Installed");
    window.open("https://metamask.io/download.html", "_blank");
    return false;
  } else if (!window.ethereum.isMetaMask) {
    alert("MetaMask Not Installed");
    window.open("https://metamask.io/download.html", "_blank");
    return false;
  } else {
    return true;
  }
};

export const addChain = (
  chainId: number
): AddEthereumChainParameter | number => {
  const chainInformation = CHAINS[chainId];

  if (isExtendedChainInformation(chainInformation)) {
    const addChainParameters: AddEthereumChainParameter = {
      chainId: Number(Web3.utils.toHex(chainId)),
      chainName: chainInformation.name,
      nativeCurrency: chainInformation.nativeCurrency,
      rpcUrls: chainInformation.urls,
      blockExplorerUrls: chainInformation.blockExplorerUrls,
    };

    if (window.ethereum && window.ethereum.isMetaMask) {
      try {
        typeof window !== "undefined" &&
          window.ethereum &&
          (
            window.ethereum as {
              request: (
                request: { method: string; params?: unknown[] },
                callback?: (result: unknown, error?: any) => void
              ) => Promise<unknown>;
            }
          ).request(
            {
              method: "wallet_addEthereumChain",
              params: [addChainParameters],
            },
            (addError: any, _response: any) => {
              if (addError) {
                console.error("Error adding chain to MetaMask:", addError);
              }
            }
          );
      } catch (addError) {
        console.error("Error adding chain to MetaMask:", addError);
      }
    }
    return addChainParameters;
  } else {
    return chainId;
  }
};

export const switchChain = (chainId: number): void => {
  const switchChainParameters = {
    chainId: Web3.utils.toHex(chainId),
  };

  if (window.ethereum && window.ethereum.isMetaMask) {
    try {
      (
        window.ethereum as {
          request: (
            request: { method: string; params?: unknown[] },
            callback?: (result: unknown) => void
          ) => Promise<unknown>;
        }
      ).request(
        {
          method: "wallet_switchEthereumChain",
          params: [switchChainParameters],
        },
        (switchError: any) => {
          if (switchError && switchError.code === 4902) {
            console.error("Error switching chain in MetaMask:", switchError);
          } else if (switchError) {
            console.error("Error switching chain in MetaMask:", switchError);
          }
        }
      );
    } catch (switchError) {
      console.error("Error switching chain in MetaMask:", switchError);
    }
  }
};

// const getInfuraUrlFor = (network: string) =>
//   process.env.infuraKey
//     ? `https://${network}.infura.io/v3/${d12c8f7dd08e4772adc7e4b605ba6a77}`
//     : undefined;

type ChainConfig = {
  [chainId: number]: BasicChainInformation | ExtendedChainInformation;
};

export const MAINNET_CHAINS: ChainConfig = {
  137: {
    urls: [chainUrls?.POLYGON_MAINNET_INFURA, chainUrls?.POLYGON].filter(
      Boolean
    ),
    name: "Polygon Mainnet",
    nativeCurrency: MATIC,
    blockExplorerUrls: [chainUrls?.BLOCK_EXPLORER],
  },
};

export const TESTNET_CHAINS: ChainConfig = {
  80001: {
    urls: [chainUrls?.POLYGON_MUMBAI_INFURA].filter(Boolean),
    name: "Polygon Mumbai",
    nativeCurrency: MATIC,
    blockExplorerUrls: [chainUrls?.POLYGON_MUMBAI],
  },
};

export const CHAINS: ChainConfig = {
  ...MAINNET_CHAINS,
  ...TESTNET_CHAINS,
};

export const URLS: { [chainId: number]: string[] } = Object.keys(
  CHAINS
).reduce<{ [chainId: number]: string[] }>((accumulator, chainId) => {
  const validURLs: string[] = CHAINS[Number(chainId)].urls;

  if (validURLs.length) {
    accumulator[Number(chainId)] = validURLs;
  }

  return accumulator;
}, {});
