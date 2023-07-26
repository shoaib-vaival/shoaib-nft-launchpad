import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text, VStack } from "@chakra-ui/layout";
import { GenericTable } from ".";
import fallbackImage from "../../../public/assets/images/fall-back-img.svg";
export const TopOwnerTable = ({ data }: { data: any }) => {

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
          <Flex alignItems="center" gap="24px" flex="85%"  mr={{base:"70px",md:"50px",lg:'0'}}>
            <Image
              src={owner?.userofi?.prleUrl ? `${process.env.NEXT_PUBLIC_IMG_BASE_URL}${owner?.userofi?.prleUrl}` : `/assets/images/fall-back-img.svg` }
              boxSize="100px"
              objectFit={owner?.userofi?.prleUrl ?  'cover' : 'contain'}
              border="1px solid white"
              borderRadius="16px"
              w={{ base: "50px", lg: "56px" }}
              h={{ base: "50px", lg: "56px" }}
              
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
