import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text, VStack } from "@chakra-ui/layout";
import { isNumeric } from "@chakra-ui/utils";
import { GenericTable } from ".";
import { ApiUrl } from "../../apis/apiUrl";
import { currencySymbol } from "../../constants";
import { POST } from "../../hooks/consts";
import { QUERY_KEYS } from "../../hooks/queryKeys";
import { useInfiniteQuery } from "../../hooks/useInfiniteQuery";
import { useMutation } from "../../hooks/useMutation";

export const CollectionStatTable = ({ type }: { type: string }) => {
  const {
    data: collectionStats,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useInfiniteQuery<any>({
    queryKey: [QUERY_KEYS.GET_STATS],
    url: ApiUrl.GET_STATS,
  });
  const { mutate } = useMutation<any>({
    method: POST,
    url: ApiUrl.ADD_TO_WATCHLIST,
    showSuccessToast: true,
    token: true,
  });
  const { mutate: removeFromWatchlist } = useMutation<any>({
    method: POST,
    url: ApiUrl.REMOVE_FROM_WATCHLIST,
    showSuccessToast: true,
    token: true,
  });
  const columns = [
    { key: "collection", title: "Collection" },
    { key: "volume", title: "Volume", isNumeric: true },
    { key: "percentageChange", title: "%Change", isNumeric: true },
    { key: "floorPrice", title: "Floor Price", isNumeric: true },
    { key: "Sales", title: "Sales", isNumeric: true },
    { key: "uniqueOwner", title: "% Unique Owners", isNumeric: true },
    { key: "itemlisted", title: "% Items listed", isNumeric: true },
    {
      key: "state_action",
      title: "",
      actions:
        type === "add"
          ? [
              {
                type: "button",
                label: "add to watchlist",
                icon: <i className="icon-eye"></i>,
                onClick: (id: number) => mutate({ collectionId: id }),
              },
            ]
          : [
              {
                type: "menu",
                label: "remove to watchlist",
                icon: <i className="icon-menu"></i>,
                options: [{ label: "Remove From Watchlist", value: 1 }],
                onSelect: (id: number) =>
                  removeFromWatchlist({ collectionId: id }),
              },
            ],
    },
  ];
  const data =
    collectionStats &&
    collectionStats?.map((collectionStat: any, index: number) => {
      return {
        id: collectionStat?.id,
        collection: (
          <Flex gap="2" alignItems="center" mr="48px">
            <Image
              src={collectionStat?.logoImageUrl}
              boxSize="100px"
              objectFit="cover"
              border="1px solid white"
              borderRadius="16px"
              w={{ base: "50px", md: "64px" }}
              h={{ base: "50px", md: "64px" }}
            />
            <VStack spacing="0.5">
              <Heading fontSize="18px">{collectionStat?.name}</Heading>
            </VStack>
          </Flex>
        ),
        volume: `${collectionStat?.volume ?? ""} ${currencySymbol}`,
        percentageChange: (
          <Text
            color={
              collectionStat?.percentageChange < 0
                ? "red"
                : collectionStat?.percentageChange > 0
                ? "green.500"
                : ""
            }
          >
            {`${collectionStat?.percentageChange} %`}
          </Text>
        ),
        floorPrice: (
          <Text>{`${collectionStat?.floorPrice} ${currencySymbol}`}</Text>
        ),
        Sales: <Text>{collectionStat?.sales}</Text>,
        uniqueOwner: <Text>{`${collectionStat?.uniqueOwners}`}</Text>,
        itemlisted: <Text>{`${collectionStat?.uniqueOwners}`}</Text>,
      };
    });
  return (
    <GenericTable
      columns={columns}
      data={data}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isLoading={isLoading}
    />
  );
};
