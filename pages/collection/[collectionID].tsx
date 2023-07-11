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
import {
  convertToQueryParam,
  dayJs,
  convertPropertyObject,
} from "../../src/utils";
import { ActivitySideFilter } from "../../src/components/SidebarFilter/ActivitySideFilter";
import { CollectionSideFilter } from "../../src/components/SidebarFilter/CollectionSideFilter";
import { ActivityTable } from "../../src/components/Table/ActivityTable";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Progress } from "@chakra-ui/progress";
import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/stat";
import BarChart from "../../src/components/charts/BarChart";
import CustomLineChart from "../../src/components/charts/LineChart";
import DotChart from "../../src/components/charts/DotChart";
import { ListingTable } from "../../src/components/Table/ListingTable";
import { TopOwnerTable } from "../../src/components/Table/TopOwnerTable";

const Collection: NextPage = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [listingFilter, setListingFilter] = useState<string>("");
  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  const router = useRouter();
  const [collectionID, setCollectionID] = useState<string | undefined>("");
  const [filters, setFilters] = useState<filters>({ sort: "ASC", search: "" });
  const [propertyQuery, setPropertyQuery] = useState<{ property: any }>({
    property: {},
  });
  const [search, setSearch] = useState<string>();
  const [view, setView] = useState<string>("grid");
  const debounceValue = useDebounce(search, 1000);
  const [isFilterChanged, setIsFilterChanged] = useState<boolean>(false);
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
    queryKey: [
      QUERY_KEYS.GET_COLLECTION_NFTS_BY_ID,
      isFilterChanged || debounceValue,
    ],
    url: `${ApiUrl.GET_COLLECTION_NFTS_BY_ID}`,
    params: {
      collectionId: `${
        typeof Window !== "undefined" &&
        window.location?.pathname?.split("/")[2]
      }`,
      ...filters,
      ...propertyQuery?.property,
    },
    token: true,
  });
  console.log(filters, propertyQuery);
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
  const { data: analyticsListing, isLoading: isListingFilterLoading } =
    useQuery<any>({
      queryKey: [QUERY_KEYS.GET_ANALYTICS_LISTING, listingFilter],
      url: ApiUrl?.GET_ANALYTICS_LISTING,
      showToast: false,
      params: {
        collectionId: `${
          typeof Window !== "undefined" &&
          window.location?.pathname?.split("/")[2]
        }`,
        sort: listingFilter,
      },
    });
  const { data: userListing } = useQuery<any>({
    queryKey: [QUERY_KEYS.GET_TOP_OWNERS],
    url: ApiUrl?.GET_TOP_OWNERS,
    showToast: false,
    params: {
      collectionId: `${
        typeof Window !== "undefined" &&
        window.location?.pathname?.split("/")[2]
      }`,
    },
  });
  const { data: ownerDistribution } = useQuery<any>({
    queryKey: [QUERY_KEYS.GET_TOP_OWNER_DISTRIBUTION],
    url: ApiUrl?.GET_TOP_OWNER_DISTRIBUTION,
    showToast: false,
    params: {
      collectionId: `${
        typeof Window !== "undefined" &&
        window.location?.pathname?.split("/")[2]
      }`,
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
                <Flex pt="20px" gap="24px">
                  <CollectionSideFilter
                    onChange={(filter: any) => {
                      console.log(filter, "filters............");
                      setPropertyQuery(
                        convertPropertyObject({
                          property: filter?.properties,
                        })
                      );
                      setFilters({
                        ...filters,
                        status: filter?.status && filter?.status,
                      });
                      setIsFilterChanged(!isFilterChanged);
                    }}
                    collectionId={router?.query?.collectionID}
                  />
                  <Box w="100%">
                    <Flex
                      justifyContent={"end"}
                      alignItems="center"
                      flexWrap="wrap"
                    >
                      <Box order="1" onClick={toggleFilterVisibility}>
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
                          options={[
                            { label: "Ascending ", value: "ASC" },
                            { label: "Descending ", value: "DESC" },
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
                      <Flex justifyContent="space-between" alignItems="center">
                        <StatLabel mb="12px">Volume</StatLabel>
                        <StatHelpText color="#F00">
                          {/* <i className="icon-down"></i>-45% */}
                        </StatHelpText>
                      </Flex>
                      <StatNumber>{collectionDetail?.volume} MATIC</StatNumber>
                    </Stat>
                    <Stat
                      flexBasis={"33%"}
                      flex={"0% 1 0%)"}
                      margin={"12px 12px 12px 0"}
                    >
                      <Flex justifyContent="space-between" alignItems="center">
                        <StatLabel mb="8px">Sales</StatLabel>
                        <StatHelpText color="#F00">
                          {/* <i className="icon-down"></i>-42% */}
                        </StatHelpText>
                      </Flex>
                      <StatNumber>{collectionDetail?.sale}</StatNumber>
                    </Stat>
                    <Stat
                      flexBasis={"33%"}
                      flex={"0% 1 0%)"}
                      margin={"12px 12px 12px 0"}
                    >
                      <Flex justifyContent="space-between" alignItems="center">
                        <StatLabel mb="8px">Floor Price</StatLabel>
                        <StatHelpText color="#00F59B">
                          {/* <i className="icon-up"></i>+8% */}
                        </StatHelpText>
                      </Flex>

                      <StatNumber>{collectionDetail?.floor_price}</StatNumber>
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
                                { label: "Ascending", value: "ASC" },
                                { label: "Descending", value: "DESC" },
                              ]}
                              isMultiple={false}
                              identifier="filter"
                              getSelectedData={(selectedOption: any) => {
                                setListingFilter(selectedOption?.value);
                              }}
                              defaultValue={{
                                label: "Ascending",
                                value: "ASC",
                              }}
                              placeholder="Sort By"
                            />
                          </Box>
                        </Flex>
                        <ListingTable
                          data={analyticsListing}
                          isLoading={isListingFilterLoading}
                        />
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
                          {ownerDistribution && ownerDistribution?.totalNft}
                        </Text>
                      </Flex>
                      {ownerDistribution &&
                        ownerDistribution?.ownerDistribution?.map(
                          (ownersDist: any, index: number) => {
                            return (
                              <FormControl mb="33px" key={index}>
                                <Flex
                                  alignItems="center"
                                  justifyContent="space-between"
                                >
                                  <FormLabel
                                    mb="8px!important"
                                    htmlFor="progress"
                                    fontWeight="400!important"
                                  >
                                    {`${ownersDist?.percentage}%`}
                                  </FormLabel>
                                  <FormLabel
                                    mb="8px!important"
                                    fontWeight="400!important"
                                  >
                                    {`${ownersDist?.items} Item`}
                                  </FormLabel>
                                </Flex>
                                <Progress
                                  value={ownersDist?.percentage}
                                  id="progress"
                                  borderRadius="4px"
                                  colorScheme="purple"
                                  h="16px"
                                />
                              </FormControl>
                            );
                          }
                        )}
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
                      <Flex
                        justifyContent={"space-between"}
                        w="100%"
                        alignItems="center"
                        flexWrap="wrap"
                      >
                        <Text fontSize="20px" fontWeight="700">
                          Owners
                        </Text>
                      </Flex>
                      <TopOwnerTable data={userListing} />
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
