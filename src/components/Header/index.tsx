import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  MenuGroup,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Image from 'next/image';
import { SearchBar } from '../Searchbar'

const Links = ["Home", "Explore"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
          <Image src="/favicon.svg" alt="My Image" width={78} height={40} />
          <SearchBar />
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              className="headerStyle"
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <Menu>
                <MenuButton 
                  className="headerStyle"
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <NavLink>Stats</NavLink>
                </MenuButton>
                <MenuList>
                  <MenuItem>Ranking</MenuItem>
                  <MenuItem>Activity</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
              <Menu>
                <MenuButton 
                colorScheme="blue"
                mr="4"
                  as={Button}
                  cursor={"pointer"}
                  minW={0}
                >
                  Create
                </MenuButton>
                <MenuList>
                  <MenuItem>Create NFT</MenuItem>
                  <MenuItem>Create Collection</MenuItem>
                </MenuList>
              </Menu>
              <Button mr="4">Connect Wallet</Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>My Collection</MenuItem>
                <MenuItem>WatchList</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Darkmode</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}
