import { ReactNode } from "react";
import { useWeb3Context } from "../../context/Web3Provider";
import { useEffect, useState } from "react";
import {
  Button,
  Stack,
  Box,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  HStack,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { getAddChainParameters } from "../../connectors/walletChains";
import { useWeb3React } from "@web3-react/core";

export const Header = () => {
  const {
    connect,
    disconnect,
    connectWalletConnect,
    walletConnectAccount,
    disconnectWalletConnect,
    chainId,
  } = useWeb3Context();

  const { active, account } = useWeb3React();

  return (
    <>
      <Container maxW={{ sm: "4xl", md: "4xl", xl: "8xl" }}>
        <Box py={30}>
          <Stack direction="row" alignItems="center" justifyContent="center">
            <Box pt="8px" pb="8px">
              <Image
                src="/assets/images/Logo.png"
                alt="logo"
                maxW="138"
                maxH="45px"
              />
            </Box>
            <Box pl="30px" pr="20px" order={{ md: "6", lg: "0" }}>
              <InputGroup
                variant="custom"
                colorScheme="purple"
                w={{ xl: "md", lg: "2xs", sm: "3xs" }}
              >
                <Input placeholder="Search..." />
                <InputLeftElement>
                  <img src="/assets/images/search-icon.svg" />
                </InputLeftElement>
              </InputGroup>
            </Box>
            <Box display={{ md: "none", xl: "block" }}>
              <HStack spacing={{ xl: "24px", lg: "16px" }}>
                <Link href="#">Home</Link>
                <Link href="#">Explorer</Link>
                <Menu autoSelect={false}>
                  <MenuButton as={Button} variant="link" fontSize="16px">
                    Stats
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
            </Box>
            <Flex alignItems="center">
              {/* <Button variant="primary" mr="16px" size="md">Create</Button> */}
              <Menu autoSelect={false} ml={{ lg: "30px", xl: "100px" }}>
                <MenuButton
                  as={Button}
                  fontSize="16px"
                  ml={{ lg: "30px", xl: "130px" }}
                  variant="primary"
                >
                  Create
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>

              <Button
                variant="secondary"
                mx="16px"
                size="md"
                onClick={async (a) => {
                  try {
                    await connectWalletConnect();
                    // chainId != "80001" ? getAddChainParameters(80001) : null;
                  } catch (error) {
                    console.log("Try connecting again: ", error);
                  }
                }}
              >
                Connect Wallet
              </Button>
              <Button
                variant="secondary"
                mx="16px"
                size="md"
                onClick={(a) => {
                  try {
                    connect();
                    chainId != "80001" ? getAddChainParameters(80001) : null;
                  } catch {
                    console.log("Try connecting again");
                  }
                }}
              >
                Connect Metamask
              </Button>
              <Button
                variant="secondary"
                mx="16px"
                size="md"
                onClick={(a) => {
                  disconnectWalletConnect();
                }}
              >
                Disconnect
              </Button>
              <Button
                variant="secondary"
                mx="16px"
                size="md"
                onClick={(a) => {
                  disconnect();
                }}
              >
                Disconnect Metamask
              </Button>
              <div>{account}</div>
              <Avatar size="sm" />
            </Flex>
            <Box display={{ md: "block", xl: "none" }}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  variant="outline"
                />
                <MenuList>
                  <MenuItem command="⌘T">New Tab</MenuItem>
                  <MenuItem command="⌘N">New Window</MenuItem>
                  <MenuItem command="⌘⇧N">Open Closed Tab</MenuItem>
                  <MenuItem command="⌘O">Open File...</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Stack>
        </Box>
      </Container>
    </>
  );
};
