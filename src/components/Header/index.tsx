import { useWeb3Context } from "../../context/Web3Provider";
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
  IconButton,
  HStack,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HamburgerIcon } from "@chakra-ui/icons";
import ConnectionModal from "../../Modals/nftProperties/connectionModal";
// import { getAddChainParameters } from "../../connectors/walletChains";
import { useWeb3React } from "@web3-react/core";

export const Header = () => {
  const {
    isOpen: isConnectionModalOpen,
    onOpen: onConnectionModalOpen,
    onClose: onConnectionModalClose,
  } = useDisclosure();
  const {
    connect,
    disconnect,
    connectWalletConnect,
    walletConnectAccount,
    disconnectWalletConnect,
    chainId,
  } = useWeb3Context();

  const { account, provider } = useWeb3React();

  const router = useRouter();

  // <Button
  //   variant="secondary"
  //   mx="16px"
  //   size="md"
  //   onClick={(a) => {
  //     disconnectWalletConnect();
  //   }}
  // >
  //   Disconnect
  // </Button>
  // <Button
  //   variant="secondary"
  //   mx="16px"
  //   size="md"
  //   onClick={(a) => {
  //     disconnect();
  //   }}
  // >
  //   Disconnect Metamask
  // </Button>

  return (
    <>
      <Container maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "7xl" }}>
        <Box py="30px" px={{ base: "0", sm: "17px" }}>
          <Stack
            direction="row"
            alignItems={{ base: "flex-start", sm: "center", xl: "center" }}
            justifyContent={{ base: "flex-start", xl: "initial" }}
            flexWrap="wrap"
          >
            <Box
              pb="8px"
              order={{ base: "1", sm: "1" }}
              marginRight={{ base: "auto", md: "initial" }}
            >
              <Image
                src="/assets/images/Logo.png"
                alt="logo"
                maxW="138"
                maxH="45px"
              />
            </Box>
            <Box
              order={{ base: "4", sm: "4", md: "5", lg: "2" }}
              w={{ base: "full", lg: "initial" }}
              pl={{ base: "0", lg: "10px", xl: "30px" }}
              pr={{ base: "0", lg: "10px" }}
              pt={{ base: "20px", lg: "0" }}
            >
              <InputGroup
                variant="custom"
                colorScheme="purple"
                w={{ base: "full", md: "full", lg: "200px", xl: "xs" }}
                marginBottom={{ base: "3", md: "initial", xl: "initial" }}
              >
                <Input placeholder="Search..." />
                <InputLeftElement>
                  <img src="/assets/images/search-icon.svg" />
                </InputLeftElement>
              </InputGroup>
            </Box>
            <Box
              order={{ base: "6", sm: "6", md: "6", lg: "3" }}
              display={{ base: "none", lg: "initial" }}
            >
              <HStack
                textTransform="uppercase"
                alignItems={{ base: "initial", xl: "center" }}
                flexDirection={{
                  base: "column",
                  sm: "column",
                  md: "row",
                  xl: "row",
                }}
                spacing={{ xl: "24px", lg: "16px" }}
              >
                <Link href="/">Home</Link>
                <Link href="/categories">Explorer</Link>
                <Link href="#">Activity</Link>
              </HStack>
            </Box>

            <Flex
              order={{ base: "5", sm: "5", md: "2", lg: "4" }}
              marginLeft={{ base: "auto", md: "auto !important" }}
              alignItems="center"
              justifyContent={{ sm: "flex-end" }}
              w={{ base: "full", md: "xs", xl: "initial" }}
              flexDirection={{ base: "column", sm: "row" }}
            >
              <Menu autoSelect={false}>
                <ConnectionModal
                  isOpen={isConnectionModalOpen}
                  onOpen={onConnectionModalOpen}
                  onClose={onConnectionModalClose}
                />
                {!account ? null : (
                  <MenuButton
                    as={Button}
                    textTransform="uppercase"
                    fontSize="16px"
                    ml={{ base: "0", md: "30px", lg: "0" }}
                    mr={{ base: "0", sm: "25px", md: "0" }}
                    variant="primary"
                    w={{ base: "full", sm: "50%", md: "75%", xl: "initial" }}
                    size="md"
                  >
                    Create
                  </MenuButton>
                )}
                <MenuList>
                  <MenuItem>
                    <Link href="/nft/create">Create NFT</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/collection/create">Create Collection</Link>
                  </MenuItem>
                </MenuList>
              </Menu>

              {!account ? (
                <Button
                  variant="secondary"
                  textTransform="uppercase"
                  mx={{ base: "0", md: "16px" }}
                  fontSize="14px"
                  w={{ base: "full", sm: "50%", md: "100%", xl: "initial" }}
                  size="md"
                  mt={{ base: "10px", sm: "0" }}
                  onClick={onConnectionModalOpen}
                >
                  Connect Wallet
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  textTransform="uppercase"
                  disabled={true}
                  mx={{ base: "0", md: "16px" }}
                  fontSize="14px"
                  w={{ base: "full", sm: "50%", md: "100%", xl: "initial" }}
                  size="md"
                  mt={{ base: "10px", sm: "0" }}
                >
                  {account?.slice(0, 5) + "..." + account?.slice(37, 42)}
                </Button>
              )}
            </Flex>
            <Box
              order={{ base: "3", sm: "3", md: "4", lg: "5" }}
              display={{ base: "block", lg: "none" }}
              pl="16px"
            >
              <Menu>
                <MenuButton
                  as={IconButton}
                  mr={{ base: "16px", xl: "16px" }}
                  colorScheme="purple"
                  variant="outline"
                  icon={<HamburgerIcon />}
                  aria-label="Options"
                />
              </Menu>
            </Box>
            <Box order={{ base: "2", sm: "2", md: "3", lg: "6" }}>
              <Menu>
                {!account ? null : (
                  <MenuButton
                    as={Avatar}
                    size="sm"
                    icon={<Avatar />}
                    aria-label="Options"
                  />
                )}
                <MenuList>
                  <MenuItem>
                    <Link href="/profile-created">Profile</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/collection/my-collection">My Collection</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/setting">Settings</Link>
                  </MenuItem>
                  <MenuItem>Dark Mode</MenuItem>
                  <MenuItem
                    onClick={(a) => {
                      console.log("PROVIDER", provider?.connection.url);
                      if (provider?.connection.url == "metamask") {
                        disconnect("");
                      } else {
                        disconnectWalletConnect("");
                      }
                    }}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Stack>
        </Box>
      </Container>
    </>
  );
};
