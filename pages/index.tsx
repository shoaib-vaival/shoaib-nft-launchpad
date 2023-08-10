import {
  Container,
  Heading,
  Flex,
  Button,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import Link from "next/link";
import { useStoreActions, useStoreState } from "easy-peasy";

// skeletons
import TabsSkeleton from "../src/components/Seketons/Tabs";
import CardCollectionSkeleton from "../src/components/Seketons/Collection";

import { Banner } from "../src/components/Banner";
const FilterTabs = dynamic(
  () => import("../src/components/FilterTabs").then((mod) => mod.FilterTabs),
  {
    loading: () => <TabsSkeleton />,
  }
);
import { useQuery } from "../src/hooks/useQuery";
import { QUERY_KEYS } from "../src/hooks/queryKeys";
import { ApiUrl } from "../src/apis/apiUrl";
import { categoriesType } from "../src/types";
import { dashboardApiType } from "../src/types/response.type";

const HorizentalButtonFilter = dynamic(() =>
  import("../src/components/HorizentalButtonFilters").then(
    (mod) => mod.HorizentalButtonFilter
  )
);
import { timeFilterOptions } from "../src/constants";
import FeaturedCollections from "../src/components/FeaturedCollections";
const DashboardCollections = dynamic(
  () => import("../src/components/DashboardCollections")
);
const TopTenTable = dynamic(() =>
  import("../src/components/Table/TopTenTable").then((mod) => mod.TopTenTable)
);

const Home: NextPage = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const filters = ["trending", "top"];
  const [day, setDay] = useState<string>("30");
  const collectionState = useStoreState(
    (state: any) => state?.collectionObj?.CollectionObj
  );
  const collectionAction = useStoreActions(
    (actions: any) => actions.collectionObj.add
  );

  const { data, isLoading } = useQuery<dashboardApiType>({
    queryKey: [QUERY_KEYS.GET_DASHBOARD_COLLECTIONS],
    url: ApiUrl.GET_DASHBOARD_COLLECTION,
    showToast: false,
    onSuccess: (data) =>
      collectionAction({
        dashboardData: data?.recent?.concat(
          data?.recent,
          data?.featured,
          data?.trending,
          data?.trendingInArt
        ),
      }),
  });

  const { data: categories, isLoading: isLoadingBrowsByCat } = useQuery<
    categoriesType[]
  >({
    queryKey: [QUERY_KEYS.GET_CAT],
    url: ApiUrl.GET_CATEGORIES,
  });

  const { data: topTenData, isLoading: isTopTenLoading } = useQuery<
    categoriesType[]
  >({
    queryKey: [QUERY_KEYS.GET_TOPTEN_COLLECTIONS, filters[tabIndex], day],
    url: ApiUrl.GET_TOPTEN_COLLECTIONS,
    params: {
      type: filters[tabIndex],
      day: day,
    },
    onSuccess: (data) =>
      collectionAction({
        dashboardData: collectionState?.dashboardData?.concat(data),
      }),
  });

  return (
    <>
      <Box position="relative">
        <Box
          bgImage="url(https://nft-launchpad.b-cdn.net/bg-lines.png)"
          position="absolute"
          left="0"
          right="0"
          bottom="-60px"
          w="100%"
          h="100%"
          bgSize="cover"
          bgPosition="bottom"
        ></Box>
        <Container maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "8xl" }}>
          <Box>
            <Banner />
          </Box>
        </Container>
      </Box>

      <FeaturedCollections isLoading={isLoading} data={data?.featured} />

      <Container
        maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "8xl" }}
        mt={{ base: "40px", lg: "80px" }}
      >
        <Tabs onChange={(index) => setTabIndex(index)}>
          <TabList pl="0" alignItems="center" flexWrap="wrap">
            <Tab fontSize={{ base: "20px", md: "24px" }} fontWeight="700">
              Trending
            </Tab>
            <Tab fontSize={{ base: "20px", md: "24px" }} fontWeight="700">
              Top
            </Tab>

            <Flex
              alignItems="center"
              ml={{ base: "initial", sm: "auto" }}
              pb="8px"
              flexWrap="wrap"
              gap="8px"
              mt={{ base: "28px", md: "0" }}
            >
              <HorizentalButtonFilter
                options={timeFilterOptions?.options}
                onChange={(value: string) => setDay(value)}
                type={timeFilterOptions?.type}
                defaultValue={timeFilterOptions?.defaultValue}
              />
              <Button
                p={{ base: "15px", md: "20px 32px" }}
                as={Link}
                href="/categories"
                variant="primary"
                textTransform="uppercase"
              >
                View All
              </Button>
            </Flex>
          </TabList>

          <TabPanels>
            <TabPanel p="0" pb="25px" borderBottom="1px solid #35353533">
              <Box display={{ base: "none", md: "block" }}>
                <Flex gap="33px">
                  <Box w="50%">
                    <TopTenTable
                      isLoading={isTopTenLoading}
                      data={topTenData && topTenData?.slice(0, 5)}
                    />
                  </Box>
                  <Box w="50%">
                    <TopTenTable
                      isLoading={isTopTenLoading}
                      data={topTenData && topTenData?.slice(5, 10)}
                    />
                  </Box>
                </Flex>
              </Box>
              <Box w="100%" display={{ base: "block", md: "none" }}>
                <TopTenTable
                  isLoading={isTopTenLoading}
                  data={topTenData && topTenData?.slice(0, 10)}
                />
              </Box>
            </TabPanel>
            <TabPanel p="0">
              <Box display={{ base: "none", md: "block" }}>
                <Flex gap="33px">
                  <Box w="50%">
                    <TopTenTable
                      isLoading={isTopTenLoading}
                      data={topTenData && topTenData?.slice(0, 5)}
                    />
                  </Box>
                  <Box w="50%">
                    <TopTenTable
                      isLoading={isTopTenLoading}
                      data={topTenData && topTenData?.slice(5, 10)}
                    />
                  </Box>
                </Flex>
              </Box>

              <Box w="100%" display={{ base: "block", md: "none" }}>
                <TopTenTable
                  isLoading={isTopTenLoading}
                  data={topTenData && topTenData?.slice(0, 10)}
                />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <Container
        maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "8xl" }}
        mt={{ base: "40px", lg: "80px" }}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          mb={{ base: "10px", sm: "30px" }}
          px={{ base: "0", md: "12px" }}
        >
          <Heading
            fontSize={{ base: "28px", sm: "32px", md: "36px", xl: "56px" }}
          >
            Browse by Categories
          </Heading>
          <Button
            p={{ base: "22px", md: "20px 32px" }}
            as={Link}
            href="/categories"
            variant="primary"
            textTransform="uppercase"
          >
            View All
          </Button>
        </Flex>
        {isLoadingBrowsByCat ? (
          <CardCollectionSkeleton />
        ) : (
          <FilterTabs
            tabsList={categories}
            getTabIndex={(index) => console.log(index)}
          />
        )}
      </Container>
      <DashboardCollections
        isLoading={isLoading}
        data={data?.trending}
        headingTxt="Trending Collections"
      />
      <DashboardCollections
        isLoading={isLoading}
        data={data?.trendingInArt}
        headingTxt="Trending in Art"
      />
      <DashboardCollections
        isLoading={isLoading}
        data={data?.recent}
        headingTxt="Recent Collections"
      />
    </>
  );
};

export default Home;
