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
  TableContainer,
} from "@chakra-ui/table";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { ApiUrl } from "../src/apis/apiUrl";
import CollectionCard from "../src/components/Cards/CollectionCard";
import { ReactSelect } from "../src/components/common";
import { Loader } from "../src/components/Loader";
import ProfileDetail from "../src/components/Profile/ProfileDetail";
import ProfileHeader from "../src/components/Profile/ProfileHeader";
import { SlickSlider } from "../src/components/ReactSlick";
import { ActivitySideFilter } from "../src/components/SidebarFilter/ActivitySideFilter";
import { UserCollectionSideFilter } from "../src/components/SidebarFilter/UserCollectionSideFilter";
import CustomSlider from "../src/components/Slider";
import { ActivityTable } from "../src/components/Table/ActivityTable";
import { QUERY_KEYS } from "../src/hooks/queryKeys";
import { useDebounce } from "../src/hooks/useDebounce";
import { useInfiniteQuery } from "../src/hooks/useInfiniteQuery";
import { useQuery } from "../src/hooks/useQuery";
import { collectionType, filters, nftType, profileType } from "../src/types";
import { convertToQueryParam } from "../src/utils";
import { GridView } from "../src/views/GridView";
import ListView from "../src/views/ListView";
import BarChart from "../src/components/charts/BarChart";
import LineChart from "../src/components/charts/LineChart";
import DotChart from "../src/components/charts/DotChart";
import {
  FormControl,
  FormLabel,
  Icon,
  Progress,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

const ProfilCreated: NextPage = () => {
  const [view, setView] = useState<string>("grid");
  const [filters, setFilters] = useState<filters>({ sort: "ASC", search: "" });
  const [search, setSearch] = useState<string>();
  const debounceValue = useDebounce(search, 500);
  const changeViewMode = (viewMode: string) => {
    setView(viewMode);
  };
  const searchHandler = (e: any) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    setFilters({ ...filters, search: debounceValue });
  }, [debounceValue]);
  const { data, isLoading: isProfileLoading } = useQuery<profileType>({
    queryKey: [QUERY_KEYS.GET_USER],
    url: ApiUrl.GET_USER,
    token: true,
  });
  const { data: userCollections, isLoading: isLoadingUserCollection } =
    useQuery<collectionType[]>({
      queryKey: [QUERY_KEYS.GET_COLLECTION_BY_USER_ID],
      url: ApiUrl.GET_COLLECTION_BY_USER_ID,
      token: true,
    });
  const {
    data: userNfts,
    error,
    fetchNextPage,
    status,
    hasNextPage,
    isLoading: isLoadingUserNfts,
  } = useInfiniteQuery<nftType[]>({
    queryKey: [QUERY_KEYS.GET_USER_NFTS, filters],
    url: ApiUrl.GET_USER_NFTS,
    params: { ...filters },
    token: true,
  });
  const {
    data: activities,
    fetchNextPage: fetchNextPageActivities,
    hasNextPage: hasNextPageActivities,
    isLoading: isLoadingActivities,
  } = useInfiniteQuery<any>({
    queryKey: [QUERY_KEYS.GET_USER_ACTIVITES, filters],
    url: ApiUrl.GET_USER_ACTIVITES,
    params: {
      ...filters,
    },
  });
  const socialIcons = [
    { icon: "icon-internet", url: data?.websiteUrl },
    { icon: "icon-telegram", url: data?.telegram },
    { icon: "icon-froggy", url: data?.discord },
    { icon: "icon-instagram", url: data?.instagram },
    { icon: "icon-twitter", url: data?.twitter },
    { icon: "icon-groupbar", url: data?.etherScanUrl },
  ];

  return (
    <>
      <Container maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "8xl" }}>
        <Box px={{ base: "0", sm: "17px" }}>
          {isProfileLoading && data === undefined ? (
            <Flex
              width="100%"
              height="100%"
              justifyContent="center"
              alignItems="center"
            >
              <Loader />
            </Flex>
          ) : (
            <ProfileHeader
              socialIcons={socialIcons}
              showSocialIcons={true}
              coverPhoto={data?.profileCoverURL}
              profilePhoto={data?.profileUrl}
            />
          )}
        </Box>
        <Box mb={{ base: "12px", md: "35px" }}>
          <ProfileDetail
            showStats={false}
            data={{ ...data, description: data?.bio }}
            isCollection={false}
          />
        </Box>
      </Container>
      <Container maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "8xl" }}>
        <Box>
          <Tabs>
            <TabList ml="12px" pl="0">
              <Tab>Created</Tab>
              <Tab>Activity</Tab>
              <Tab>Analytics</Tab>
            </TabList>

            <TabPanels>
              <TabPanel p={0}>
                <Box>
                  {userCollections && userCollections?.length <= 0 ? (
                    ""
                  ) : (
                    <SlickSlider>
                      {userCollections?.map(
                        (collection: any, index: number) => {
                          return (
                            <CollectionCard
                              type="withBody"
                              isEditAble={true}
                              key={index}
                              featureImage={collection?.bannerImageUrl}
                              logoImage={collection?.logoImageUrl}
                              isShowFeatureImage={true}
                              isShowLogoImage={true}
                              name={collection.name}
                            />
                          );
                        }
                      )}
                    </SlickSlider>
                  )}
                </Box>
                <Flex
                  pt="20px"
                  borderTop={
                    userCollections?.length
                      ? "1px solid rgba(53, 53, 53, 0.2)"
                      : ""
                  }
                >
                  <UserCollectionSideFilter
                    onChange={(filter: any) => {
                      setFilters({
                        ...filters,
                        ...convertToQueryParam(filter),
                      });
                    }}
                  />
                  <Box w="100%">
                    <Flex
                      mx="12px"
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
                        order={{ base: "4", sm: "2" }}
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
                          <Input
                            placeholder="Search by Collections…"
                            onChange={(e) => searchHandler(e)}
                            value={filters?.search}
                          />
                          <InputLeftElement>
                            <img src="/assets/images/search-icon.svg" />
                          </InputLeftElement>
                        </InputGroup>
                      </Box>
                      <Box
                        width={{ base: "119px", sm: "150px" }}
                        ml="8px"
                        order={{ base: "2", sm: "3" }}
                      >
                        <ReactSelect
                          options={[
                            { label: "Ascending ", value: "ASC" },
                            { label: "Descending ", value: "DESC" },
                          ]}
                          placeholder="Sort By"
                          isMultiple={false}
                          identifier="filter"
                          getSelectedData={(selectedOption: any) =>
                            setFilters({
                              ...filters,
                              sort: selectedOption?.value,
                            })
                          }
                        />
                      </Box>
                      <ButtonGroup
                        order={{ base: "3", sm: "3" }}
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
                        data={userNfts}
                        fetchNextPage={fetchNextPage}
                        hasNextPage={hasNextPage}
                        type="nft"
                        isLoading={isLoadingUserNfts}
                      />
                    ) : (
                      userNfts !== undefined && (
                        <ListView
                          data={userNfts}
                          fetchNextPage={fetchNextPage}
                          hasNextPage={hasNextPage}
                        />
                      )
                    )}
                  </Box>
                </Flex>
              </TabPanel>
              <TabPanel pt="0">
                <Flex pt="20px" gap="4">
                  <ActivitySideFilter
                    onChange={(filter: any) => {
                      setFilters({
                        ...filters,
                        ...convertToQueryParam(filter),
                      });
                    }}
                    type="user"
                  />
                  <Box w="100%">
                    <Flex
                      justifyContent={"end"}
                      alignItems="center"
                      pt="20px"
                      flexWrap="wrap"
                    >
                      <Box order="1">
                        <IconButton
                          variant="outline"
                          colorScheme="primary"
                          aria-label="Send"
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
                          <Input placeholder="Search by Collections…" />
                          <InputLeftElement>
                            <img src="/assets/images/search-icon.svg" />
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
                      flexBasis={"22%"}
                      flex={"0% 1 0%)"}
                      margin={"12px 12px 12px 0"}
                    >
                      <Flex justifyContent="space-between">
                        <StatLabel mb="12px">Volume</StatLabel>
                        <StatHelpText color="#F00">
                          <i className="icon-down"></i>-45%
                        </StatHelpText>
                      </Flex>
                      <StatNumber>225,278 MATIC</StatNumber>
                    </Stat>
                    <Stat
                      flexBasis={"22%"}
                      flex={"0% 1 0%)"}
                      margin={"12px 12px 12px 0"}
                    >
                      <Flex justifyContent="space-between">
                        <StatLabel mb="8px">Sales</StatLabel>
                        <StatHelpText color="#F00">
                          <i className="icon-down"></i>-42%
                        </StatHelpText>
                      </Flex>
                      <StatNumber>1,679</StatNumber>
                    </Stat>
                    <Stat
                      flexBasis={"22%"}
                      flex={"0% 1 0%)"}
                      margin={"12px 12px 12px 0"}
                    >
                      <Flex justifyContent="space-between">
                        <StatLabel mb="8px">Floor Price</StatLabel>
                        <StatHelpText color="#00F59B">
                          <i className="icon-up"></i>+8%
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
                        <BarChart />
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
                        <LineChart />{" "}
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
                            <Box width="150px" order={{ base: "2", sm: "3" }}>
                              <ReactSelect
                                options={[
                                  { key: "Sorty By", value: "Sort By" },
                                ]}
                                isMultiple={false}
                                identifier="filter"
                                getSelectedData={(value: string) =>
                                  console.log(value)
                                }
                                placeholder="Sort By"
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
                        Floor Price
                      </Text>
                      <Box>
                        {" "}
                        <DotChart />{" "}
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
                          <Table variant="simple">
                            <Thead>
                              <Tr>
                                <Th textAlign="center">ITEM</Th>
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

export default ProfilCreated;
