import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text, VStack } from "@chakra-ui/layout";
import { GenericTable } from ".";
import { currencySymbol } from "../../constants";

export const TopTenTable = ({ data }: { data: any }) => {
  const columns = [
    { key: "collection", title: "Collection" },
    { key: "floorPrice", title: "Floor Price", isNumeric: true },
    { key: "volume", title: "Volume", isNumeric: true },
  ];
  const tableData =
    data &&
    data?.map((collection: any, index: number) => {
      return {
        collection: (
          <Flex alignItems="center" gap="24px" flex="85%">
            <Image
              src={collection?.logoImageUrl}
              boxSize="100px"
              objectFit="cover"
              border="1px solid white"
              borderRadius="16px"
              w={{ base: "50px", md: "96px" }}
              h={{ base: "50px", md: "96px" }}
            />
            <VStack spacing="0.5">
              <Heading fontSize="18px">
                {collection?.name && collection?.name?.substring(0, 16) + "..."}
              </Heading>
            </VStack>
          </Flex>
        ),
        floorPrice: collection?.floor_price + `${currencySymbol}`,
        volume: collection?.volume + `${currencySymbol}`,
      };
    });
  return (
    <GenericTable data={tableData} columns={columns} variant="borderLess" />
  );
};
