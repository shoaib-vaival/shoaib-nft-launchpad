import {
  Container,
  Image,
  Text,
  Flex,
  Heading,
  Box,
  VStack,
  IconButton,
  InputGroup,
  Input,
  InputLeftElement,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/table";
import { NextPage } from "next";
import { ReactSelect } from "./../../src/components/common";
import { useInfiniteQuery } from "./../../src/hooks/useInfiniteQuery";
import { QUERY_KEYS } from "./../../src/hooks/queryKeys";
import { ApiUrl } from "./../../src/apis/apiUrl";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "./../../src/components/Loader";
import { currencySymbol } from "../../src/constants";
import { POST } from "../../src/hooks/consts";
import { useMutation } from "../../src/hooks/useMutation";

const CollectionStat: NextPage = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<any>({
    queryKey: [QUERY_KEYS.GET_STATS],
    url: ApiUrl.GET_STATS,
  });
  const { mutate } = useMutation<any>({
    method: POST,
    url: ApiUrl.ADD_TO_WATCHLIST,
    showSuccessToast: true,
    token: true,
  });
  return (
    <>
      <Container maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "8xl" }}>
        <Box pr={{ base: "0", md: "50px" }}>
          <Heading
            as="h1"
            fontSize={{
              base: "26px",
              sm: "36px",
              lg: "42px",
              xl: "56px",
            }}
            mb={{ base: "10px", lg: "24px" }}
          >
            Collection Stats
          </Heading>
        </Box>
        {/* <Flex justifyContent={'end'} alignItems="center"  pt='20px' mb='25px' flexWrap='wrap'>
                        <Box order='1'>
                            <IconButton
                            variant='outline'
                            colorScheme='primary'
                            aria-label='Send email'
                            icon={<i className='icon-funnel'></i>}
                            />
                            </Box>
                            <Box order={{base:'3',sm:'2'}} w={{base:'100%',sm:'auto'}} pl={{ base: '0', sm: '8px'}} pt={{ base: '15px', md: '0', xl: '0' }} >
                            <InputGroup variant='custom' colorScheme='purple'w={{ base: "full", sm: "200px",md:'sm' }} marginBottom={{ base: '3', md: 'initial', xl: 'initial' }} >
                                <Input placeholder='Search...' />
                                <InputLeftElement>
                                <img src='/assets/images/search-icon.svg' />
                                </InputLeftElement>
                            </InputGroup>
                            </Box>
                            <Box width="150px" ml='8px'  order={{base:'2',sm:'3'}}>
                            <ReactSelect options={[{ key: 'Sorty By', value: 'Sort By' }]} isMultiple={false} identifier='filter' getSelectedData={(value: string) => console.log(value)} placeholder="Sort By" />
                            </Box>
                        </Flex> */}
        <Tabs>
          <TabList>
            <Tab>Top</Tab>
            <Tab>Trending</Tab>
            <Tab>Watchlist</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <InfiniteScroll
                dataLength={data ? data.length : 0}
                next={() => fetchNextPage()}
                hasMore={!!hasNextPage}
                loader={
                  <Flex
                    width="100%"
                    height="100%"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Loader />
                  </Flex>
                }
              >
                <TableContainer>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>Collection</Th>
                        <Th>Volume</Th>
                        <Th>%CHANGE</Th>
                        <Th>FLOOR PRICE</Th>
                        <Th>SALES</Th>
                        <Th>%UNIQUE OWNER</Th>
                        <Th>%ITEMS LISTED</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {data &&
                        data?.map((stat: any, index: number) => {
                          return (
                            <Tr key={index}>
                              <Td>
                                <Flex gap="2" alignItems="center" mr="48px">
                                  <Image
                                    src={stat?.logoImageUrl}
                                    boxSize="100px"
                                    objectFit="cover"
                                    border="1px solid white"
                                    borderRadius="16px"
                                    w={{ base: "50px", md: "64px" }}
                                    h={{ base: "50px", md: "64px" }}
                                  />
                                  <VStack spacing="0.5">
                                    <Heading fontSize="18px">
                                      {stat?.name}
                                    </Heading>
                                  </VStack>
                                </Flex>
                              </Td>
                              <Td isNumeric={true}>{`${
                                stat?.volume ?? ""
                              } ${currencySymbol}`}</Td>
                              <Td
                                isNumeric={true}
                                color={
                                  stat?.percentageChange < 0
                                    ? "red"
                                    : stat?.percentageChange > 0
                                    ? "green.500"
                                    : ""
                                }
                              >{`${stat?.percentageChange} %`}</Td>
                              <Td
                                isNumeric={true}
                              >{`${stat?.floorPrice} ${currencySymbol}`}</Td>
                              <Td isNumeric={true}>{stat?.sales}</Td>
                              <Td
                                isNumeric={true}
                              >{`${stat?.uniqueOwners}`}</Td>
                              <Td isNumeric={true}>
                                {`${stat?.itemsListed}`}{" "}
                                <i
                                  className="icon-internet"
                                  onClick={() =>
                                    mutate({
                                      nftId:
                                        "fc217c78-9697-4b06-adfe-e08ffd50212d5",
                                      userId: "1",
                                    })
                                  }
                                ></i>
                              </Td>
                            </Tr>
                          );
                        })}
                    </Tbody>
                  </Table>
                </TableContainer>
              </InfiniteScroll>
            </TabPanel>
            <TabPanel>
              <InfiniteScroll
                dataLength={data ? data.length : 0}
                next={() => fetchNextPage()}
                hasMore={!!hasNextPage}
                loader={
                  <Flex
                    width="100%"
                    height="100%"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Loader />
                  </Flex>
                }
              >
                <TableContainer>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>Collection</Th>
                        <Th>Volume</Th>
                        <Th>%CHANGE</Th>
                        <Th>FLOOR PRICE</Th>
                        <Th>SALES</Th>
                        <Th>%UNIQUE OWNER</Th>
                        <Th>%ITEMS LISTED</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {data &&
                        data?.map((stat: any, index: number) => {
                          return (
                            <Tr key={index}>
                              <Td>
                                <Flex gap="2" alignItems="center" mr="48px">
                                  <Image
                                    src={stat?.logoImageUrl}
                                    boxSize="100px"
                                    objectFit="cover"
                                    border="1px solid white"
                                    borderRadius="16px"
                                    w={{ base: "50px", md: "64px" }}
                                    h={{ base: "50px", md: "64px" }}
                                  />
                                  <VStack spacing="0.5">
                                    <Heading fontSize="18px">
                                      {stat?.name}
                                    </Heading>
                                  </VStack>
                                </Flex>
                              </Td>
                              <Td isNumeric={true}>{`${
                                stat?.volume ?? ""
                              } ${currencySymbol}`}</Td>
                              <Td
                                isNumeric={true}
                                color={
                                  stat?.percentageChange < 0
                                    ? "red"
                                    : stat?.percentageChange > 0
                                    ? "green.500"
                                    : ""
                                }
                              >{`${stat?.percentageChange} %`}</Td>
                              <Td
                                isNumeric={true}
                              >{`${stat?.floorPrice} ${currencySymbol}`}</Td>
                              <Td isNumeric={true}>{stat?.sales}</Td>
                              <Td
                                isNumeric={true}
                              >{`${stat?.uniqueOwners}`}</Td>
                              <Td isNumeric={true}>
                                {`${stat?.itemsListed}`}{" "}
                                <i
                                  className="icon-internet"
                                  onClick={() =>
                                    mutate({
                                      nftId:
                                        "fc217c78-9697-4b06-adfe-e08ffd50212d5",
                                      userId: "1",
                                    })
                                  }
                                ></i>
                              </Td>
                            </Tr>
                          );
                        })}
                    </Tbody>
                  </Table>
                </TableContainer>
              </InfiniteScroll>
            </TabPanel>
            <TabPanel>
              <InfiniteScroll
                dataLength={data ? data.length : 0}
                next={() => fetchNextPage()}
                hasMore={!!hasNextPage}
                loader={
                  <Flex
                    width="100%"
                    height="100%"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Loader />
                  </Flex>
                }
              >
                <TableContainer>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>Collection</Th>
                        <Th>Volume</Th>
                        <Th>%CHANGE</Th>
                        <Th>FLOOR PRICE</Th>
                        <Th>SALES</Th>
                        <Th>%UNIQUE OWNER</Th>
                        <Th>%ITEMS LISTED</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {data &&
                        data?.map((stat: any, index: number) => {
                          return (
                            <Tr key={index}>
                              <Td>
                                <Flex gap="2" alignItems="center" mr="48px">
                                  <Image
                                    src={stat?.logoImageUrl}
                                    boxSize="100px"
                                    objectFit="cover"
                                    border="1px solid white"
                                    borderRadius="16px"
                                    w={{ base: "50px", md: "64px" }}
                                    h={{ base: "50px", md: "64px" }}
                                  />
                                  <VStack spacing="0.5">
                                    <Heading fontSize="18px">
                                      {stat?.name}
                                    </Heading>
                                  </VStack>
                                </Flex>
                              </Td>
                              <Td isNumeric={true}>{`${
                                stat?.volume ?? ""
                              } ${currencySymbol}`}</Td>
                              <Td
                                isNumeric={true}
                                color={
                                  stat?.percentageChange < 0
                                    ? "red"
                                    : stat?.percentageChange > 0
                                    ? "green.500"
                                    : ""
                                }
                              >{`${stat?.percentageChange} %`}</Td>
                              <Td
                                isNumeric={true}
                              >{`${stat?.floorPrice} ${currencySymbol}`}</Td>
                              <Td isNumeric={true}>{stat?.sales}</Td>
                              <Td
                                isNumeric={true}
                              >{`${stat?.uniqueOwners}`}</Td>
                              <Td isNumeric={true}>
                                {`${stat?.itemsListed}`}{" "}
                                <Menu isLazy>
                                  <MenuButton>
                                    <i className="icon-menu"></i>
                                  </MenuButton>
                                  <MenuList>
                                    {/* MenuItems are not rendered unless Menu is open */}
                                    <MenuItem>Remove From Watchlist</MenuItem>
                                  </MenuList>
                                </Menu>
                              </Td>
                            </Tr>
                          );
                        })}
                    </Tbody>
                  </Table>
                </TableContainer>
              </InfiniteScroll>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
};
export default CollectionStat;
