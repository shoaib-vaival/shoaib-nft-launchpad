import { useWeb3React } from "@web3-react/core";
import React, { useContext, useState, useEffect } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { collectionContractABI } from "./collectionContractAbi";
import { ethers, Contract } from "ethers";

export const useContract = () => {
  const { provider } = useWeb3React();
  const [contract, setContract] = useState<Contract | null>(null);

  useEffect(() => {
    const setupContract = async () => {
      if (provider) {
        const ethProvider = new ethers.providers.Web3Provider(
          provider?.provider as any
        );
        const contractAddress =
          process.env.NEXT_PUBLIC_COLLECTION_CONTRACT_ADDRESS;
        const contractInstance = new ethers.Contract(
          String(contractAddress),
          collectionContractABI,
          ethProvider.getSigner()
        );
        setContract(contractInstance);
      }
    };
    setupContract();
  }, [provider]);

  return contract;
};
