import {
  Table,
  Tr,
  Td,
  Tbody,
  TableContainer,
  Skeleton,
  Stack,
} from "@chakra-ui/react";

export const ListingTableSkeletonLoader = () => {
  return (
    <TableContainer>
      <Table>
        <Tbody>
          <Tr>
            <Td>
              <Skeleton height="20px" w="80px" />
            </Td>
            <Td>
              <Stack direction="row" alignItems="center">
                <Skeleton
                  w={{ base: "50px", md: "56px" }}
                  h={{ base: "50px", md: "56px" }}
                  borderRadius="16px"
                />
                <Stack direction="column">
                  <Skeleton height="20px" w="150px" />
                </Stack>
              </Stack>
            </Td>
            <Td isNumeric={true}>
              <Stack alignItems="end">
                <Skeleton h="20px" w="150px"></Skeleton>
                <Skeleton h="10px" w="100px" />
              </Stack>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Skeleton height="20px" w="80px" />
            </Td>
            <Td>
              <Stack direction="row" alignItems="center">
                <Skeleton
                  w={{ base: "50px", md: "56px" }}
                  h={{ base: "50px", md: "56px" }}
                  borderRadius="16px"
                />
                <Stack direction="column">
                  <Skeleton height="20px" w="150px" />
                </Stack>
              </Stack>
            </Td>
            <Td isNumeric={true}>
              <Stack alignItems="end">
                <Skeleton h="20px" w="150px"></Skeleton>
                <Skeleton h="10px" w="100px" />
              </Stack>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Skeleton height="20px" w="80px" />
            </Td>
            <Td>
              <Stack direction="row" alignItems="center">
                <Skeleton
                  w={{ base: "50px", md: "56px" }}
                  h={{ base: "50px", md: "56px" }}
                  borderRadius="16px"
                />
                <Stack direction="column">
                  <Skeleton height="20px" w="150px" />
                </Stack>
              </Stack>
            </Td>
            <Td isNumeric={true}>
              <Stack alignItems="end">
                <Skeleton h="20px" w="150px"></Skeleton>
                <Skeleton h="10px" w="100px" />
              </Stack>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Skeleton height="20px" w="80px" />
            </Td>
            <Td>
              <Stack direction="row" alignItems="center">
                <Skeleton
                  w={{ base: "50px", md: "56px" }}
                  h={{ base: "50px", md: "56px" }}
                  borderRadius="16px"
                />
                <Stack direction="column">
                  <Skeleton height="20px" w="150px" />
                </Stack>
              </Stack>
            </Td>
            <Td isNumeric={true}>
              <Stack alignItems="end">
                <Skeleton h="20px" w="150px"></Skeleton>
                <Skeleton h="10px" w="100px" />
              </Stack>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
