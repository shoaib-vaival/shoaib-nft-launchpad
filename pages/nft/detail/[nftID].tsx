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
  Grid,
} from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/stat";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import { ApiUrl } from "../../../src/apis/apiUrl";
import CollectionCard from "../../../src/components/Cards/CollectionCard";
import { SlickSlider } from "../../../src/components/ReactSlick";
import { QUERY_KEYS } from "../../../src/hooks/queryKeys";
import { useQuery } from "../../../src/hooks/useQuery";
import { nftType } from "../../../src/types";
import { signMessage } from "../../../src/context/signListing";
import { useWeb3React } from "@web3-react/core";

const NftDetail = ({ param }: any) => {
  const { provider, account, chainId } = useWeb3React();

  const { data } = useQuery<nftType>({
    queryKey: [QUERY_KEYS.GET_NFT_DETAIL],
    url: ApiUrl.GET_NFT_DETAIL,
    params: { nftId: param?.nftID },
    token: true,
  });

  const { data: moreNftSByCollection } = useQuery<nftType[]>({
    queryKey: [QUERY_KEYS.GET_MORE_NFTS_BY_COLLECTION],
    url: ApiUrl.GET_MORE_NFTS_BY_COLLECTION,
    params: { collectionId: data?.collectionId },
    enabled: data?.collectionId ? true : false,
    token: true,
  });
  //   const params = {
  //     seller: "0xeF07262CcC19E4321166C3df0cCD5999537e9EC5",
  //     erc721: "0xc3088534f73ff8638B5CF974800871DBbc8E8B81",
  //     erc20: "0xc737E568d7EF145C191AF237f3D0796bB8136372",
  //     tokenId: 1,
  //     price: "11000000000000000000",
  //     endTime: 1687202998,
  //     collaboratorAddress: [
  //       "0xB1580D5634e1C7514833974767d17801717ed715",
  //       "0x2b7A551Cb3D70cdD128624E37168b4E6b7C9b09F",
  //     ],
  //     collaboratorAmount: ["1500000000000000000", "3000000000000000000"],
  //     collectionId: "77a2",
  //   };
  //   <Button
  //   onClick={() => {
  //     signMessage(params, provider, account, chainId);
  //   }}
  // >
  //   List for sale
  // </Button>

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
            w={{ base: "100%", lg: "45%" }}
            maxH={{ base: "initial", md: "500px", lg: "650px" }}
            borderRadius="lg"
          >
            <Image
              src={data?.ipfsImageUrl}
              w="100%"
              h="100%"
              objectFit="cover"
              borderRadius="lg"
            />
          </Box>
          <Box w={{ base: "100%", lg: "55%" }}>
            <Box
              paddingBottom={{ base: "20px", sm: "28px" }}
              borderBottom="1px solid"
              borderColor="rgba(53, 53, 53, 0.2)"
            >
              {/* <Flex justifyContent="end">
                <Box>
                  <IconButton
                    color=" #756C99"
                    ml="8px"
                    variant="outline"
                    colorScheme="#6863F3"
                    aria-label="Send"
                    fontSize="20p"
                    icon={<i className="icon-share"></i>}
                  />
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      color="#756C99"
                      ml="8px"
                      variant="outline"
                      colorScheme="#6863F3"
                      aria-label="Send"
                      fontSize="20px"
                      icon={<i className="icon-menu"></i>}
                    >
                      Actions
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Download</MenuItem>
                      <MenuItem>Create a Copy</MenuItem>
                      <MenuItem>Mark as Draft</MenuItem>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              </Flex> */}
              <Text marginTop="-15px" marginBottom="16px" fontSize="16px">
                {data?.collection?.name}
              </Text>
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
                    {data?.tokenStandard}
                  </Text>
                </Flex>
                <Flex justifyContent="space-between" mb="8px">
                  <Text color="#756C99">Chain</Text>
                  <Text color="#6863F3" mb="auto">
                    {data?.chain}
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
                    {data?.creatorEarning}
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
          <Box w={{ base: "100%", lg: "45%" }}>
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
              <Stat>
                <StatLabel>Collected Fees</StatLabel>
                <StatNumber>£0.00</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Collected Fees</StatLabel>
                <StatNumber>£0.00</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Collected Fees</StatLabel>
                <StatNumber>£0.00</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Collected Fees</StatLabel>
                <StatNumber>£0.00</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Collected Fees</StatLabel>
                <StatNumber>£0.00</StatNumber>
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
                <Tr>
                  <Td p={{ base: "12px", md: "17px 25px" }}>
                    <Heading size="sm">Transfer</Heading>
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    --ETH
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    VictoriaL
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    Vincent2020.eth
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    23 secs ago
                  </Td>
                </Tr>
                <Tr>
                  <Td p={{ base: "12px", md: "17px 25px" }}>
                    <Heading size="sm">Transfer</Heading>
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    --ETH
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    VictoriaL
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    Vincent2020.eth
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    23 secs ago
                  </Td>
                </Tr>
                <Tr>
                  <Td p={{ base: "12px", md: "17px 25px" }}>
                    <Heading size="sm">Transfer</Heading>
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    --ETH
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    VictoriaL
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    Vincent2020.eth
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    23 secs ago
                  </Td>
                </Tr>
                <Tr>
                  <Td p={{ base: "12px", md: "17px 25px" }}>
                    <Heading size="sm">Transfer</Heading>
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    --ETH
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    VictoriaL
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    Vincent2020.eth
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    23 secs ago
                  </Td>
                </Tr>
                <Tr>
                  <Td p={{ base: "12px", md: "17px 25px" }}>
                    <Heading size="sm">Transfer</Heading>
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    --ETH
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    VictoriaL
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    Vincent2020.eth
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    23 secs ago
                  </Td>
                </Tr>
                <Tr>
                  <Td p={{ base: "12px", md: "17px 25px" }}>
                    <Heading size="sm">Transfer</Heading>
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    --ETH
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    VictoriaL
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    Vincent2020.eth
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    23 secs ago
                  </Td>
                </Tr>
                <Tr>
                  <Td p={{ base: "12px", md: "17px 25px" }}>
                    <Heading size="sm">Transfer</Heading>
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    --ETH
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    VictoriaL
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    Vincent2020.eth
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    23 secs ago
                  </Td>
                </Tr>
                <Tr>
                  <Td p={{ base: "12px", md: "17px 25px" }}>
                    <Heading size="sm">Transfer</Heading>
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    --ETH
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    VictoriaL
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    Vincent2020.eth
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    23 secs ago
                  </Td>
                </Tr>
                <Tr>
                  <Td p={{ base: "12px", md: "17px 25px" }}>
                    <Heading size="sm">Transfer</Heading>
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    --ETH
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    VictoriaL
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    Vincent2020.eth
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    23 secs ago
                  </Td>
                </Tr>
                <Tr>
                  <Td p={{ base: "12px", md: "17px 25px" }}>
                    <Heading size="sm">Transfer</Heading>
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    --ETH
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    VictoriaL
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    Vincent2020.eth
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    23 secs ago
                  </Td>
                </Tr>
                <Tr>
                  <Td p={{ base: "12px", md: "17px 25px" }}>
                    <Heading size="sm">Transfer</Heading>
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    --ETH
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    VictoriaL
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    Vincent2020.eth
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }} textAlign="right">
                    23 secs ago
                  </Td>
                </Tr>
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
            <Button p={{ base: "5px 20px", md: "20px 32px" }} variant="primary">
              View All
            </Button>
          </Flex>
          <SlickSlider>
            {moreNftSByCollection &&
              moreNftSByCollection?.map((nft: any, index: number) => {
                return (
                  <CollectionCard
                    type="withBody"
                    featureImage={nft?.ipfsImageUrl}
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
