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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  HStack,
  Image,
  useDisclosure,
  Switch,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import Link from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import ConnectionModal from "../../Modals/nftProperties/connectionModal";
import { useWeb3React } from "@web3-react/core";
import { QUERY_KEYS } from "../../hooks/queryKeys";
import { signMessage } from "../../context/signMessage";
import { POST } from "../../hooks/consts";
import { ApiUrl } from "../../apis/apiUrl";
import { useMutation } from "../../hooks/useMutation";
import { useQuery } from "../../hooks/useQuery";
import { setToLocalStorage } from "../../utils";
import { useState } from "react";
import { setCookie } from "typescript-cookie";
import { bg } from "date-fns/locale";

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const {
    isOpen: isConnectionModalOpen,
    onOpen: onConnectionModalOpen,
    onClose: onConnectionModalClose,
  } = useDisclosure();
  const { disconnect, disconnectWalletConnect } = useWeb3Context();

  const { account, provider } = useWeb3React();

  const { mutate } = useMutation<any>({
    method: POST,
    url: ApiUrl?.SAVE_SIGNATURE,
    showSuccessToast: true,
    onSuccess: (data: any) => {
      setToLocalStorage("accessToken", data?.data?.access_token);
      setCookie("accessToken", data?.data?.access_token);
    },
  });

  const signature = async (savedSign: any) => {
    signMessage(provider).then((signature) => {
      if (signature.length == 0) {
        mutate({ walletAddress: account, walletHash: null });
        if (provider?.connection.url == "metamask") {
          disconnect("");
        } else {
          disconnectWalletConnect("");
        }
      } else mutate({ walletAddress: account, walletHash: signature });
    });
  };

  const { data: savedSign } = useQuery<any>({
    queryKey: [QUERY_KEYS.GET_SIGN],
    url: `${ApiUrl?.GET_SIGNATURE}/${account}`,
    showToast: true,
    onSuccess: (data: any) => {
      if (data.status == 220) {
        signature(data);
      } else {
        mutate({ walletAddress: account });
      }
    },
    enabled: account ? true : false,
  });

  return (
    <>
      <Container maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "8xl" }}>
        <Box py="30px" px={{ base: "0", md: "17px", xl: "0" }}>
          <Stack
            direction="row"
            alignItems={{ base: "flex-start", sm: "center", xl: "center" }}
            justifyContent={{ base: "flex-start", xl: "initial" }}
            flexWrap="wrap"
            gap={{ base: "0", md: "initial" }}
          >
            <Box
              pb="8px"
              order={{ base: "1", sm: "1" }}
              marginRight={{ base: "auto", md: "initial" }}
              as={Link}
              href="/"
            >
              <Image
                src="/assets/images/Logo.png"
                alt="logo"
                maxW="138"
                maxH="45px"
              />
            </Box>
            <Box
              order={{ base: "5", sm: "5", md: "6", lg: "2" }}
              w={{ base: "full", lg: "initial" }}
              pl={{ base: "0", lg: "10px", xl: "30px" }}
              pr={{ base: "0", lg: "30px" }}
              pt={{ base: "5px" }}
            >
              <InputGroup
                variant="custom"
                colorScheme="purple"
                w={{ base: "full", md: "full", lg: "200px", xl: "md" }}
                marginBottom={{ base: "3", md: "initial", xl: "initial" }}
              >
                <Input placeholder="Search..." />
                <InputLeftElement>
                  <img src="/assets/images/search-icon.svg" />
                </InputLeftElement>
              </InputGroup>
            </Box>
            <Box
              order={{ base: "4", sm: "4", md: "5", lg: "3" }}
              visibility={{
                base: toggleMenu ? "visible" : "hidden",
                lg: "initial",
              }}
              h={{ base: toggleMenu ? "auto" : "0px", lg: "initial" }}
              display={{ base: toggleMenu ? "block" : "none", lg: "initial" }}
              transform={toggleMenu ? "translateY(5px)" : "translateY(0px)"}
              w={{ base: "100%", lg: "inherit" }}
              bg={{ base: "#ffdafe75", lg: "transparent" }}
              mt={{ base: "5px", lg: "initial" }}
              borderTopLeftRadius={{ base: "16px", lg: "0" }}
              borderTopRightRadius={{ base: "16px", lg: "0" }}
              transition=".5s cubic-bezier(0.64, 0.46, 0.47, 0.87)"
            >
              <HStack
                textTransform="uppercase"
                fontSize={{ base: "15px", xl: "16px" }}
                alignItems={{ base: "initial", lg: "center" }}
                flexDirection={{
                  base: "column",
                  sm: "column",
                  lg: "row",
                }}
                w={{ base: "100%", lg: "initial" }}
                spacing={{ base: "8px", lg: "11px", xl: "24px" }}
                p={{ base: "10px", lg: "0" }}
              >
                <Link href="/">Home</Link>
                <Link href="/categories">Explore</Link>
                <Menu>
                  <MenuButton
                    as={Button}
                    bg="transparent"
                    _active={{ bg: "transparent" }}
                    _focusVisible={{ boxShadow: "transparent" }}
                    p="0"
                    _hover={{ bg: "transparent" }}
                    textTransform="uppercase"
                    fontSize={{ base: "15px", xl: "16px" }}
                    rightIcon={
                      <Box fontSize="8px">
                        <i className="icon-ChevronDown"></i>
                      </Box>
                    }
                  >
                    Stats
                  </MenuButton>
                  <MenuList
                    textTransform="capitalize"
                    w="191px"
                    minW="191px"
                    p="16px 8px"
                  >
                    <MenuItem as="a" href="collection/state">
                      Ranking
                    </MenuItem>
                    <MenuItem as="a" href="/activity">
                      Activity
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
            </Box>

            <Flex
              order={{ base: "6", sm: "6", md: "2", lg: "4" }}
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
                <MenuList w="191px" minW="191px" p="16px 8px">
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
                  mx={{ base: "0", md: "10px", lg: "16px" }}
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
                  mx={{ base: "0", md: "10px", lg: "16px" }}
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
            >
              <IconButton
                mr="0"
                ml="8px"
                colorScheme="purple"
                variant="outline"
                icon={<HamburgerIcon />}
                aria-label="Options"
                onClick={() => {
                  setToggleMenu(!toggleMenu);
                }}
              />
            </Box>
            <Box order={{ base: "2", sm: "2", md: "3", lg: "6" }}>
              <Menu>
                {!account ? null : (
                  <MenuButton
                    fontSize="20px"
                    color="#6F6BF3"
                    bg="#FFFFFF"
                    border="1px solid #6F6BF3"
                    borderRadius="50px"
                    height="40px"
                    w="40px"
                    as={IconButton}
                    icon={<i className="icon-vector"></i>}
                    aria-label="Options"
                  />
                )}

                <MenuList w="191px" minW="191px" h="232px" p="16px 8px">
                  <MenuItem>
                    <Link href="/profile-created">Profile</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/collection/my-collection">My Collection</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/setting">Settings</Link>
                  </MenuItem>
                  <MenuItem>
                    <FormControl
                      m="0!important"
                      w="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <FormLabel
                        fontWeight="normal!important"
                        htmlFor="dark-theme"
                        m="0!important"
                      >
                        Dark Mode
                      </FormLabel>
                      <Switch m="0!important" id="dark-theme" />
                    </FormControl>
                  </MenuItem>

                  <MenuItem
                    onClick={(a) => {
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
