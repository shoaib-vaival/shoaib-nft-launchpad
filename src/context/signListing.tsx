import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

interface ListedItemParams {
  seller: string;
  erc721: string;
  tokenId: number;
  price: string;
  endTime: number;
  collaboratorAddress: string[];
  collaboratorAmount: string[];
  collectionId: string;
}

export const signMessage = async (
  params: ListedItemParams,
  provider: any,
  account: any,
  chainId: any
) => {
  //   const { provider, account, chainId } = useWeb3React();

  const signTypedData = async () => {
    if (provider && account) {
      const ethProvider = new ethers.providers.Web3Provider(
        provider?.provider as any
      );
      const signer = ethProvider.getSigner(account);
      console.log(
        "🚀 ~ file: signListing.tsx:30 ~ signTypedData ~ params:",
        params
      );

      const domain = {
        name: "Listing",
        version: "1",
        chainId: chainId,
        verifyingContract: process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS,
      };

      const types = {
        EIP712Domain: [
          { name: "name", type: "string" },
          { name: "version", type: "string" },
          { name: "chainId", type: "uint256" },
          { name: "verifyingContract", type: "address" },
        ],
        ListedItem: [
          { name: "seller", type: "address" },
          { name: "erc721", type: "address" },
          { name: "tokenId", type: "uint256" },
          { name: "price", type: "uint256" },
          { name: "endTime", type: "uint256" },
          { name: "collaboratorAddress", type: "address[]" },
          { name: "collaboratorAmount", type: "uint256[]" },
          { name: "collectionId", type: "string" },
        ],
      };

      const message = {
        seller: params.seller,
        erc721: params.erc721,
        tokenId: params.tokenId,
        price: params.price,
        endTime: params.endTime,
        collaboratorAddress: params.collaboratorAddress,
        collaboratorAmount: params.collaboratorAmount,
        collectionId: params.collectionId,
      };

      const msgParams = { domain, types, primaryType: "ListedItem", message };

      console.log(
        "CLICKED, SENDING PERSONAL SIGN REQ",
        "from",
        account,
        msgParams
      );

      try {
        const result = await signer._signTypedData(
          msgParams.domain,
          msgParams.types,
          msgParams.message
        );
        console.log("SIGN: " + JSON.stringify(result));
      } catch (error) {
        console.error("ERROR", error);
      }
    }
  };

  signTypedData();

  return null; // or your component JSX
};
