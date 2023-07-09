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
            zIndex="1"
            position="relative"
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
              pr={{ base: "0", lg: "15px" ,xl: "30px" }}
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
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
<path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M8.71293 0.5C4.05453 0.5 0.264648 4.28989 0.264648 8.94829C0.264648 13.6067 4.05453 17.3966 8.71293 17.3966C10.7767 17.3966 12.67 16.6527 14.1389 15.4191L19.0033 20.2835C19.1477 20.4279 19.3366 20.5 19.5258 20.5C19.7149 20.5 19.9038 20.4279 20.0482 20.2835C20.3368 19.9951 20.3368 19.5271 20.0482 19.2387L15.1837 14.3742C16.4174 12.9054 17.1612 11.0121 17.1612 8.94829C17.1612 4.28989 13.3713 0.5 8.71293 0.5ZM13.7123 13.801C14.9316 12.5451 15.6834 10.8329 15.6834 8.94829C15.6834 5.10469 12.5563 1.97785 8.71293 1.97785C4.86934 1.97785 1.7425 5.10469 1.7425 8.94829C1.7425 12.7919 4.86934 15.9187 8.71293 15.9187C10.5974 15.9187 12.3096 15.1671 13.5655 13.9478C13.5861 13.9204 13.6089 13.8942 13.6338 13.8692C13.6587 13.8443 13.685 13.8216 13.7123 13.801ZM5.7868 5.05149C5.49836 4.76282 5.03039 4.76282 4.74196 5.05149C3.67102 6.12243 3.14465 7.6143 3.29762 9.14485C3.33578 9.52614 3.65699 9.81036 4.03211 9.81036C4.05676 9.81036 4.0816 9.80911 4.10625 9.80665C4.51242 9.76602 4.80871 9.40368 4.76809 8.99778C4.65922 7.91008 5.03067 6.85247 5.7868 6.09629C6.07547 5.8079 6.07547 5.33989 5.7868 5.05149Z" fill="#6863F3"/>
</svg>
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
              position='relative'
              zIndex='1'
            >
              <HStack
                textTransform="uppercase"
                fontSize={{ base: "15px", xl: "16px" }}
                alignItems={{ base: "flex-start", lg: "center" }}
                flexDirection={{
                  base: "column",
                  sm: "column",
                  lg: "row",
                }}
                w={{ base: "100%", lg: "initial" }}
                spacing={{ base: "8px", lg: "11px", xl: "24px" }}
                p={{ base: "10px", lg: "0" }}
              >
                <Box _hover={{ color: "#6863f3" }}>
                  <Link href="/">Home</Link>
                </Box>
                <Box _hover={{ color: "#6863f3" }}>
                  <Link href="/categories">Explore</Link>
                </Box>

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
                    w="109px"
                    minW="109px"
                    p=" 8px 16px"
                  >
                    <MenuItem
                      as="a"
                      p='8px'
                      href="/collection/state"
                      _hover={{ color: "#6863f3" }}
                    >
                      Ranking
                    </MenuItem>
                    <MenuItem
                      as="a"
                      p='8px'
                      href="/activity"
                      _hover={{ color: "#6863f3" }}
                    >
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
                  fontWeight= '600'
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
                  fontWeight= '600'
                  letterSpacing='0.84px'
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
                    _hover={{ bg: "#6F6BF3", color: "#fff" }}
                    _active={{ bg: "#6F6BF3", color: "#fff" }}
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
