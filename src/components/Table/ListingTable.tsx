import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text, VStack } from "@chakra-ui/layout";
import { GenericTable } from ".";
import { currencySymbol } from "../../constants";

export const ListingTable = ({ data }: { data: any }) => {
  const columns = [
    { key: "nft", title: "" },
    { key: "price", title: "", isNumeric: true },
  ];
  const tableData =
    data &&
    data?.map((nft: any, index: number) => {
      return {
        nft: (
          <Flex alignItems="center" gap="24px" flex="85%" mr='70px'>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}${nft?.ipfsImageUrl}`}
              boxSize="100px"
              objectFit="cover"
              border="1px solid white"
              borderRadius="16px"
              w={{ base: "50px", md: "56px" }}
              h={{ base: "50px", md: "56px" }}
            />
            <VStack spacing="0.5" alignItems="flex-start">
              <Heading fontSize="18px">
                {nft?.name && nft?.name.length > 16
                  ? nft?.name?.substring(0, 16) + "..."
                  : nft?.name}
              </Heading>
              <Text color="rgba(57, 63, 89, 1)" fontSize="14px">
                Angeli Sunstorm
              </Text>
            </VStack>
          </Flex>
        ),
        price: (
          <VStack spacing="0.5" alignItems="flex-end">
            <Text color="#393F59" fontSize="16px">
              {nft?.price + `${currencySymbol}`}
            </Text>
            <Text color="#393F59" fontSize="14px">
              {nft?.floor_price && nft?.floor_price}
            </Text>
          </VStack>
        ),
      };
    });
  return (
    <GenericTable data={tableData} columns={columns} variant="borderLess" />
  );
};
