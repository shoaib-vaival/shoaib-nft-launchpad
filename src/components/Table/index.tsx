import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  IconButton,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "../Loader";

interface Action {
  type: string;
  label: string;
  icon?: React.ReactElement | JSX.Element;
  onClick?: (id: number) => void;
  onChange?: (id: number, checked: boolean) => void;
  options?: { label: string; value: any }[];
  onSelect?: (id: number, value: any) => void;
}

interface Column {
  key: string;
  title: string;
  isNumeric?: boolean;
  actions?: Action[];
}

interface Item {
  id: number;
  [key: string]: any;
}

interface GenericTableProps {
  data: Item[];
  columns: Column[];
  fetchNextPage?: () => void;
  hasNextPage?: boolean;
  isLoading?: boolean | undefined;
}

export const GenericTable: React.FC<GenericTableProps> = ({
  data,
  columns,
  fetchNextPage,
  hasNextPage,
  isLoading,
}) => {
  return (
    <InfiniteScroll
      dataLength={data ? data.length : 0}
      next={() => fetchNextPage && fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={
        <Flex
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Loader />
        </Flex>
      }
    >
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {columns.map((column) => (
                <Th key={column.key}>{column.title}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {isLoading && (
              <Tr>
                <Td colSpan={columns?.length}>
                  <Flex
                    width="100%"
                    height="100%"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Loader />
                  </Flex>
                </Td>
              </Tr>
            )}
            {data && (!isLoading && data?.length) <= 0 && (
              <Tr>
                <Td colSpan={5}>
                  <Flex
                    width="100%"
                    height="100%"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Heading>Record Not Found</Heading>
                  </Flex>
                </Td>
              </Tr>
            )}
            {data &&
              data?.map((item) => (
                <Tr key={item.id}>
                  {columns.map((column) => (
                    <Td
                      key={`${item.id}-${column.key}`}
                      isNumeric={column?.isNumeric}
                    >
                      {column.actions
                        ? column.actions.map((action) => {
                            switch (action.type) {
                              case "button":
                                return (
                                  <IconButton
                                    key={action.label}
                                    aria-label={action.label}
                                    icon={action.icon}
                                    bg="transparent"
                                    textAlign="center"
                                    _hover={{ bg: "transparent" }}
                                    onClick={() =>
                                      action.onClick && action.onClick(item.id)
                                    }
                                    mr={2}
                                  />
                                );
                              case "checkbox":
                                return (
                                  <Checkbox
                                    key={action.label}
                                    defaultChecked={item[column.key]}
                                    onChange={(e) =>
                                      action.onChange &&
                                      action.onChange(item.id, e.target.checked)
                                    }
                                  >
                                    {action.label}
                                  </Checkbox>
                                );
                              case "menu":
                                return (
                                  <Menu key={action.label}>
                                    <MenuButton
                                      as={IconButton}
                                      aria-label={action.label}
                                      bg="transparent"
                                      textAlign="center"
                                      _hover={{ bg: "transparent" }}
                                      icon={action.icon}
                                      mr={2}
                                    />
                                    <MenuList>
                                      {action.options &&
                                        action.options.map((option) => (
                                          <MenuItem
                                            key={option.value}
                                            onClick={() =>
                                              action.onSelect &&
                                              action.onSelect(
                                                item.id,
                                                option.value
                                              )
                                            }
                                          >
                                            {option.label}
                                          </MenuItem>
                                        ))}
                                    </MenuList>
                                  </Menu>
                                );
                              default:
                                return null;
                            }
                          })
                        : item[column.key]}
                    </Td>
                  ))}
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </InfiniteScroll>
  );
};
