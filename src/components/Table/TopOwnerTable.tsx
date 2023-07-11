import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text, VStack } from "@chakra-ui/layout";
import { GenericTable } from ".";

export const TopOwnerTable = ({ data }: { data: any }) => {
  console.log(data, "dada");
  const columns = [
    { key: "item", title: "ITEM" },
    { key: "wallet", title: "WALLET", isNumeric: true },
    { key: "owned", title: "OWNED", isNumeric: true },
    { key: "percentageOwned", title: "% OWNED", isNumeric: true },
  ];
  const tableData =
    data &&
    data?.map((owner: any, index: number) => {
      return {
        item: (
          <Flex alignItems="center" gap="24px" flex="85%"  mr='70px'>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}${owner?.user?.profileUrl}`}
              boxSize="100px"
              objectFit="cover"
              border="1px solid white"
              borderRadius="16px"
              w={{ base: "50px", md: "56px" }}
              h={{ base: "50px", md: "56px" }}
            />
            <VStack spacing="0.5">
              <Heading fontSize="18px">
                {owner?.user?.displayName &&
                  owner?.user?.displayName?.substring(0, 16) + "..."}
              </Heading>
            </VStack>
          </Flex>
        ),
        wallet:
          owner?.user?.walletAddress &&
          owner?.user?.walletAddress.substring(0, 6) +
            "..." +
            owner?.user?.walletAddress.substring(
              owner?.user?.walletAddress.length - 6,
              owner?.user?.walletAddress.length
            ),
        owned: owner?.user?.owned && owner?.user?.owned,
        percentageOwned: (owner?.user?.owned / owner?.totalNft) * 100,
      };
    });
  return (
    <GenericTable data={tableData} columns={columns} variant="borderLess" />
  );
};
