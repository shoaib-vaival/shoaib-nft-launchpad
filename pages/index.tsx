import type { NextPage } from "next";

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
  IconButton,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  VStack,
  Td,
  Text,
  Image,
  useRadioGroup,
  HStack,
} from "@chakra-ui/react";
import { SlickSlider } from "../src/components/ReactSlick";
import CollectionCard from "../src/components/Cards/CollectionCard";
import { Banner } from "../src/components/Banner";
import { FilterTabs } from "../src/components/FilterTabs";
import CustomSlider from "../src/components/Slider";
import { useQuery } from "../src/hooks/useQuery";
import { QUERY_KEYS } from "../src/hooks/queryKeys";
import { ApiUrl } from "../src/apis/apiUrl";
import { categoriesType, collectionType } from "../src/types";
import Link from "next/link";
import { dashboardApiType } from "../src/types/response.type";
import { Loader } from "../src/components/Loader";
import RadioCards from "../src/components/RadioCards";
import { ReactSelect } from "../src/components/common";

const Home: NextPage = () => {
  const { data, isLoading } = useQuery<dashboardApiType>({
    queryKey: [QUERY_KEYS.GET_DASHBOARD_COLLECTIONS],
    url: ApiUrl.GET_DASHBOARD_COLLECTION,
    showToast: false,
  });
  const { data: categories } = useQuery<categoriesType[]>({
    queryKey: [QUERY_KEYS.GET_CAT],
    url: ApiUrl.GET_CATEGORIES,
  });
  const options = ["15m", "1h", "24h", "7d"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <div>
      <Box position="relative" pt="40px">
        <Box
          bgImage="/assets/images/bg-lines.png"
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

      {isLoading && data === undefined ? (
        <Flex
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Loader />
        </Flex>
      ) : (
        <>
          <Container
            maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "8xl" }}
            mt={{ base: "40px", lg: "80px" }}
          >
            <Heading
              px={{ base: "0", md: "12px" }}
              fontSize={{ base: "24px", md: "36px", xl: "48px" }}
            >
              Featured Collections
            </Heading>
            <SlickSlider>
              {data?.featured &&
                data?.featured.map((item: collectionType, index: number) => {
                  return (
                    <Link href={`collection/${item?.id}`} key={index}>
                      <CollectionCard
                        type="withoutBody"
                        featureImage={item?.logoImageUrl}
                        isShowFeatureImage={true}
                        isShowLogoImage={false}
                        name={item?.name}
                      />
                    </Link>
                  );
                })}
            </SlickSlider>
          </Container>

          <Box>
            <Container
              maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "8xl" }}
              mt={{ base: "40px", lg: "80px" }}
            >
              <Tabs>
                <TabList pl="0" alignItems="center" flexWrap="wrap">
                  <Tab>Trending</Tab>
                  <Tab>Top</Tab>

                  <Flex
                    alignItems="center"
                    ml={{ base: "initial", sm: "auto" }}
                    pb="8px"
                    flexWrap="wrap"
                    {...group}
                    gap="8px"
                    mt={{ base: "12px", md: "0" }}
                  >
                    {options.map((value) => {
                      const radio = getRadioProps({ value });
                      return (
                        <RadioCards key={value} type="small" {...radio}>
                          {value}
                        </RadioCards>
                      );
                    })}
                    <ReactSelect
                      options=""
                      isMultiple={true}
                      getSelectedData=""
                      identifier="collection"
                      label=""
                      placeholder="All chains"
                    />
                    <Button
                      p={{ base: "15px", md: "20px 32px" }}
                      as={Link}
                      href="/categories"
                      variant="primary"
                    >
                      View All
                    </Button>
                  </Flex>
                </TabList>

                <TabPanels>
                  <TabPanel pt="0">
                    <TableContainer
                      py="24px"
                      borderBottom="1px solid #35353533"
                    >
                      <Box display="flex">
                        <Table variant="simple">
                          <Thead>
                            <Tr>
                              <Th border="0">COLLECTION</Th>
                              <Th border="0">FLOOR PRICE</Th>
                              <Th border="0">VOLUME</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Td>
                                <Flex gap="2" alignItems="center" mr="48px">
                                  <Image
                                    src="/assets/images/cover-image1.png"
                                    boxSize="100px"
                                    objectFit="cover"
                                    border="1px solid white"
                                    borderRadius="16px"
                                    w={{ base: "50px", md: "96px" }}
                                    h={{ base: "50px", md: "96px" }}
                                  />
                                  <VStack spacing="0.5">
                                    <Heading fontSize="18px">
                                      Panthera Leo
                                    </Heading>
                                  </VStack>
                                </Flex>
                              </Td>
                              <Td>5.30 MATIC</Td>
                              <Td>2,792 MATIC</Td>
                            </Tr>
                            <Tr>
                              <Td>
                                <Flex gap="2" alignItems="center" mr="48px">
                                  <Image
                                    src="/assets/images/cover-image1.png"
                                    boxSize="100px"
                                    objectFit="cover"
                                    border="1px solid white"
                                    borderRadius="16px"
                                    w={{ base: "50px", md: "96px" }}
                                    h={{ base: "50px", md: "96px" }}
                                  />
                                  <VStack spacing="0.5">
                                    <Heading fontSize="18px">
                                      Panthera Leo
                                    </Heading>
                                  </VStack>
                                </Flex>
                              </Td>
                              <Td>5.30 MATIC</Td>
                              <Td>2,792 MATIC</Td>
                            </Tr>
                            <Tr>
                              <Td>
                                <Flex gap="2" alignItems="center" mr="48px">
                                  <Image
                                    src="/assets/images/cover-image1.png"
                                    boxSize="100px"
                                    objectFit="cover"
                                    border="1px solid white"
                                    borderRadius="16px"
                                    w={{ base: "50px", md: "96px" }}
                                    h={{ base: "50px", md: "96px" }}
                                  />
                                  <VStack spacing="0.5">
                                    <Heading fontSize="18px">
                                      Panthera Leo
                                    </Heading>
                                  </VStack>
                                </Flex>
                              </Td>
                              <Td>5.30 MATIC</Td>
                              <Td>2,792 MATIC</Td>
                            </Tr>
                            <Tr>
                              <Td>
                                <Flex gap="2" alignItems="center" mr="48px">
                                  <Image
                                    src="/assets/images/cover-image1.png"
                                    boxSize="100px"
                                    objectFit="cover"
                                    border="1px solid white"
                                    borderRadius="16px"
                                    w={{ base: "50px", md: "96px" }}
                                    h={{ base: "50px", md: "96px" }}
                                  />
                                  <VStack spacing="0.5">
                                    <Heading fontSize="18px">
                                      Panthera Leo
                                    </Heading>
                                  </VStack>
                                </Flex>
                              </Td>
                              <Td>5.30 MATIC</Td>
                              <Td>2,792 MATIC</Td>
                            </Tr>
                            <Tr>
                              <Td>
                                <Flex gap="2" alignItems="center" mr="48px">
                                  <Image
                                    src="/assets/images/cover-image1.png"
                                    boxSize="100px"
                                    objectFit="cover"
                                    border="1px solid white"
                                    borderRadius="16px"
                                    w={{ base: "50px", md: "96px" }}
                                    h={{ base: "50px", md: "96px" }}
                                  />
                                  <VStack spacing="0.5">
                                    <Heading fontSize="18px">
                                      Panthera Leo
                                    </Heading>
                                  </VStack>
                                </Flex>
                              </Td>
                              <Td>5.30 MATIC</Td>
                              <Td>2,792 MATIC</Td>
                            </Tr>
                          </Tbody>
                        </Table>
                        <Table variant="simple">
                          <Thead>
                            <Tr>
                              <Th border="0">COLLECTION</Th>
                              <Th border="0">FLOOR PRICE</Th>
                              <Th border="0">VOLUME</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Td>
                                <Flex gap="2" alignItems="center" mr="48px">
                                  <Image
                                    src="/assets/images/cover-image1.png"
                                    boxSize="100px"
                                    objectFit="cover"
                                    border="1px solid white"
                                    borderRadius="16px"
                                    w={{ base: "50px", md: "96px" }}
                                    h={{ base: "50px", md: "96px" }}
                                  />
                                  <VStack spacing="0.5">
                                    <Heading fontSize="18px">
                                      Panthera Leo
                                    </Heading>
                                  </VStack>
                                </Flex>
                              </Td>
                              <Td>5.30 MATIC</Td>
                              <Td>2,792 MATIC</Td>
                            </Tr>
                            <Tr>
                              <Td>
                                <Flex gap="2" alignItems="center" mr="48px">
                                  <Image
                                    src="/assets/images/cover-image1.png"
                                    boxSize="100px"
                                    objectFit="cover"
                                    border="1px solid white"
                                    borderRadius="16px"
                                    w={{ base: "50px", md: "96px" }}
                                    h={{ base: "50px", md: "96px" }}
                                  />
                                  <VStack spacing="0.5">
                                    <Heading fontSize="18px">
                                      Panthera Leo
                                    </Heading>
                                  </VStack>
                                </Flex>
                              </Td>
                              <Td>5.30 MATIC</Td>
                              <Td>2,792 MATIC</Td>
                            </Tr>
                            <Tr>
                              <Td>
                                <Flex gap="2" alignItems="center" mr="48px">
                                  <Image
                                    src="/assets/images/cover-image1.png"
                                    boxSize="100px"
                                    objectFit="cover"
                                    border="1px solid white"
                                    borderRadius="16px"
                                    w={{ base: "50px", md: "96px" }}
                                    h={{ base: "50px", md: "96px" }}
                                  />
                                  <VStack spacing="0.5">
                                    <Heading fontSize="18px">
                                      Panthera Leo
                                    </Heading>
                                  </VStack>
                                </Flex>
                              </Td>
                              <Td>5.30 MATIC</Td>
                              <Td>2,792 MATIC</Td>
                            </Tr>
                            <Tr>
                              <Td>
                                <Flex gap="2" alignItems="center" mr="48px">
                                  <Image
                                    src="/assets/images/cover-image1.png"
                                    boxSize="100px"
                                    objectFit="cover"
                                    border="1px solid white"
                                    borderRadius="16px"
                                    w={{ base: "50px", md: "96px" }}
                                    h={{ base: "50px", md: "96px" }}
                                  />
                                  <VStack spacing="0.5">
                                    <Heading fontSize="18px">
                                      Panthera Leo
                                    </Heading>
                                  </VStack>
                                </Flex>
                              </Td>
                              <Td>5.30 MATIC</Td>
                              <Td>2,792 MATIC</Td>
                            </Tr>
                            <Tr>
                              <Td>
                                <Flex gap="2" alignItems="center" mr="48px">
                                  <Image
                                    src="/assets/images/cover-image1.png"
                                    boxSize="100px"
                                    objectFit="cover"
                                    border="1px solid white"
                                    borderRadius="16px"
                                    w={{ base: "50px", md: "96px" }}
                                    h={{ base: "50px", md: "96px" }}
                                  />
                                  <VStack spacing="0.5">
                                    <Heading fontSize="18px">
                                      Panthera Leo
                                    </Heading>
                                  </VStack>
                                </Flex>
                              </Td>
                              <Td>5.30 MATIC</Td>
                              <Td>2,792 MATIC</Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </Box>
                    </TableContainer>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Container>
          </Box>
          <Container
            maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "8xl" }}
            mt={{ base: "40px", lg: "80px" }}
          >
            <Flex
              justifyContent="space-between"
              alignItems="center"
              mb="40px"
              px={{ base: "0", md: "12px" }}
            >
              <Heading
                fontSize={{ base: "28px", sm: "32px", md: "36px", xl: "56px" }}
              >
                Browse by Categories
              </Heading>
              <Button
                p={{ base: "15px", md: "20px 32px" }}
                as={Link}
                href="/categories"
                variant="primary"
              >
                View All
              </Button>
            </Flex>
            <FilterTabs
              tabsList={categories}
              getTabIndex={(index) => console.log(index)}
            />
          </Container>
          <Container
            maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "8xl" }}
            mt={{ base: "40px", lg: "80px" }}
          >
            <Flex
              justifyContent="space-between"
              alignItems="center"
              mb={{ base: "20px", lg: "40px" }}
              px={{ base: "0", md: "12px" }}
            >
              <Heading fontSize={{ base: "24px", md: "36px", xl: "48px" }}>
                Trending Collection
              </Heading>
              <Button
                p={{ base: "15px", md: "20px 32px" }}
                as={Link}
                href="/categories"
                variant="primary"
              >
                View All
              </Button>
            </Flex>
            <SlickSlider>
              {data?.trending?.map((item: collectionType, index: number) => {
                return (
                  <Link href={`collection/${item?.id}`} key={index}>
                    <CollectionCard
                      type="withBody"
                      featureImage={item?.logoImageUrl}
                      isShowFeatureImage={true}
                      isShowLogoImage={false}
                      name={item.name}
                    />
                  </Link>
                );
              })}
            </SlickSlider>
          </Container>
          <Container
            maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "8xl" }}
            mt={{ base: "40px", lg: "80px" }}
          >
            <Flex
              justifyContent="space-between"
              alignItems="center"
              mb={{ base: "20px", lg: "40px" }}
              px={{ base: "0", md: "12px" }}
            >
              <Heading fontSize={{ base: "24px", md: "36px", xl: "48px" }}>
                Trending in Art
              </Heading>
              <Button
                p={{ base: "15px", md: "20px 32px" }}
                as={Link}
                href="/categories"
                variant="primary"
              >
                View All
              </Button>
            </Flex>
            <SlickSlider>
              {data?.trendingInArt?.map(
                (item: collectionType, index: number) => {
                  return (
                    <Link href={`collection/${item?.id}`} key={index}>
                      <CollectionCard
                        type="withBody"
                        featureImage={item.logoImageUrl}
                        isShowFeatureImage={true}
                        isShowLogoImage={false}
                        name={item.name}
                      />
                    </Link>
                  );
                }
              )}
            </SlickSlider>
          </Container>
          <Container
            maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "8xl" }}
            mt={{ base: "40px", lg: "80px" }}
          >
            <CustomSlider name="Recent Collection">
              {data?.recent?.map((item: collectionType, index: number) => {
                return (
                  <Link href={`collection/${item?.id}`} key={index}>
                    <CollectionCard
                      type="withBody"
                      featureImage={item.logoImageUrl}
                      isShowFeatureImage={true}
                      isShowLogoImage={false}
                      name={item.name}
                    />
                  </Link>
                );
              })}
            </CustomSlider>
          </Container>
        </>
      )}
    </div>
  );
};

export default Home;
