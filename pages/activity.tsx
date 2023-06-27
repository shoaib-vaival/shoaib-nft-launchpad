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
import { ReactSelect } from "../src/components/common";
import { useInfiniteQuery } from "../src/hooks/useInfiniteQuery";
import { QUERY_KEYS } from "../src/hooks/queryKeys";
import { ApiUrl } from "../src/apis/apiUrl";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "../src/components/Loader";
import { dayJs } from "../src/utils";

const Categories: NextPage = () => {
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery<any>(
    {
      queryKey: [QUERY_KEYS.GET_ACTIVITIES],
      url: ApiUrl.GET_ACTIVITIES,
    }
  );
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
            Activity
          </Heading>
        </Box>
        <Flex
          justifyContent={"end"}
          alignItems="center"
          pt="20px"
          mb="25px"
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
              marginBottom={{ base: "3", md: "initial", xl: "initial" }}
            >
              <Input placeholder="Search..." />
              <InputLeftElement>
                <img src="/assets/images/search-icon.svg" />
              </InputLeftElement>
            </InputGroup>
          </Box>
          <Box width="150px" ml="8px" order={{ base: "2", sm: "3" }}>
            <ReactSelect
              options={[{ key: "Sorty By", value: "Sort By" }]}
              isMultiple={false}
              identifier="filter"
              getSelectedData={(value: string) => console.log(value)}
              placeholder="Sort By"
            />
          </Box>
        </Flex>
        <TableContainer>
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
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th textAlign="center">ITEM</Th>
                  <Th>From</Th>
                  <Th>To</Th>
                  <Th>TIME</Th>
                </Tr>
              </Thead>
              <Tbody>
                {isLoading && (
                  <Tr>
                    <Td colSpan={5}>
                      <Flex
                        width="100%"
                        height="100%"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Loader />
                      </Flex>
                    </Td>
                  </Tr>
                )}
                {data && data?.length <= 0 && (
                  <Tr>
                    <Td colSpan={5}>
                      <Flex
                        width="100%"
                        height="100%"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Heading>Record Not Found</Heading>
                      </Flex>
                    </Td>
                  </Tr>
                )}
                {data &&
                  data?.map((activity: any, index: number) => {
                    return (
                      <Tr key={index}>
                        <Td>
                          <Flex gap="2" alignItems="center" mr="48px">
                            <Box color="#6863F3">
                              {activity?.activityType === "Transfer" && (
                                <i className="icon-transfer"></i>
                              )}
                              {activity?.activityType === "List" && (
                                <i className="icon-list"></i>
                              )}
                            </Box>
                            {activity?.activityType === "List" && (
                              <Text fontWeight="700" flex="15%">
                                List
                              </Text>
                            )}
                            {activity?.activityType === "Transfer" && (
                              <Text fontWeight="700" flex="15%">
                                Transfer
                              </Text>
                            )}
                            <Flex alignItems="center" gap="2" flex="85%">
                              <Image
                                src={activity?.logoImageUrl}
                                boxSize="100px"
                                objectFit="cover"
                                border="1px solid white"
                                borderRadius="16px"
                                w={{ base: "50px", md: "96px" }}
                                h={{ base: "50px", md: "96px" }}
                              />
                              <VStack spacing="0.5">
                                <Heading fontSize="18px">
                                  {activity?.name}
                                </Heading>
                                <Text
                                  color="rgba(57, 63, 89, 1)"
                                  fontSize="14px"
                                >
                                  Angeli Sunstorm
                                </Text>
                              </VStack>
                            </Flex>
                          </Flex>
                        </Td>
                        <Td>{activity?.fromAddress}</Td>
                        <Td>{activity?.toAddress}</Td>
                        <Td>{dayJs(activity?.insertedDate).fromNow()}</Td>
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
          </InfiniteScroll>
        </TableContainer>
      </Container>
    </>
  );
};
export default Categories;
