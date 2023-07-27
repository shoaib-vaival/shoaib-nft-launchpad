import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text, VStack } from "@chakra-ui/layout";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Box,
} from "@chakra-ui/react";
import { collectionType, nftType } from "../types";
import { addEllipsisInMiddle } from "../utils";
import NextImage from "next/image";

type dataType = collectionType & nftType;
type nftListProp = {
  data: dataType[] | undefined;
  fetchNextPage: () => void;
  hasNextPage: boolean;
};
const ListView = ({ data, fetchNextPage, hasNextPage }: nftListProp) => {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th pl="30px">ITEM</Th>
              <Th>LAST Transfer</Th>
              <Th>OWNER</Th>
              <Th>TIME</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data && data?.length <= 0 ? (
              <Tr>
                <Td colSpan={4}>
                  <Flex
                    width="100%"
                    height="100%"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Heading p="75px 0" fontSize="20px" color="#0d0d0d">
                      Record Not Found
                    </Heading>
                  </Flex>
                </Td>
              </Tr>
            ) : (
              data?.map((nft: any, index: number) => {
                return (
                  <Tr key={index}>
                    <Td p={{ base: "12px", md: "17px 25px" }}>
                      <Flex gap="2" alignItems="center" mr="48px">
                        <Box
                          w={{ base: "50px", md: "96px" }}
                          h={{ base: "50px", md: "96px" }}
                          boxSize="100px"
                          position="relative"
                        >
                          <NextImage
                            src={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}${nft?.ipfsImageUrl}`}
                            layout="fill"
                            alt="nft image"
                            objectFit="cover"
                            loading="lazy"
                            style={{
                              border: "1px solid white",
                              borderRadius: "16px",
                            }}
                          />
                        </Box>
                        <VStack spacing="0.5" alignItems="flex-start">
                          <Heading fontSize="18px">{nft?.name}</Heading>
                          <Text color="rgba(57, 63, 89, 1)" fontSize="14px">
                            {nft?.collection?.name}
                          </Text>
                        </VStack>
                      </Flex>
                    </Td>
                    <Td p={{ base: "12px", md: "17px 25px" }}>
                      {nft?.lastTransfer ? nft?.lastTransfer : "#"}
                    </Td>
                    <Td p={{ base: "12px", md: "17px 25px" }}>
                      {addEllipsisInMiddle(nft?.owner, 16)}
                    </Td>
                    <Td p={{ base: "12px", md: "17px 25px" }}>3m ago</Td>
                  </Tr>
                );
              })
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListView;
