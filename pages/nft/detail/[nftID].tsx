import { Button, IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import {
  Container,
  Flex,
  Box,
  Stack,
  Text,
  Heading,
  VStack,
  HStack,
  Grid,
} from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/stat";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
const abiDecoder = require("abi-decoder");
import { useDisclosure } from "@chakra-ui/react";
import { ApiUrl } from "../../../src/apis/apiUrl";
import CollectionCard from "../../../src/components/Cards/CollectionCard";
import { SlickSlider } from "../../../src/components/ReactSlick";
import { QUERY_KEYS } from "../../../src/hooks/queryKeys";
import { useQuery } from "../../../src/hooks/useQuery";
import { nftType } from "../../../src/types";
import { useWeb3React } from "@web3-react/core";
import ListNftModal from "../../../src/Modals/nftProperties/listNft";
import ReportModal from "../../../src/Modals/nftProperties/reportModal";
import { useEffect, useState } from "react";
import { Loader } from "../../../src/components/Loader";
import { dayJs } from "../../../src/utils";
import { currencySymbol } from "../../../src/constants";
import Link from "next/link";
import { useMutation } from "../../../src/hooks/useMutation";
import { PATCH, POST } from "../../../src/hooks/consts";
import { marketContractAbi } from "../../../src/connectors/marketContractAbi";
import { ethers } from "ethers";
import { useContract } from "../../../src/connectors/marketProvider";
import SocialShare from "../../../src/components/SocialShare";
import { useRouter } from "next/router";

const NftDetail = ({ param }: any) => {
  const { provider, account, chainId } = useWeb3React();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [totalCreatorFee, setTotalCreatorFree] = useState<any>();
  const {
    isOpen: isReportModalOpen,
    onOpen: onReportModalOpen,
    onClose: onReportModalClose,
  } = useDisclosure();
  const [nftData, setNftData] = useState<any>({});
  const router = useRouter();
  const currentUrl = router.asPath;

  const { data } = useQuery<any>({
    queryKey: [QUERY_KEYS.GET_NFT_DETAIL],
    url: ApiUrl.GET_NFT_DETAIL,
    params: { nftId: param?.nftID },
    token: true,
    onSuccess: async (data) => {
      console.log("🚀 ~ file: [nftID].tsx:47 ~ onSuccess: ~ data:", data);
      setNftData(data);
    },
  });
  const totalCreator = () => {
    let totalFee = 0;
    for (let i = 0; i < data?.collection?.creatorFee.length; i++) {
      totalFee = totalFee + data?.collection?.creatorFee[i].percentage;
    }
    setTotalCreatorFree(String(totalFee));
  };

  useEffect(() => {
    totalCreator();
  }, [data]);

  const { data: moreNftSByCollection } = useQuery<nftType[]>({
    queryKey: [QUERY_KEYS.GET_MORE_NFTS_BY_COLLECTION],
    url: ApiUrl.GET_MORE_NFTS_BY_COLLECTION,
    params: { collectionId: data?.collectionId },
    enabled: data?.collectionId ? true : false,
    token: true,
  });

  const { data: activities, isLoading: isLoadingActivities } = useQuery<any>({
    queryKey: [QUERY_KEYS.GET_NFT_ACTIVITIES],
    url: `${ApiUrl.GET_NFT_ACTIVITIES}/${param?.nftID}`,
  });

  const contractInst = useContract();
  interface BuyItemParams {
    seller: string | undefined;
    erc721: string;
    tokenId: number;
    price: string;
    duration: number;
    signature: string;
    collaboratorAddress: string[];
    collaboratorAmount: string[];
    collectionId: string;
  }

  const params: BuyItemParams = {
    seller: data?.owner,
    erc721: data?.minting_contract_address,
    tokenId: data?.tokenId,
    price: data?.listings[0]?.price,
    duration: data?.listings[0]?.duration,
    signature: data?.listings[0]?.signature,
    collaboratorAddress: data?.listings[0]?.collaboratorAddress,
    collaboratorAmount: data?.listings[0]?.collaboratorAmount,
    collectionId: data?.collectionId,
  };

  const convertToWei = (valueInEther: string): string => {
    const valueInBigNumber = ethers.utils.parseEther(valueInEther);
    const valueInWei = ethers.utils.formatUnits(valueInBigNumber, "wei");
    return valueInWei;
  };

  const { mutate: updateNFTSale } = useMutation<any>({
    method: POST,
    url: ApiUrl.UPDATE_NFT_SALE_DATA,
    successMessage: "NFT Bought Successfully",
    showSuccessToast: true,
    token: true,
  });

  const { mutate: cancelList } = useMutation<any>({
    method: PATCH,
    url: `${ApiUrl?.CANCEL_LISTING}/${data?.listings[0]?.id}`,
    successMessage: "Listing Cancelled Successfully",
    showSuccessToast: true,
    token: true,
  });

  const buy = async () => {
    if (contractInst) {
      console.log("🚀 ~ file: [nftID].tsx:122 ~ buy ~ valueInWei:", params);
      const valueInWei = convertToWei(params?.price);

      try {
        const result = await contractInst.buy(
          params?.seller,
          params?.erc721,
          params?.tokenId,
          valueInWei,
          params?.duration,
          params?.signature,
          params?.collaboratorAddress,
          params?.collaboratorAmount,
          params?.collectionId,
          {
            value: valueInWei, // Specify the amount of ETH to send with the transaction
          }
        );
        if (result) {
          const ethProvider = new ethers.providers.Web3Provider(
            provider?.provider as any
          );
          const receipt = await ethProvider.waitForTransaction(result.hash);
          console.log("🚀 ~ file: [nftID].tsx:86 ~ buy ~ receipt:", receipt);
          abiDecoder.addABI(marketContractAbi);
          const decodedLogs = abiDecoder.decodeLogs(receipt.logs);
          console.log(
            "🚀 ~ file: [nftID].tsx:170 ~ buy ~ decodedLogs:",
            decodedLogs
          );

          const data = {
            tokenId: Number(decodedLogs[0]?.events[0]?.value),
            signature: decodedLogs[0]?.events[1]?.value,
            buyerWallet: decodedLogs[0]?.events[2]?.value,
            contractAddress: decodedLogs[0]?.events[4]?.value,
          };
          console.log("🚀 ~ file: create.tsx:98 ~ minting ~ data:", data);
          updateNFTSale(data);

          // if (receipt.status == 1) router.push("/profile-created");
        }
      } catch (error) {
        console.error("Buy Error", error);
        // Handle errors here
      }
    }
  };

  const cancelListing = async () => {
    if (contractInst) {
      console.log("SignHash to Cancel", params.signature);
      try {
        const result = await contractInst.cancelListing(params?.signature);
        if (result) {
          console.log("Cancel Listing Contract Success");
          const ethProvider = new ethers.providers.Web3Provider(
            provider?.provider as any
          );
          const receipt = await ethProvider.waitForTransaction(result.hash);
          if (receipt.status == 1) {
            cancelList("");
          }
          abiDecoder.addABI(marketContractAbi);
          const decodedLogs = abiDecoder.decodeLogs(receipt.logs);
          const dataa = {
            signature: decodedLogs[0]?.events[0]?.value,
          };
          console.log(
            "🚀 ~ file: [nftID].tsx:220 ~ cancelListing ~ data:",
            dataa
          );
        }
      } catch (error) {
        console.error("Buy Error", error);
        // Handle errors here
      }
    }
  };

  return (
    <>
      <Container
        maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "7xl" }}
        pt={{ base: "20px", sm: "40px" }}
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "18px", md: "48px" }}
          px={{ base: "0", sm: "17px" }}
        >
          <Box
            w={{ base: "100%", lg: "50%" }}
            maxH={{ base: "initial", md: "500px", lg: "650px" }}
            borderRadius="lg"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}${data?.ipfsImageUrl}`}
              w="100%"
              h="100%"
              objectFit="cover"
              borderRadius="lg"
            />
          </Box>
          <Box w={{ base: "100%", lg: "50%" }}>
            <Box
              paddingBottom={{ base: "20px", sm: "28px" }}
              borderBottom="1px solid"
              borderColor="rgba(53, 53, 53, 0.2)"
            >
              <Flex
                alignItems="center"
                justifyContent="space-between"
                marginBottom="15px"
              >
                <Box>
                  <Text fontSize="16px">{data?.collection?.name}</Text>
                </Box>
                <Box display="flex" alignItems="center" gap="8px">
                  <Box textAlign="center">
                    <SocialShare
                      title="Check this link"
                      url={`https://ibanera-launchpad.bloxbytes.com${currentUrl}`}
                    />
                  </Box>
                  {account && (
                    <Box textAlign="center">
                      <Menu>
                        <MenuButton
                          as={IconButton}
                          color="#756C99"
                          ml={{ base: "5px", sm: "8px" }}
                          mb={{ base: "8px", sm: "0" }}
                          variant="outline"
                          aria-label="Send"
                          fontSize="20px"
                          border="1px solid #c4c3f9"
                          bg="#fff"
                          icon={<i className="icon-menu"></i>}
                        ></MenuButton>
                        <MenuList w="191px" minW="191px" p="8px">
                          <MenuItem>
                            <Box color="#393F59" onClick={onReportModalOpen}>
                              Report
                            </Box>
                          </MenuItem>
                          <ReportModal
                            isOpen={isReportModalOpen}
                            onClose={onReportModalClose}
                            onOpen={onReportModalOpen}
                            nftId={`${param?.nftID}`}
                          />
                        </MenuList>
                      </Menu>
                    </Box>
                  )}
                </Box>
              </Flex>
              <Heading fontSize="32px" marginBottom="10px">
                {data?.name}
              </Heading>
              <Stack direction="row" alignItems="center" flexWrap="wrap">
                <Flex mr="24px" fontSize="16px">
                  <Text mr="5px">Owned By</Text>
                  <Text>{data?.owner}</Text>
                </Flex>
                <Flex alignItems="center">
                  <Text fontSize="14px" mr="24px">
                    <i className="icon-document-eye"></i> 666 Views
                  </Text>
                  <Text
                    border="1px solid #6f6bf366"
                    p="2px 4px"
                    borderRadius="6px"
                    color="#393F59"
                    bg="#ffffff5e"
                    fontSize="14px"
                  >
                    <i className="icon-hash"></i> 666
                  </Text>
                </Flex>
              </Stack>
            </Box>

            <ListNftModal
              isOpen={isOpen}
              onClose={onClose}
              onOpen={onOpen}
              nftData={nftData}
            />

            {data &&
            data.owner?.toLowerCase() === account?.toLowerCase() &&
            (data?.listings[0]?.listingStatus == "sold" ||
              data?.listings[0]?.listingStatus == "canceled" ||
              data?.listings.length == 0) ? (
              <Button onClick={onOpen} variant="primary" mt="16px">
                List For Sale
              </Button>
            ) : data &&
              data.owner === account?.toLowerCase() &&
              data?.listings[0]?.listingStatus == "listed" ? (
              <Button
                onClick={() => {
                  cancelListing();
                }}
                variant="primary"
                mt="16px"
              >
                Cancel Listing
              </Button>
            ) : (
              <Button
                onClick={() => {
                  buy();
                }}
                variant="primary"
                mt="16px"
              >
                Buy Now
              </Button>
            )}

            <Box paddingTop={{ base: "20px", sm: "32px" }}>
              <Heading fontSize="18px" marginBottom="16px">
                Description
              </Heading>

              <Text>{data?.description}</Text>
              <Button
                marginTop="10px"
                marginBottom="20px"
                bg="transparent"
                paddingLeft="0px"
                _hover={{ bg: "transparent" }}
                fontWeight="600"
                fontSize="14px"
                color="#393F59"
              >
                READ MORE
              </Button>
              <Heading fontSize="24px" marginBottom="16px">
                Details
              </Heading>
              <Box fontSize="16px">
                <Flex justifyContent="space-between" mb="8px">
                  <Text color="#756C99">Contract Address</Text>
                  <Text color="#6863F3" mb="auto">
                    {data?.minting_contract_address}
                  </Text>
                </Flex>
                <Flex justifyContent="space-between" mb="8px">
                  <Text color="#756C99">Token ID</Text>
                  <Text color="#6863F3" mb="auto">
                    {data?.tokenId}
                  </Text>
                </Flex>
                <Flex justifyContent="space-between" mb="8px">
                  <Text color="#756C99">Token Standard</Text>
                  <Text color="#6863F3" mb="auto">
                    ERC 721
                  </Text>
                </Flex>
                <Flex justifyContent="space-between" mb="8px">
                  <Text color="#756C99">Chain</Text>
                  <Text color="#6863F3" mb="auto">
                    {chainId}
                  </Text>
                </Flex>
                <Flex justifyContent="space-between" mb="8px">
                  <Text color="#756C99">Metadata</Text>
                  <Text color="#6863F3" mb="auto">
                    {data?.metadata}
                  </Text>
                </Flex>
                <Flex justifyContent="space-between" mb="8px">
                  <Text color="#756C99">Creator Earnings</Text>
                  <Text color="#6863F3" mb="auto">
                    {totalCreatorFee}
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Stack>
        <Stack
          spacing={{ base: "0px", sm: "48px" }}
          direction="row"
          px={{ base: "0", sm: "17px" }}
        >
          <Box w={{ base: "100%", lg: "55%" }}>
            <Heading fontSize="24px" marginBottom="16px" marginTop="40px">
              Details
            </Heading>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              }}
              gap="3"
            >
              <Stat p="14px">
                <StatLabel>Background</StatLabel>
                <StatNumber fontSize="18px" display="flex" alignItems="center">
                  Dark Orange
                  <Text pl="8px" color="#756C99" fontSize="14px">
                    {" "}
                    10%
                  </Text>
                </StatNumber>
                <StatHelpText>Floor: 0.0289 MATIC</StatHelpText>
              </Stat>
              <Stat p="14px">
                <StatLabel>Body</StatLabel>
                <StatNumber fontSize="18px" display="flex" alignItems="center">
                  Shirt Orange
                  <Text pl="8px" color="#756C99" fontSize="14px">
                    6%
                  </Text>
                </StatNumber>
                <StatHelpText>Floor: 0.0289 MATIC</StatHelpText>
              </Stat>
              <Stat p="14px">
                <StatLabel>Head</StatLabel>
                <StatNumber fontSize="18px" display="flex" alignItems="center">
                  Glasses
                  <Text pl="8px" color="#756C99" fontSize="14px">
                    8%
                  </Text>
                </StatNumber>
                <StatHelpText>Floor: 0.0289 MATIC</StatHelpText>
              </Stat>
              <Stat p="14px">
                <StatLabel>Face</StatLabel>
                <StatNumber fontSize="18px" display="flex" alignItems="center">
                  Brown
                  <Text pl="8px" color="#756C99" fontSize="14px">
                    8%
                  </Text>
                </StatNumber>
                <StatHelpText>Floor: 0.0289 MATIC</StatHelpText>
              </Stat>
              <Stat p="14px">
                <StatLabel>Hair</StatLabel>
                <StatNumber fontSize="18px" display="flex" alignItems="center">
                  Puffballs
                  <Text pl="8px" color="#756C99" fontSize="14px">
                    8%
                  </Text>
                </StatNumber>
                <StatHelpText>Floor: 0.0289 MATIC</StatHelpText>
              </Stat>
            </Grid>
          </Box>
          <Box w={{ base: "0%", lg: "55%" }}></Box>
        </Stack>
        <Flex
          px={{ base: "0", sm: "17px" }}
          justifyContent="space-between"
          alignItems={{ base: "flex-start", sm: "center" }}
          marginBottom="16px"
          marginTop="40px"
          flexWrap="wrap"
          flexDirection={{ base: "column", sm: "row" }}
        >
          <Heading mb={{ base: "20px", sm: "0" }} fontSize="24px">
            Item Activity
          </Heading>
          <InputGroup variant="custom" w="286px">
            <InputLeftElement pointerEvents="none">
              <i className="icon-funnel"></i>
            </InputLeftElement>
            <Input type="tel" placeholder="Filter" />
          </InputGroup>
        </Flex>
        <Box px={{ base: "0", sm: "17px" }}>
          <TableContainer
            border="1px solid"
            borderColor="rgba(111, 107, 243, 0.4)"
            boxShadow="2px 2px 8px rgba(13, 13, 13, 0.1)"
            backdropFilter="blur(30px)"
            borderRadius="16px"
          >
            <Table variant="bordered">
              <Thead>
                <Tr>
                  <Th>Event</Th>
                  <Th textAlign="right">Price</Th>
                  <Th textAlign="right">From</Th>
                  <Th textAlign="right">To</Th>
                  <Th textAlign="right">Time</Th>
                </Tr>
              </Thead>
              <Tbody>
                {isLoadingActivities && (
                  <Tr>
                    <Td colSpan={5}>
                      <Flex
                        width="100%"
                        height="100%"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Loader />
                      </Flex>
                    </Td>
                  </Tr>
                )}
                {activities && activities?.length <= 0 && (
                  <Tr>
                    <Td colSpan={5}>
                      <Flex
                        width="100%"
                        height="100%"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Heading>Record Not Found</Heading>
                      </Flex>
                    </Td>
                  </Tr>
                )}
                {activities &&
                  activities?.map((activity: any, index: number) => {
                    return (
                      <Tr key={index}>
                        <Td p={{ base: "12px", md: "17px 25px" }}>
                          <Box color="#6863F3">
                            {activity?.activityType === "Transfer" && (
                              <i className="icon-transfer"></i>
                            )}
                            {activity?.activityType === "List" && (
                              <i className="icon-list"></i>
                            )}
                          </Box>
                          {activity?.activityType === "List" && (
                            <Text fontWeight="700" flex="15%">
                              List
                            </Text>
                          )}
                          {activity?.activityType === "Transfer" && (
                            <Text fontWeight="700" flex="15%">
                              Transfer
                            </Text>
                          )}
                        </Td>
                        <Td
                          p={{ base: "12px", md: "17px 25px" }}
                          textAlign="right"
                        >
                          {`${activity?.fromAddress} ${currencySymbol}`}
                        </Td>
                        <Td
                          p={{ base: "12px", md: "17px 25px" }}
                          textAlign="right"
                        >
                          {activity?.fromAddress}
                        </Td>
                        <Td
                          p={{ base: "12px", md: "17px 25px" }}
                          textAlign="right"
                        >
                          {activity?.fromAddress}
                        </Td>
                        <Td
                          p={{ base: "12px", md: "17px 25px" }}
                          textAlign="right"
                        >
                          {dayJs(activity?.insertedDate).fromNow()}
                        </Td>
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
          </TableContainer>

          <Flex
            px={{ base: "0", sm: "17px" }}
            justifyContent="space-between"
            alignItems="center"
            mb={{ base: "20px", lg: "40px" }}
            mt={{ base: "40px", lg: "80px" }}
          >
            <Heading fontSize={{ base: "24px", md: "36px", xl: "48px" }}>
              More from this Collections
            </Heading>
            <Button
              p={{ base: "5px 20px", md: "20px 32px" }}
              as={Link}
              href="/categories"
              variant="primary"
            >
              View All
            </Button>
          </Flex>
          <SlickSlider>
            {moreNftSByCollection &&
              moreNftSByCollection?.map((nft: any, index: number) => {
                return (
                  <CollectionCard
                    type="withBody"
                    featureImage={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}${nft?.ipfsImageUrl}`}
                    isShowFeatureImage={true}
                    isShowLogoImage={false}
                    name={nft?.name}
                    key={index}
                  />
                );
              })}
          </SlickSlider>
        </Box>
      </Container>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  // Fetch blog post data using the slug
  const param = context.params;
  return {
    props: {
      param: param,
    },
  };
};
export default NftDetail;
