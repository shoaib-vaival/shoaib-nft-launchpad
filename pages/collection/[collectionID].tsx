import { ButtonGroup, IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Container, Flex, Box, VStack, Heading, Text } from "@chakra-ui/layout";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/table";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import CollectionCard from "../../src/components/Cards/CollectionCard";
import { ReactSelect } from "../../src/components/common";
import ProfileDetail from "../../src/components/Profile/ProfileDetail";
import ProfileHeader from "../../src/components/Profile/ProfileHeader";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "../../src/hooks/useQuery";
import { QUERY_KEYS } from "../../src/hooks/queryKeys";
import { ApiUrl } from "../../src/apis/apiUrl";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "../../src/components/Loader";
import { useInfiniteQuery } from "../../src/hooks/useInfiniteQuery";
import ListView from "../../src/views/ListView";
import { GridView } from "../../src/views/GridView";
import { collectionType, filters, nftType } from "../../src/types";
import { useDebounce } from "./../../src/hooks/useDebounce";
import { SidebarFilter } from "../../src/components/SidebarFilter";
import { convertToQueryParam, dayJs } from "../../src/utils";
import { ActivitySideFilter } from "../../src/components/SidebarFilter/ActivitySideFilter";
import { CollectionSideFilter } from "../../src/components/SidebarFilter/CollectionSideFilter";
import { ActivityTable } from "../../src/components/Table/ActivityTable";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Progress } from "@chakra-ui/progress";
import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/stat";
import BarChart from "../../src/components/charts/BarChart";
import CustomLineChart from "../../src/components/charts/LineChart";
import DotChart from "../../src/components/charts/DotChart";

const Collection: NextPage = () => {
  const router = useRouter();
  const [collectionID, setCollectionID] = useState<string | undefined>("");
  const [filters, setFilters] = useState<filters>({ sort: "ASC", search: "" });
  const [search, setSearch] = useState<string>();
  const [view, setView] = useState<string>("grid");
  const debounceValue = useDebounce(search, 1000);
  const changeViewMode = (viewMode: string) => {
    setView(viewMode);
  };
  const { data: collectionDetail } = useQuery<collectionType>({
    queryKey: [QUERY_KEYS.GET_COLLECTION_DETAIL],
    url: `${ApiUrl.GET_COLLECTION_DETAIL}/${router.query.collectionID}`,
    enabled: router.query.collectionID ? true : false,
  });
  const {
    data: collectionNfts,
    error,
    fetchNextPage,
    status,
    hasNextPage,
    isLoading: isLoadingCollectionNfts,
  } = useInfiniteQuery<nftType[]>({
    queryKey: [QUERY_KEYS.GET_COLLECTION_NFTS_BY_ID, filters || debounceValue],
    url: `${ApiUrl.GET_COLLECTION_NFTS_BY_ID}`,
    params: {
      collectionId: `${
        typeof Window !== "undefined" &&
        window.location?.pathname?.split("/")[2]
      }`,
      ...filters,
    },
    token: true,
  });

  const {
    data: activities,
    fetchNextPage: fetchNextPageActivities,
    hasNextPage: hasNextPageActivities,
    isLoading: isLoadingActivities,
  } = useInfiniteQuery<any>({
    queryKey: [QUERY_KEYS.GET_COLLECTION_ACTIVITIES, filters],
    url: ApiUrl.GET_COLLECTION_ACTIVITIES,
    params: {
      ...filters,
    },
  });

  const searchHandler = (e: any) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    setFilters({ ...filters, search: debounceValue });
  }, [debounceValue]);
  const socialIcons = [
    { icon: "icon-internet", url: collectionDetail?.website_url },
    { icon: "icon-telegram", url: collectionDetail?.telegram },
    { icon: "icon-froggy", url: collectionDetail?.website_url },
    { icon: "icon-instagram", url: collectionDetail?.instagram },
    { icon: "icon-twitter", url: collectionDetail?.twitter },
    { icon: "icon-groupbar", url: collectionDetail?.email },
  ];
  return (
    <>
      <Container maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "8xl" }}>
        <Box px="0">
          <ProfileHeader
            socialIcons={socialIcons}
            showSocialIcons={true}
            coverPhoto={collectionDetail?.bannerImageUrl}
            profilePhoto={collectionDetail?.logoImageUrl}
          />
        </Box>
        <ProfileDetail
          showStats={true}
          data={collectionDetail}
          isCollection={true}
          description={collectionDetail?.description}
        />
      </Container>
      <Container maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "8xl" }}>
        <Box>
          <Tabs>
            <TabList pl="0">
              <Tab>Items</Tab>
              <Tab>Activity</Tab>
              <Tab>Analytics</Tab>
            </TabList>

            <TabPanels>
              <TabPanel p={0}>
                <Flex pt="20px" gap='24px'>
                  <CollectionSideFilter
                    onChange={(filter: any) => {
                      setFilters({
                        ...filters,
                        ...convertToQueryParam(filter),
                      });
                    }}
                    collectionId={router?.query?.collectionID}
                  />
                  <Box w="100%">
                    <Flex
                      justifyContent={"end"}
                      alignItems="center"
                      flexWrap="wrap"
                    >
                      <Box order="1">
                        <IconButton
                          variant="outline"
                          colorScheme="primary"
                          aria-label="Send email"
                          icon={<i className="icon-funnel"></i>}
                        />
                      </Box>

                      <Box
                        order={{ base: "3", sm: "2" }}
                        w={{ base: "100%", sm: "auto" }}
                        pl={{ base: "0", sm: "8px" }}
                        pt={{ base: "15px", md: "0", xl: "0" }}
                      >
                        <InputGroup
                          variant="custom"
                          colorScheme="purple"
                          w={{ base: "full", sm: "300px", md: "sm" }}
                          marginBottom={{
                            base: "3",
                            md: "initial",
                            xl: "initial",
                          }}
                        >
                          <Input
                            placeholder="Search by Collections…"
                            onChange={(e) => searchHandler(e)}
                            value={search}
                          />
                          <InputLeftElement>
                            <img src="/assets/images/search.svg" />
                          </InputLeftElement>
                        </InputGroup>
                      </Box>
                      <Box
                        width="150px"
                        ml="8px"
                        order={{ base: "2", sm: "3" }}
                      >
                        <ReactSelect
                          options={[
                            { label: "Ascending ", value: "ASC" },
                            { label: "Descending ", value: "DESC" },
                          ]}
                          isMultiple={false}
                          identifier="filter"
                          getSelectedData={(selectedOption: any) =>
                            setFilters({
                              ...filters,
                              sort: selectedOption?.value,
                            })
                          }
                          placeholder="Sort By"
                        />
                      </Box>
                      <ButtonGroup
                        order={{ base: "2", sm: "3" }}
                        size="md"
                        isAttached
                        variant="outline"
                        ml="8px"
                      >
                        <IconButton
                          variant="outline"
                          colorScheme="primary"
                          aria-label="Send email"
                          icon={<i className="icon-list"></i>}
                          onClick={() => changeViewMode("list")}
                          bg={view === "list" ? "rgba(111, 107, 243, 0.3)" : ""}
                          color={
                            view === "list"
                              ? "rgba(111, 107, 243, 0.3)"
                              : "#756C99"
                          }
                        />
                        <IconButton
                          variant="outline"
                          colorScheme="primary"
                          aria-label="Send email"
                          icon={<i className="icon-grid"></i>}
                          onClick={() => changeViewMode("grid")}
                          bg={view === "grid" ? "rgba(111, 107, 243, 0.3)" : ""}
                          color={
                            view === "grid"
                              ? "rgba(111, 107, 243, 0.3)"
                              : "#756C99"
                          }
                        />
                      </ButtonGroup>
                      <Box></Box>
                      <Box></Box>
                    </Flex>
                    {view === "grid" ? (
                      <GridView
                        type="nft"
                        data={collectionNfts}
                        fetchNextPage={fetchNextPage}
                        hasNextPage={hasNextPage}
                        isLoading={isLoadingCollectionNfts}
                      />
                    ) : (
                      collectionNfts !== undefined && (
                        <ListView
                          data={collectionNfts}
                          fetchNextPage={fetchNextPage}
                          hasNextPage={hasNextPage}
                        />
                      )
                    )}
                  </Box>
                </Flex>
              </TabPanel>
              <TabPanel pt="0">
                <Flex pt="20px" gap="24px">
                  <ActivitySideFilter
                    onChange={(filter: any) => {
                      setFilters({
                        ...filters,
                        ...convertToQueryParam(filter),
                      });
                    }}
                  />
                  <Box w="100%">
                    <Flex
                      justifyContent={"end"}
                      alignItems="center"
                      flexWrap="wrap"
                    >
                      <Box order="1">
                        <IconButton
                          variant="outline"
                          colorScheme="primary"
                          aria-label="Send email"
                          icon={<i className="icon-funnel"></i>}
                        />
                      </Box>
                      <Box
                        order={{ base: "3", sm: "2" }}
                        w={{ base: "100%", sm: "auto" }}
                        pl={{ base: "0", sm: "8px" }}
                        pt={{ base: "15px", md: "0", xl: "0" }}
                      >
                        <InputGroup
                          variant="custom"
                          colorScheme="purple"
                          w={{ base: "full", sm: "200px", md: "sm" }}
                          marginBottom={{
                            base: "3",
                            md: "initial",
                            xl: "initial",
                          }}
                        >
                          <Input placeholder="Search..." />
                          <InputLeftElement>
                            <img src="/assets/images/search.svg" />
                          </InputLeftElement>
                        </InputGroup>
                      </Box>
                      <Box
                        width="150px"
                        ml="8px"
                        order={{ base: "2", sm: "3" }}
                      >
                        <ReactSelect
                          options={[{ key: "Sorty By", value: "Sort By" }]}
                          isMultiple={false}
                          identifier="filter"
                          getSelectedData={(value: string) =>
                            console.log(value)
                          }
                          placeholder="Sort By"
                        />
                      </Box>
                    </Flex>
                    <ActivityTable
                      data={activities}
                      hasNextPage={hasNextPageActivities}
                      fetchNextPage={fetchNextPageActivities}
                      isLoading={isLoadingActivities}
                    />
                  </Box>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Box>
                  <Flex>
                    <Stat
                      flexBasis={"33%"}
                      flex={"0% 1 0%)"}
                      margin={"12px 12px 12px 0"}
                    >
                      <Flex justifyContent="space-between" alignItems='center'>
                        <StatLabel mb="12px">Volume</StatLabel>
                        <StatHelpText color="#F00" display='flex'>
                          <i className="icon-down"></i><Text ml='8px'>-45%</Text>
                        </StatHelpText>
                      </Flex>
                      <StatNumber>0 MATIC</StatNumber>
                    </Stat>
                    <Stat
                      flexBasis={"33%"}
                      flex={"0% 1 0%)"}
                      margin={"12px 12px 12px 0"}
                    >
                      <Flex justifyContent="space-between" alignItems='center'>
                        <StatLabel mb="8px">Sales</StatLabel>
                        <StatHelpText color="#F00" display='flex'>
                          <i className="icon-down"></i><Text ml='8px'>-42%</Text>
                        </StatHelpText>
                      </Flex>
                      <StatNumber>1,679</StatNumber>
                    </Stat>
                    <Stat
                      flexBasis={"33%"}
                      flex={"0% 1 0%)"}
                      margin={"12px 12px 12px 0"}>
                      <Flex justifyContent="space-between" alignItems='center'>
                        <StatLabel mb="8px">Floor Price</StatLabel>
                        <StatHelpText color="#00F59B" display='flex'>
                          <i className="icon-up"></i><Text ml='8px'>+8%</Text>
                        </StatHelpText>
                      </Flex>

                      <StatNumber>5.55</StatNumber>
                    </Stat>
                  </Flex>
                  <Flex gap="24px">
                    <Box
                      p="24px"
                      borderRadius="16px"
                      w={{ base: "100%", lg: "50%" }}
                      border="1px solid rgba(111, 107, 243, 0.40)"
                      bg="rgba(255, 255, 255, 0.40)"
                      boxShadow="2px 2px 8px 0px rgba(13, 13, 13, 0.10)"
                      backdropFilter="blur(30px)"
                    >
                      <Text fontSize="24px" fontWeight="700">
                        Volume and Price
                      </Text>
                      <Box>
                        <BarChart
                          collectionId={`${router?.query?.collectionID}`}
                        />
                      </Box>
                      <Text
                        position="absolute"
                        top="50%"
                        left="0"
                        fontSize="10px"
                        transform="rotate(-90deg)"
                      >
                        Volume (MATIC)
                      </Text>
                      <Text
                        position="absolute"
                        top="50%"
                        right="-18px"
                        fontSize="10px"
                        transform="rotate(90deg)"
                      >
                        Average Price (MATIC)
                      </Text>
                    </Box>
                    <Box
                      p="24px"
                      borderRadius="16px"
                      w={{ base: "100%", lg: "50%" }}
                      border="1px solid rgba(111, 107, 243, 0.40)"
                      bg="rgba(255, 255, 255, 0.40)"
                      boxShadow="2px 2px 8px 0px rgba(13, 13, 13, 0.10)"
                      backdropFilter="blur(30px)"
                    >
                      <Text fontSize="24px" fontWeight="700">
                        Floor Price
                      </Text>
                      <Box>
                        {" "}
                        <CustomLineChart
                          collectionId={`${router?.query?.collectionID}`}
                        />{" "}
                      </Box>
                      <Text
                        position="absolute"
                        top="50%"
                        left="0"
                        fontSize="10px"
                        transform="rotate(-90deg)"
                      >
                        Floor (MATIC)
                      </Text>
                    </Box>
                  </Flex>
                  <Flex gap="24px" pt="24px">
                    <Box
                      p="24px"
                      borderRadius="16px"
                      w={{ base: "100%", lg: "50%" }}
                      border="1px solid rgba(111, 107, 243, 0.40)"
                      bg="rgba(255, 255, 255, 0.40)"
                      boxShadow="2px 2px 8px 0px rgba(13, 13, 13, 0.10)"
                      backdropFilter="blur(30px)"
                    >
                      <Box>
                        <TableContainer>
                          <Flex
                            justifyContent={"space-between"}
                            w="100%"
                            alignItems="center"
                            flexWrap="wrap"
                          >
                            <Text fontSize="20px" fontWeight="700">
                              Listings
                            </Text>
                            <Box width="98px" order={{ base: "2", sm: "3" }}>
                              <ReactSelect
                                options={[
                                  { key: "Sorty By", value: "Sort By" },
                                ]}
                                isMultiple={false}
                                identifier="filter"
                                getSelectedData={(value: string) =>
                                  console.log(value)
                                }
                                placeholder="Price"
                              />
                            </Box>
                          </Flex>
                          <Table variant="simple">
                            <Tbody>
                              <Tr>
                                <Td px={0}>
                                  <Flex gap="2" alignItems="center" mr="48px">
                                    <Image
                                      src="/assets/images/cover-image1.png"
                                      boxSize="100px"
                                      objectFit="cover"
                                      border="1px solid white"
                                      borderRadius="16px"
                                      w={{ base: "50px" }}
                                      h={{ base: "50px" }}
                                    />
                                    <VStack
                                      spacing="0.5"
                                      alignItems="flex-start"
                                    >
                                      <Heading fontSize="18px">
                                        Panthera Leo
                                      </Heading>
                                      <Text
                                        color="rgba(57, 63, 89, 1)"
                                        fontSize="14px"
                                      >
                                        Angeli Sunstorm
                                      </Text>
                                    </VStack>
                                  </Flex>
                                </Td>
                                <Td px={0}>
                                  <VStack spacing="0.5" alignItems="flex-end">
                                    <Text color="#393F59" fontSize="16px">
                                      5.29 MATIC
                                    </Text>
                                    <Text color="#393F59" fontSize="14px">
                                      +0.6 Floor
                                    </Text>
                                  </VStack>
                                </Td>
                              </Tr>
                              <Tr>
                                <Td px={0}>
                                  <Flex gap="2" alignItems="center" mr="48px">
                                    <Image
                                      src="/assets/images/cover-image1.png"
                                      boxSize="100px"
                                      objectFit="cover"
                                      border="1px solid white"
                                      borderRadius="16px"
                                      w={{ base: "50px" }}
                                      h={{ base: "50px" }}
                                    />
                                    <VStack
                                      spacing="0.5"
                                      alignItems="flex-start"
                                    >
                                      <Heading fontSize="18px">
                                        Panthera Leo
                                      </Heading>
                                      <Text
                                        color="rgba(57, 63, 89, 1)"
                                        fontSize="14px"
                                      >
                                        Angeli Sunstorm
                                      </Text>
                                    </VStack>
                                  </Flex>
                                </Td>
                                <Td px={0}>
                                  <VStack spacing="0.5" alignItems="flex-end">
                                    <Text color="#393F59" fontSize="16px">
                                      5.29 MATIC
                                    </Text>
                                    <Text color="#393F59" fontSize="14px">
                                      +0.6 Floor
                                    </Text>
                                  </VStack>
                                </Td>
                              </Tr>
                              <Tr>
                                <Td px={0}>
                                  <Flex gap="2" alignItems="center" mr="48px">
                                    <Image
                                      src="/assets/images/cover-image1.png"
                                      boxSize="100px"
                                      objectFit="cover"
                                      border="1px solid white"
                                      borderRadius="16px"
                                      w={{ base: "50px" }}
                                      h={{ base: "50px" }}
                                    />
                                    <VStack
                                      spacing="0.5"
                                      alignItems="flex-start"
                                    >
                                      <Heading fontSize="18px">
                                        Panthera Leo
                                      </Heading>
                                      <Text
                                        color="rgba(57, 63, 89, 1)"
                                        fontSize="14px"
                                      >
                                        Angeli Sunstorm
                                      </Text>
                                    </VStack>
                                  </Flex>
                                </Td>
                                <Td px={0}>
                                  <VStack spacing="0.5" alignItems="flex-end">
                                    <Text color="#393F59" fontSize="16px">
                                      5.29 MATIC
                                    </Text>
                                    <Text color="#393F59" fontSize="14px">
                                      +0.6 Floor
                                    </Text>
                                  </VStack>
                                </Td>
                              </Tr>
                              <Tr>
                                <Td px={0}>
                                  <Flex gap="2" alignItems="center" mr="48px">
                                    <Image
                                      src="/assets/images/cover-image1.png"
                                      boxSize="100px"
                                      objectFit="cover"
                                      border="1px solid white"
                                      borderRadius="16px"
                                      w={{ base: "50px" }}
                                      h={{ base: "50px" }}
                                    />
                                    <VStack
                                      spacing="0.5"
                                      alignItems="flex-start"
                                    >
                                      <Heading fontSize="18px">
                                        Panthera Leo
                                      </Heading>
                                      <Text
                                        color="rgba(57, 63, 89, 1)"
                                        fontSize="14px"
                                      >
                                        Angeli Sunstorm
                                      </Text>
                                    </VStack>
                                  </Flex>
                                </Td>
                                <Td px={0}>
                                  <VStack spacing="0.5" alignItems="flex-end">
                                    <Text color="#393F59" fontSize="16px">
                                      5.29 MATIC
                                    </Text>
                                    <Text color="#393F59" fontSize="14px">
                                      +0.6 Floor
                                    </Text>
                                  </VStack>
                                </Td>
                              </Tr>
                              <Tr>
                                <Td px={0}>
                                  <Flex gap="2" alignItems="center" mr="48px">
                                    <Image
                                      src="/assets/images/cover-image1.png"
                                      boxSize="100px"
                                      objectFit="cover"
                                      border="1px solid white"
                                      borderRadius="16px"
                                      w={{ base: "50px" }}
                                      h={{ base: "50px" }}
                                    />
                                    <VStack
                                      spacing="0.5"
                                      alignItems="flex-start"
                                    >
                                      <Heading fontSize="18px">
                                        Panthera Leo
                                      </Heading>
                                      <Text
                                        color="rgba(57, 63, 89, 1)"
                                        fontSize="14px"
                                      >
                                        Angeli Sunstorm
                                      </Text>
                                    </VStack>
                                  </Flex>
                                </Td>
                                <Td px={0}>
                                  <VStack spacing="0.5" alignItems="flex-end">
                                    <Text color="#393F59" fontSize="16px">
                                      5.29 MATIC
                                    </Text>
                                    <Text color="#393F59" fontSize="14px">
                                      +0.6 Floor
                                    </Text>
                                  </VStack>
                                </Td>
                              </Tr>
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </Box>
                    </Box>
                    <Box
                      p="24px"
                      borderRadius="16px"
                      w={{ base: "100%", lg: "50%" }}
                      border="1px solid rgba(111, 107, 243, 0.40)"
                      bg="rgba(255, 255, 255, 0.40)"
                      boxShadow="2px 2px 8px 0px rgba(13, 13, 13, 0.10)"
                      backdropFilter="blur(30px)"
                    >
                      <Text fontSize="24px" fontWeight="700">
                        Sale
                      </Text>
                      <Box>
                        {" "}
                        <DotChart
                          collectionId={`${router?.query?.collectionID}`}
                        />{" "}
                      </Box>
                      <Text
                        position="absolute"
                        top="50%"
                        left="0"
                        fontSize="10px"
                        transform="rotate(-90deg)"
                      >
                        Floor (MATIC)
                      </Text>
                    </Box>
                  </Flex>
                  <Flex gap="24px" pt="24px">
                    <Box
                      p="24px"
                      borderRadius="16px"
                      w={{ base: "100%", lg: "50%" }}
                      border="1px solid rgba(111, 107, 243, 0.40)"
                      bg="rgba(255, 255, 255, 0.40)"
                      boxShadow="2px 2px 8px 0px rgba(13, 13, 13, 0.10)"
                      backdropFilter="blur(30px)"
                    >
                      <Flex alignItems="center" mb="30px">
                        <Text fontSize="24px" fontWeight="700">
                          Owner Distribution
                        </Text>
                        <Text fontSize="14px" ml="12px" color="#15171A">
                          Floor
                        </Text>
                      </Flex>
                      <FormControl mb="33px">
                        <Flex
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <FormLabel
                            mb="8px!important"
                            htmlFor="progress"
                            fontWeight="400!important"
                          >
                            79%
                          </FormLabel>
                          <FormLabel
                            mb="8px!important"
                            fontWeight="400!important"
                          >
                            1 Item
                          </FormLabel>
                        </Flex>
                        <Progress
                          value={79}
                          id="progress"
                          borderRadius="4px"
                          colorScheme="purple"
                          h="16px"
                        />
                      </FormControl>
                      <FormControl mb="33px">
                        <Flex
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <FormLabel
                            mb="8px!important"
                            htmlFor="progress"
                            fontWeight="400!important"
                          >
                            30%
                          </FormLabel>
                          <FormLabel
                            mb="8px!important"
                            fontWeight="400!important"
                          >
                            1 Item
                          </FormLabel>
                        </Flex>
                        <Progress
                          value={30}
                          id="progress"
                          borderRadius="4px"
                          colorScheme="purple"
                          h="16px"
                        />
                      </FormControl>
                      <FormControl>
                        <Flex
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <FormLabel
                            mb="8px!important"
                            htmlFor="progress"
                            fontWeight="400!important"
                          >
                            20%
                          </FormLabel>
                          <FormLabel
                            mb="8px!important"
                            fontWeight="400!important"
                          >
                            1 Item
                          </FormLabel>
                        </Flex>
                        <Progress
                          value={20}
                          id="progress"
                          borderRadius="4px"
                          colorScheme="purple"
                          h="16px"
                        />
                      </FormControl>
                      <FormControl mb="33px">
                        <Flex
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <FormLabel
                            mb="8px!important"
                            htmlFor="progress"
                            fontWeight="400!important"
                          >
                            5%
                          </FormLabel>
                          <FormLabel
                            mb="8px!important"
                            fontWeight="400!important"
                          >
                            1 Item
                          </FormLabel>
                        </Flex>
                        <Progress
                          value={5}
                          id="progress"
                          borderRadius="4px"
                          colorScheme="purple"
                          h="16px"
                        />
                      </FormControl>
                      <FormControl mb="33px">
                        <Flex
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <FormLabel
                            mb="8px!important"
                            htmlFor="progress"
                            fontWeight="400!important"
                          >
                            0.5%
                          </FormLabel>
                          <FormLabel
                            mb="8px!important"
                            fontWeight="400!important"
                          >
                            1 Item
                          </FormLabel>
                        </Flex>
                        <Progress
                          value={0.5}
                          id="progress"
                          borderRadius="4px"
                          colorScheme="purple"
                          h="16px"
                        />
                      </FormControl>
                    </Box>
                    <Box
                      p="24px"
                      borderRadius="16px"
                      w={{ base: "100%", lg: "50%" }}
                      border="1px solid rgba(111, 107, 243, 0.40)"
                      bg="rgba(255, 255, 255, 0.40)"
                      boxShadow="2px 2px 8px 0px rgba(13, 13, 13, 0.10)"
                      backdropFilter="blur(30px)"
                    >
                      <Box>
                        <TableContainer>
                          <Flex alignItems='center'>
                        <Text fontSize="24px" fontWeight="700">
                        Owners
                        </Text>
                        <Text fontSize="14px" ml="12px" color="#15171A">
                        Top 100
                        </Text>
                        </Flex>
                          <Table variant="simple">
                            <Thead>
                              <Tr>
                                <Th>NAME</Th>
                                <Th>Wallet</Th>
                                <Th>OWNED</Th>
                                <Th>% OWNED</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              <Tr>
                                <Td px={0}>
                                  <Flex gap="2" alignItems="center" mr="48px">
                                    <Image
                                      src="/assets/images/cover-image1.png"
                                      boxSize="100px"
                                      objectFit="cover"
                                      border="1px solid white"
                                      borderRadius="16px"
                                      w={{ base: "50px" }}
                                      h={{ base: "50px" }}
                                    />
                                    <VStack
                                      spacing="0.5"
                                      alignItems="flex-start"
                                    >
                                      <Heading fontSize="18px">
                                        Panthera Leo
                                      </Heading>
                                    </VStack>
                                  </Flex>
                                </Td>
                                <Td>0xad09…d6cc</Td>
                                <Td>109</Td>
                                <Td>1.08%</Td>
                              </Tr>
                              <Tr>
                                <Td px={0}>
                                  <Flex gap="2" alignItems="center" mr="48px">
                                    <Image
                                      src="/assets/images/cover-image1.png"
                                      boxSize="100px"
                                      objectFit="cover"
                                      border="1px solid white"
                                      borderRadius="16px"
                                      w={{ base: "50px" }}
                                      h={{ base: "50px" }}
                                    />
                                    <VStack
                                      spacing="0.5"
                                      alignItems="flex-start"
                                    >
                                      <Heading fontSize="18px">
                                        Panthera Leo
                                      </Heading>
                                    </VStack>
                                  </Flex>
                                </Td>
                                <Td>0xad09…d6cc</Td>
                                <Td>109</Td>
                                <Td>1.08%</Td>
                              </Tr>
                              <Tr>
                                <Td px={0}>
                                  <Flex gap="2" alignItems="center" mr="48px">
                                    <Image
                                      src="/assets/images/cover-image1.png"
                                      boxSize="100px"
                                      objectFit="cover"
                                      border="1px solid white"
                                      borderRadius="16px"
                                      w={{ base: "50px" }}
                                      h={{ base: "50px" }}
                                    />
                                    <VStack
                                      spacing="0.5"
                                      alignItems="flex-start"
                                    >
                                      <Heading fontSize="18px">
                                        Panthera Leo
                                      </Heading>
                                    </VStack>
                                  </Flex>
                                </Td>
                                <Td>0xad09…d6cc</Td>
                                <Td>109</Td>
                                <Td>1.08%</Td>
                              </Tr>
                              <Tr>
                                <Td px={0}>
                                  <Flex gap="2" alignItems="center" mr="48px">
                                    <Image
                                      src="/assets/images/cover-image1.png"
                                      boxSize="100px"
                                      objectFit="cover"
                                      border="1px solid white"
                                      borderRadius="16px"
                                      w={{ base: "50px" }}
                                      h={{ base: "50px" }}
                                    />
                                    <VStack
                                      spacing="0.5"
                                      alignItems="flex-start"
                                    >
                                      <Heading fontSize="18px">
                                        Panthera Leo
                                      </Heading>
                                    </VStack>
                                  </Flex>
                                </Td>
                                <Td>0xad09…d6cc</Td>
                                <Td>109</Td>
                                <Td>1.08%</Td>
                              </Tr>
                              <Tr>
                                <Td px={0}>
                                  <Flex gap="2" alignItems="center" mr="48px">
                                    <Image
                                      src="/assets/images/cover-image1.png"
                                      boxSize="100px"
                                      objectFit="cover"
                                      border="1px solid white"
                                      borderRadius="16px"
                                      w={{ base: "50px" }}
                                      h={{ base: "50px" }}
                                    />
                                    <VStack
                                      spacing="0.5"
                                      alignItems="flex-start"
                                    >
                                      <Heading fontSize="18px">
                                        Panthera Leo
                                      </Heading>
                                    </VStack>
                                  </Flex>
                                </Td>
                                <Td>0xad09…d6cc</Td>
                                <Td>109</Td>
                                <Td>1.08%</Td>
                              </Tr>
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </Box>
                    </Box>
                  </Flex>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  );
};

export default Collection;
