import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Text,
  FormLabel,
  Input,
  Flex,
  Divider,
  Box,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { ApiUrl } from "../../apis/apiUrl";
import { POST } from "../../hooks/consts";
import { useMutation } from "../../hooks/useMutation";
import { signMessage } from "../../context/signListing";
import { erc721Abi } from "../../connectors/erc721Abi";
import { ethers } from "ethers";

const ListNftModal = ({
  isOpen,
  onClose,
  onOpen,
  nftData,
}: {
  isOpen?: any;
  onClose?: any;
  onOpen?: any;
  nftData?: any;
}) => {
  console.log("🚀 ~ file: listNft.tsx:35 ~ nftData:", nftData);
  const { provider, account, chainId } = useWeb3React();
  const [price, setPrice] = useState<string>("");

  const handlePriceChange = (event: any) => {
    setPrice(event.target.value);
  };
  interface CreatorFee {
    walletAddress: string;
    percentage: number;
  }

  interface CollaboratorData {
    collaboratorAddress: string[];
    collaboratorAmount: string[];
  }

  const transformCreatorFeeData = (data: CreatorFee[]): CollaboratorData => {
    const collaboratorAddress: string[] = [];
    const collaboratorAmount: string[] = [];
    if (!data || data.length === 0) {
      return {
        collaboratorAddress,
        collaboratorAmount,
      };
    }
    data.forEach((fee) => {
      collaboratorAddress.push(fee.walletAddress);
      const amount = calculateCollaboratorAmount(fee.percentage);
      collaboratorAmount.push(amount);
    });

    return {
      collaboratorAddress,
      collaboratorAmount,
    };
  }

  const calculateCollaboratorAmount = (percentage: number): string => {
    const totalAmount = "5000000000000000000"; // Total amount to be distributed

    const amount = (percentage / 100) * parseFloat(totalAmount);

    return amount.toString();
  }

  const transformedData: CollaboratorData = transformCreatorFeeData(
    nftData?.collection?.creatorFee
  );
  interface ListedItemParams {
    seller: string | undefined;
    erc721: string;
    tokenId: number;
    price: string;
    endTime: number;
    collaboratorAddress: string[];
    collaboratorAmount: string[];
    collectionId: string;
  }

  const params: ListedItemParams = {
    seller: account,
    erc721: nftData?.minting_contract_address,
    tokenId: nftData?.tokenId,
    price: price,
    endTime: 1687202998,
    collaboratorAddress: transformedData?.collaboratorAddress,
    collaboratorAmount: transformedData?.collaboratorAmount,
    collectionId: nftData?.collectionId,
  };
  const { mutate, isLoading } = useMutation<any>({
    method: POST,
    url: ApiUrl?.LIST_FOR_SALE,
    isFileData: true,
    token: true,
    onSuccess: async (data) => {
      console.log("Listed for sale");
    },
  });
  const approveNFT = async (contractAddress: any) => {
    if (provider) {
      const ethProvider = new ethers.providers.Web3Provider(
        provider?.provider as any
      );
      const contractInstance = new ethers.Contract(
        String(contractAddress),
        erc721Abi,
        ethProvider.getSigner()
      );
      if (contractInstance) {
        try {
          const result = await contractInstance.approveForAll(
            process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS,
            contractAddress
          );
          if (result) {
            const receipt = await ethProvider.waitForTransaction(result.hash);
            console.log(
              "🚀 ~ file: listNft.tsx:140 ~ minting ~ receipt:",
              receipt
            );

            // if (receipt.status == 1) router.push("/profile-created");
          }
          // Handle the returned result here
        } catch (error) {
          console.error(error);
          // Handle errors here
        }
      }
    }
  };

  const handleListing = async () => {
    // approveNFT(nftData?.minting_contract_address);
    const sign = await signMessage(params, provider, account, chainId).catch(
      (err) => {
        console.log(err);
      }
    );
    if (sign) {
      console.log("🚀 ~ file: listNft.tsx:123 ~ handleListing ~ sign:", params);
      mutate({ ...params, signature: sign });
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="708px">
          <ModalHeader>List For Sale</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Text fontSize="20px" fontWeight="700" mb="16px">
                Set Price
              </Text>
              <FormLabel>Price</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Enter price for this item"
                  onChange={handlePriceChange}
                />
                <InputRightAddon fontSize="14px" color="#393F59" bg="#6F6BF34D">
                  MATIC
                </InputRightAddon>
              </InputGroup>
            </FormControl>

            <FormControl mt={4} mb="24px">
              <FormLabel>Set Duration</FormLabel>
              <Input placeholder="Enter price for this item" />
            </FormControl>
            <Divider />
            <Text
              as={"h4"}
              mt="20px"
              fontWeight="700"
              fontSize="24px"
              color="#393F59"
            >
              Summary
            </Text>
            <Text mb="40px">
              Listing is free. Once sold, the following fees will be deducted.
            </Text>
            <Box>
              <Flex mb="24px" justifyContent="space-between">
                <Text color="#393F59">Listing Price</Text>
                <Text color="#393F59" mb="auto">
                  1.00 ETH
                </Text>
              </Flex>
              <Flex mb="24px" justifyContent="space-between">
                <Text color="#393F59">Service Fee</Text>
                <Text color="#393F59" mb="auto">
                  2.5%
                </Text>
              </Flex>
              <Flex justifyContent="space-between" mb="24px">
                <Text color="#393F59">Creator Fee</Text>
                <Text color="#393F59" mb="auto">
                  0%
                </Text>
              </Flex>
              <Divider />
              <Flex justifyContent="space-between" flexWrap="wrap" mt="16px">
                <Text
                  fontWeight="600"
                  fontSize={{ base: "20px", sm: "24px" }}
                  color="#393F59"
                >
                  Total Potential Earnings
                </Text>
                <Text
                  fontWeight="600"
                  fontSize={{ base: "20px", sm: "24px" }}
                  color="#393F59"
                  mb="auto"
                >
                  0.975 ETH
                </Text>
              </Flex>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="primary"
              w="100%"
              onClick={() => {
                handleListing();
              }}
            >
              List For Sale
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ListNftModal;
