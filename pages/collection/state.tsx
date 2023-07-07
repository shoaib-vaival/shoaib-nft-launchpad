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
import { currencySymbol, timeFilterOptions } from "../../src/constants";
import { POST } from "../../src/hooks/consts";
import { useMutation } from "../../src/hooks/useMutation";
import { CollectionStatTable } from "../../src/components/Table/StateTable";
import { useState } from "react";
import { HorizentalButtonFilter } from "../../src/components/HorizentalButtonFilters";
import { categoriesAndTagsTypes } from "../../src/types/collection";
import { useQuery } from "../../src/hooks/useQuery";

const CollectionStat: NextPage = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const tabFilters = ["top", "trending", "watchlist"];
  const [dayFilters, setDayFilters] = useState<string>("");
  const { data: categories } = useQuery<categoriesAndTagsTypes>({
    queryKey: [QUERY_KEYS.GET_CAT],
    url: ApiUrl?.GET_CATEGORIES,
    showToast: false,
  });
  const filtredCat =
    categories &&
    categories?.map((cat: categoriesAndTagsTypes) => ({
      label: cat?.name,
      value: cat?.id,
    }));

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
        <Tabs index={tabIndex} onChange={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Top</Tab>
            <Tab>Trending</Tab>
            <Tab>Watchlist</Tab>
          </TabList>

          <TabPanels>
            <Flex justifyContent="space-between" marginTop="16px">
              <ReactSelect
                options={filtredCat}
                isMultiple={false}
                identifier="cat"
                placeholder="All categories"
                getSelectedData={(value: any) => {
                  console.log(value);
                }}
                // defaultValue={{label: getCollectionById?.category?.name, value: 123}}
              />
              <HorizentalButtonFilter
                options={timeFilterOptions?.options}
                onChange={(value: string) => setDayFilters(value)}
                type={timeFilterOptions?.type}
                defaultValue={timeFilterOptions?.defaultValue}
              />
            </Flex>
            <TabPanel>
              <CollectionStatTable
                type="add"
                tabFilter={tabFilters[tabIndex]}
                dayFilter={dayFilters}
              />
            </TabPanel>
            <TabPanel>
              <CollectionStatTable
                type="add"
                tabFilter={tabFilters[tabIndex]}
                dayFilter={dayFilters}
              />
            </TabPanel>
            <TabPanel>
              <CollectionStatTable
                type="remove"
                tabFilter={tabFilters[tabIndex]}
                dayFilter={dayFilters}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
};
export default CollectionStat;
