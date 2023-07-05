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
import { nftType } from "../types";

type nftListProp = {
  data: nftType[] | [];
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
              <Th>ITEM</Th>
              <Th>LAST Transfer</Th>
              <Th>OWNER</Th>
              <Th>TIME</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((nft: any, index: number) => {
              return (
                <Tr key={index}>
                  <Td p={{ base: "12px", md: "17px 25px" }}>
                    <Flex gap="2" alignItems="center" mr="48px">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}${nft?.ipfsImageUrl}`}
                        boxSize="100px"
                        objectFit="cover"
                        border="1px solid white"
                        borderRadius="16px"
                        w={{ base: "50px", md: "96px" }}
                        h={{ base: "50px", md: "96px" }}
                      />
                      <VStack spacing="0.5" alignItems="flex-start">
                        <Heading fontSize="18px">{nft?.name}</Heading>
                        <Text color="rgba(57, 63, 89, 1)" fontSize="14px">
                          {nft?.collection?.name}
                        </Text>
                      </VStack>
                    </Flex>
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }}>
                    {nft?.lastTransfer}
                  </Td>
                  <Td p={{ base: "12px", md: "17px 25px" }}>{nft?.owner}</Td>
                  <Td p={{ base: "12px", md: "17px 25px" }}>3m ago</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListView;
