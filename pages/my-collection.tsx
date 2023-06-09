import type { NextPage } from "next";
import { Header } from "../src/components/Header";
import CollectionCard from "../src/components/Cards/CollectionCard";
import { Box, Container, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useQuery } from "../src/hooks/useQuery";
import { Loader } from "../src/components/Loader";
import { useInfiniteQuery } from "../src/hooks/useInfiniteQuery";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";

const myCollection: NextPage = (props) => {
  const { data, error, fetchNextPage, status, hasNextPage, isLoading } =
    useInfiniteQuery<any>({
      queryKey: ["get-collection"],
      url: "collection/getCollectionsByWalletAddress/0x0000",
    });
  console.log("data", data, error);
  return (
    <div>
      <Box>
        <Container maxW={{ sm: "4xl", lg: "6xl", xl: "8xl" }}>
          <Box pt="30px" pb="40px">
            <Flex
              justifyContent="space-between"
              alignItems="center"
              textAlign={{ base: "center", md: "initial" }}
              flexDirection={{ base: "column", md: "row" }}
            >
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
                  My Collections
                </Heading>
                <Text fontSize={{ base: "18px", md: "24px" }}>
                  Create, curate, and manage collections of unique NFTs to share
                  and sell.
                </Text>
              </Box>
              <Box>
                <Button
                  variant="primary"
                  textTransform="uppercase"
                  fontSize="14px"
                  mt={{ base: "30px", lg: "0" }}
                >
                  Create Collection
                </Button>
              </Box>
            </Flex>
          </Box>
        </Container>
        <Container
          maxW={{ sm: "4xl", lg: "6xl", xl: "8xl" }}
          pb={{ xl: "100px", md: "50px" }}
        >
          <Box>
            <InfiniteScroll
             dataLength={data ? data.length : 0}
             next={() => fetchNextPage()}
             hasMore={!!hasNextPage}
             loader={<Flex width="100%" height="100%" justifyContent='center' alignItems="center"><Loader/></Flex>}
            >
            <Flex direction={['column', 'row']}  flexWrap={{base:'nowrap',sm:'wrap',md:'wrap',lg:'wrap',xl:'wrap'}}>
              {isLoading && data === undefined?<Flex width="100%" height="100%" justifyContent='center' alignItems="center"><Loader/></Flex>:
              data?.map((nftCollection:any, index: number)=>{
                  return (
                     <Box w={{ xl: '25%', md: '50%',sm:'100%' }} display='initial' key={index}>
                       <CollectionCard key={index} type="withBody" logoImage = {nftCollection.logoImageUrl} featureImage = {nftCollection.bannerImageUrl} name= {nftCollection.name} volume='-.-' price='-.-' nftCollectionId={nftCollection?._id}  />
                    </Box>
                  )
                })
              }
              <Loader />
                </Flex>
              <Flex
                direction={["column", "row"]}
                flexWrap={{
                  base: "nowrap",
                  sm: "wrap",
                  md: "wrap",
                  lg: "wrap",
                  xl: "wrap",
                }}
              >
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
                  data?.map((nftCollection: any, index: number) => {
                    return (
                      <Box
                        w={{ xl: "25%", md: "50%", sm: "100%" }}
                        key={index}
                        display="initial"
                      >
                        <CollectionCard
                          key={index}
                          type="withBody"
                          logoImage={nftCollection.logoImageUrl}
                          featureImage={nftCollection.bannerImageUrl}
                          name={nftCollection.name}
                          volume="-.-"
                          price="-.-"
                          nftCollectionId={nftCollection?._id}
                        />
                      </Box>
                    );
                  })
                )}
              </Flex>
            </InfiniteScroll>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default myCollection;
