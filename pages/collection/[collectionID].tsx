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
        <Box px={{ base: "0", md: "17px" }}>
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
            <TabList>
              <Tab>Items</Tab>
              <Tab>Activity</Tab>
              <Tab>Analytics</Tab>
            </TabList>

            <TabPanels>
              <TabPanel p={0}>
                <Flex pt="20px">
                  <CollectionSideFilter
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
                          w={{ base: "full", sm: "300px", md: "sm" }}
                          marginBottom={{
                            base: "3",
                            md: "initial",
                            xl: "initial",
                          }}
                        >
                          <Input
                            placeholder="Search..."
                            onChange={(e) => searchHandler(e)}
                            value={search}
                          />
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
                <Flex pt="20px" gap="4">
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
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  );
};

export default Collection;
