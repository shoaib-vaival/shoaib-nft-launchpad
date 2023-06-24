import { ethers } from "ethers";

interface ListedItemParams {
  seller: string;
  erc721: string;
  erc20: string;
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
  const signTypedData = async () => {
    if (provider && account) {
      const ethProvider = new ethers.providers.Web3Provider(provider);
      const signer = ethProvider.getSigner(account);

      const msgParams = JSON.stringify({
        domain: {
          chainId,
          name: "Listing",
          verifyingContract: process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS,
          version: "1",
        },
        message: {
          seller: params.seller,
          erc721: params.erc721,
          erc20: params.erc20,
          tokenId: params.tokenId,
          price: params.price,
          endTime: params.endTime,
          collaboratorAddress: params.collaboratorAddress,
          collaboratorAmount: params.collaboratorAmount,
          collectionId: params.collectionId,
        },
        primaryType: "ListedItem",
        types: {
          EIP712Domain: [
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "chainId", type: "uint256" },
            { name: "verifyingContract", type: "address" },
          ],
          ListedItem: [
            { name: "seller", type: "address" },
            { name: "erc721", type: "address" },
            { name: "erc20", type: "address" },
            { name: "tokenId", type: "uint256" },
            { name: "price", type: "uint256" },
            { name: "endTime", type: "uint256" },
            { name: "collaboratorAddress", type: "address[]" },
            { name: "collaboratorAmount", type: "uint256[]" },
            { name: "collectionId", type: "string" },
          ],
        },
      });

      var paramss = [account, msgParams];

      if (window.ethereum) {
        try {
          const result = await (
            window.ethereum as {
              request: (
                request: { method: string; params?: unknown[] },
                callback?: (result: unknown) => void
              ) => Promise<unknown>;
            }
          ).request({
            method: "eth_signTypedData_v4",
            params: paramss,
          });

          const signature = result as string;
          // Do something with the signature
          console.log("Signature:", signature);
        } catch (err) {
          console.error("Error:", err);
        }
      }
    }
  };

  signTypedData();

  return null; // or your component JSX
};
