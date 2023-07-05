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
import { CollectionStatTable } from "../../src/components/Table/StateTable";

const CollectionStat: NextPage = () => {
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
        <Tabs>
          <TabList>
            <Tab>Top</Tab>
            <Tab>Trending</Tab>
            <Tab>Watchlist</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <CollectionStatTable type="add" />
            </TabPanel>
            <TabPanel>
              <CollectionStatTable type="add" />
            </TabPanel>
            <TabPanel>
              <CollectionStatTable type="remove" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
};
export default CollectionStat;
