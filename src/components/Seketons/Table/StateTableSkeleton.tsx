import {
  Table,
  Tr,
  Td,
  Tbody,
  TableContainer,
  Skeleton,
  Stack,
} from "@chakra-ui/react";

export const StateTableSkeletonLoader = () => {
  return (
    <TableContainer>
      <Table>
        <Tbody>
          <Tr>
            <Td>
              <Stack direction="row" alignItems="center">
                <Skeleton
                  w={{ base: "50px", md: "64px" }}
                  h={{ base: "50px", md: "64px" }}
                  borderRadius="16px"
                />
                <Skeleton height="20px" w="150px" />
              </Stack>
            </Td>
            <Td>
              <Skeleton h="20px" w="150px"></Skeleton>
            </Td>
            <Td>
              <Skeleton h="20px" w="150px"></Skeleton>
            </Td>
            <Td>
              <Skeleton h="20px" w="150px"></Skeleton>
            </Td>
            <Td>
              <Stack direction="column" alignItems="end">
                <Skeleton h="20px" w="150px"></Skeleton>
                <Skeleton h="10px" w="100px"></Skeleton>
              </Stack>
            </Td>
            <Td>
              <Stack direction="column" alignItems="end">
                <Skeleton h="20px" w="150px"></Skeleton>
                <Skeleton h="10px" w="100px"></Skeleton>
              </Stack>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Stack direction="row" alignItems="center">
                <Skeleton
                  w={{ base: "50px", md: "64px" }}
                  h={{ base: "50px", md: "64px" }}
                  borderRadius="16px"
                />
                <Skeleton height="20px" w="150px" />
              </Stack>
            </Td>
            <Td>
              <Skeleton h="20px" w="150px"></Skeleton>
            </Td>
            <Td>
              <Skeleton h="20px" w="150px"></Skeleton>
            </Td>
            <Td>
              <Skeleton h="20px" w="150px"></Skeleton>
            </Td>
            <Td>
              <Stack direction="column" alignItems="end">
                <Skeleton h="20px" w="150px"></Skeleton>
                <Skeleton h="10px" w="100px"></Skeleton>
              </Stack>
            </Td>
            <Td>
              <Stack direction="column" alignItems="end">
                <Skeleton h="20px" w="150px"></Skeleton>
                <Skeleton h="10px" w="100px"></Skeleton>
              </Stack>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Stack direction="row" alignItems="center">
                <Skeleton
                  w={{ base: "50px", md: "64px" }}
                  h={{ base: "50px", md: "64px" }}
                  borderRadius="16px"
                />
                <Skeleton height="20px" w="150px" />
              </Stack>
            </Td>
            <Td>
              <Skeleton h="20px" w="150px"></Skeleton>
            </Td>
            <Td>
              <Skeleton h="20px" w="150px"></Skeleton>
            </Td>
            <Td>
              <Skeleton h="20px" w="150px"></Skeleton>
            </Td>
            <Td>
              <Stack direction="column" alignItems="end">
                <Skeleton h="20px" w="150px"></Skeleton>
                <Skeleton h="10px" w="100px"></Skeleton>
              </Stack>
            </Td>
            <Td>
              <Stack direction="column" alignItems="end">
                <Skeleton h="20px" w="150px"></Skeleton>
                <Skeleton h="10px" w="100px"></Skeleton>
              </Stack>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Stack direction="row" alignItems="center">
                <Skeleton
                  w={{ base: "50px", md: "64px" }}
                  h={{ base: "50px", md: "64px" }}
                  borderRadius="16px"
                />
                <Skeleton height="20px" w="150px" />
              </Stack>
            </Td>
            <Td>
              <Skeleton h="20px" w="150px"></Skeleton>
            </Td>
            <Td>
              <Skeleton h="20px" w="150px"></Skeleton>
            </Td>
            <Td>
              <Skeleton h="20px" w="150px"></Skeleton>
            </Td>
            <Td>
              <Stack direction="column" alignItems="end">
                <Skeleton h="20px" w="150px"></Skeleton>
                <Skeleton h="10px" w="100px"></Skeleton>
              </Stack>
            </Td>
            <Td>
              <Stack direction="column" alignItems="end">
                <Skeleton h="20px" w="150px"></Skeleton>
                <Skeleton h="10px" w="100px"></Skeleton>
              </Stack>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
