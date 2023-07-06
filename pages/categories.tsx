import {
  Container,
  Image,
  Text,
  Flex,
  Heading,
  Button,
  Box,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { ApiUrl } from "../src/apis/apiUrl";
import CollectionCard from "../src/components/Cards/CollectionCard";
import { QUERY_KEYS } from "../src/hooks/queryKeys";
import { useQuery } from "../src/hooks/useQuery";
import Link from "next/link";
import { useInfiniteQuery } from "../src/hooks/useInfiniteQuery";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "../src/components/Loader";
import { collectionType, nftType } from "../src/types";
import { GridView } from "../src/views/GridView";
import { currencySymbol } from "../src/constants";
import { useRouter } from "next/router";
import { useState } from "react";

const Categories: NextPage = () => {
  const { data: bannerCollection } = useQuery<collectionType>({
    queryKey: [QUERY_KEYS],
    url: ApiUrl.GET_BANNER_COLLECTION,
    token: false,
  });
  const {
    data: allCollections,
    error,
    fetchNextPage,
    status,
    hasNextPage,
    isLoading: isLoadingAllCollections,
  } = useInfiniteQuery<(collectionType & nftType)[]>({
    queryKey: [QUERY_KEYS.GET_ALL_COLLECTIONS],
    url: ApiUrl.GET_ALL_COLLECTIONS,
  });
  const [isVisible, setIsVisible] = useState<boolean>();

  const over = () => {
    setIsVisible(true);
  };
  const out = () => {
    setIsVisible(false);
  };
  return (
    <>
      <Container
        maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "8xl" }}
        mt={{ base: "40px" }}
      >
        <Box px={{ base: "0", sm: "0" }}>
          <Container
            p={{ base: "24px", sm: "24px 40px", md: "48px" }}
            variant="colorful"
            position="relative"
            bgSize="cover"
            bgImage={bannerCollection?.bannerImageUrl}
            backgroundRepeat="no-repeat"
            h="400px"
            bgPos="center"
          >
            <Image
              src={bannerCollection?.logoImageUrl}
              boxSize="100px"
              objectFit="cover"
              mt="75px"
              border="1px solid white"
              borderRadius="16px"
            />
            <Flex
              alignItems={{ base: "baseline", md: "center" }}
              justifyContent={{ base: "flex-start", md: "space-between" }}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box>
                <Text
                  color="white"
                  marginTop="12px"
                  fontSize={{ base: "14px", md: "16px" }}
                >
                  By{" "}
                  {bannerCollection?.user?.userName
                    ? bannerCollection?.user?.userName
                    : bannerCollection?.user?.walletAddress?.slice(0, 5) +
                    "..." +
                    bannerCollection?.user?.walletAddress?.slice(37, 42)}
                </Text>
                <Heading
                  color="white"
                  marginTop="8px"
                  marginBottom="10px"
                  fontSize={{ base: "24px", sm: "28px", lg: "40px" }}
                >
                  {bannerCollection?.name}
                </Heading>
                <Flex gap="6" alignItems="center">
                  <Text color="white" fontSize={{ base: "14px", md: "16px" }}>
                    {bannerCollection?.nftCount ?? 0} Items
                  </Text>
                  <Text color="white" fontSize={{ base: "14px", md: "16px" }}>
                    {bannerCollection?.price ?? 0} {currencySymbol}
                  </Text>
                </Flex>
              </Box>
              <Box maxW='180px'>
                <Button
                  as={Link}
                  href={`collection/${bannerCollection?.id}`}
                  size={{ base: "md", lg: "lg" }}
                  mt="20px"
                  color="purple.500"
                  _hover={{
                    transitionDuration: "0.2s",
                    transitionTimingFunction: "ease-in-out",
                  }}
                  onMouseOver={over}
                  onMouseOut={out}
                >
                  View Collection{" "}
                  <Box
                    ml="5px"
                    color="#6863F3"
                    transform={isVisible ? "translateX(0px)" : "translateX(5px)"}
                    display={isVisible ? "block" : "none"}
                  >
                    <i className="icon-right"></i>
                  </Box>
                </Button>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Container>

      <Container
        maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "8xl" }}
        mt={{ base: "40px", lg: "80px" }}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          px={{ base: "0", sm: "12px" }}
        >
          <Heading fontSize={{ base: "24px", md: "36px", xl: "48px" }}>
            Featured Collections
          </Heading>
        </Flex>
        {
          <GridView
            isLoading={isLoadingAllCollections}
            data={allCollections}
            type="collection"
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
          />
        }
      </Container>
    </>
  );
};
export default Categories;
