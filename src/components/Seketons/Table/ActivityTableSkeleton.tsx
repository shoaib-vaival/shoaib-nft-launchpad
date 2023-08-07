import {
  Table,
  Tr,
  Td,
  Tbody,
  TableContainer,
  Skeleton,
  Stack,
} from "@chakra-ui/react";

export const ActivityTableSkeletonLoader = () => {
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
                  w={{ base: "50px", md: "96px" }}
                  h={{ base: "50px", md: "96px" }}
                  borderRadius="16px"
                />
                <Stack direction="column">
                  <Skeleton height="20px" w="290px" />
                  <Skeleton height="10px" w="100px" />
                </Stack>
              </Stack>
            </Td>
            <Td isNumeric={true}>
              <Stack alignItems="end">
                <Skeleton h="20px" w="150px"></Skeleton>
              </Stack>
            </Td>
            <Td isNumeric={true}>
              <Stack alignItems="end">
                <Skeleton h="20px" w="150px"></Skeleton>
              </Stack>
            </Td>
            <Td isNumeric={true}>
              <Stack alignItems="end">
                <Skeleton h="20px" w="130px"></Skeleton>
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
                  w={{ base: "50px", md: "96px" }}
                  h={{ base: "50px", md: "96px" }}
                  borderRadius="16px"
                />
                <Stack direction="column">
                  <Skeleton height="20px" w="290px" />
                  <Skeleton height="10px" w="100px" />
                </Stack>
              </Stack>
            </Td>
            <Td isNumeric={true}>
              <Stack alignItems="end">
                <Skeleton h="20px" w="150px"></Skeleton>
              </Stack>
            </Td>
            <Td isNumeric={true}>
              <Stack alignItems="end">
                <Skeleton h="20px" w="150px"></Skeleton>
              </Stack>
            </Td>
            <Td isNumeric={true}>
              <Stack alignItems="end">
                <Skeleton h="20px" w="130px"></Skeleton>
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
                  w={{ base: "50px", md: "96px" }}
                  h={{ base: "50px", md: "96px" }}
                  borderRadius="16px"
                />
                <Stack direction="column">
                  <Skeleton height="20px" w="290px" />
                  <Skeleton height="10px" w="100px" />
                </Stack>
              </Stack>
            </Td>
            <Td isNumeric={true}>
              <Stack alignItems="end">
                <Skeleton h="20px" w="150px"></Skeleton>
              </Stack>
            </Td>
            <Td isNumeric={true}>
              <Stack alignItems="end">
                <Skeleton h="20px" w="150px"></Skeleton>
              </Stack>
            </Td>
            <Td isNumeric={true}>
              <Stack alignItems="end">
                <Skeleton h="20px" w="130px"></Skeleton>
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
                  w={{ base: "50px", md: "96px" }}
                  h={{ base: "50px", md: "96px" }}
                  borderRadius="16px"
                />
                <Stack direction="column">
                  <Skeleton height="20px" w="290px" />
                  <Skeleton height="10px" w="100px" />
                </Stack>
              </Stack>
            </Td>
            <Td isNumeric={true}>
              <Stack alignItems="end">
                <Skeleton h="20px" w="150px"></Skeleton>
              </Stack>
            </Td>
            <Td isNumeric={true}>
              <Stack alignItems="end">
                <Skeleton h="20px" w="150px"></Skeleton>
              </Stack>
            </Td>
            <Td isNumeric={true}>
              <Stack alignItems="end">
                <Skeleton h="20px" w="130px"></Skeleton>
              </Stack>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
