import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text, VStack } from "@chakra-ui/layout";
import { GenericTable } from ".";
import { dayJs } from "../../utils";

export type tableType = {
  data: any;
  fetchNextPage?: () => void;
  hasNextPage?: boolean;
  isLoading?: boolean | undefined;
};
export const ActivityTable = ({
  data,
  fetchNextPage,
  hasNextPage,
  isLoading,
}: tableType) => {
  const columns = [
    { key: "status", title: "" },
    { key: "item", title: "Item" },
    { key: "from", title: "From" },
    { key: "to", title: "To" },
    { key: "time", title: "Time" },
  ];
  const getActivityStatus = (status: string) => {
    switch (status) {
      case "transfer":
        return (
          <Flex gap="2">
            <i className="icon-transfer" style={{ color: "#6863F3" }}></i>
            <Text fontWeight="700" flex="15%">
              Transfer
            </Text>
          </Flex>
        );
      case "list":
        return (
          <Flex gap="2">
            <i className="icon-list" style={{ color: "#6863F3" }}></i>
            <Text fontWeight="700" flex="15%">
              List
            </Text>
          </Flex>
        );
      case "sale":
        return (
          <Flex gap="2">
            <i className="icon-cart" style={{ color: "#6863F3" }}></i>
            <Text fontWeight="700" flex="15%">
              Sale
            </Text>
          </Flex>
        );
    }
  };
  const tableData =
    data &&
    data?.map((activity: any, index: number) => {
      return {
        id: activity?.id,
        status: getActivityStatus(activity?.activityType.toLowerCase()),
        itme: (
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
              <Heading fontSize="18px">{activity?.name}</Heading>
              <Text color="rgba(57, 63, 89, 1)" fontSize="14px">
                Angeli Sunstorm
              </Text>
            </VStack>
          </Flex>
        ),
        from: activity?.fromAddress?.substring(0, 16) + "...",
        to: activity?.toAddress?.substring(0, 16) + "...",
        time: dayJs(activity?.insertedDate).fromNow(),
      };
    });
  return (
    <GenericTable
      data={tableData}
      columns={columns}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isLoading={isLoading}
    />
  );
};
