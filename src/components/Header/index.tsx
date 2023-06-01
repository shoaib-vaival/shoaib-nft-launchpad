import { ReactNode } from "react";
import { useWeb3Context } from "../../context/Web3Provider";
import {
  Button, Stack, Box, Container, Input, InputGroup, InputLeftElement, Flex, Avatar,
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
  Image

} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from "next/router";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Header = () => {
  const router = useRouter()

  const { account, connect, disconnect } = useWeb3Context()

  return (
    <>
      <Container maxW={{ sm: '4xl', lg: '6xl', xl: '8xl' }}>

        <Box py={30}>
          <Stack direction='row' alignItems={{ base: "flex-start", sm: 'center', xl: 'center' }} justifyContent={{ base: 'flex-start', xl: 'initial' }} flexWrap='wrap' >
            <Box pb="8px" order={{ base: '1', sm: '1', md: '1', xl: '1' }} marginRight={{ base: 'auto', md: 'initial' }}>
              <Image src="/assets/images/Logo.png" alt="logo" maxW="138" maxH="45px" />
            </Box>
            <Box order={{ base: '4', sm: '5', md: '2', xl: '2' }} w={{ base: 'full', sm: 'full', md: 'initial', xl: 'initial' }} pl={{ base: '0', sm: "0", md: '30px' }} pr={{ base: '0', sm: "0", md: '20px' }} pt={{ base: '20px', md: '0', xl: '0' }} >
              <InputGroup variant="custom" colorScheme="purple" w={{ base: 'full', sm: 'full', xl: 'lg' }} marginBottom={{ base: '3', md: 'initial', xl: 'initial' }} >
                <Input placeholder="Search..." />
                <InputLeftElement>
                  <img src="/assets/images/search-icon.svg" />
                </InputLeftElement>
              </InputGroup>
            </Box>
            <Box order={{ base: '6', sm: '6', md: '6', xl: '3' }} display={{ base: 'none', sm: 'none', xl: 'initial' }} >
              <HStack alignItems={{ base: 'initial', xl: 'center' }} flexDirection={{ base: 'column', sm: 'column', md: 'row', xl: 'row' }} spacing={{ xl: '24px', lg: '16px' }} >
                <Link href="#">Home</Link>
                <Link href="#">Explorer</Link>
                <Menu autoSelect={false}>
                  <MenuButton as={Button} variant="link" fontSize='16px' >
                    Stats
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
            </Box>
            <Flex marginLeft={{ base: 'auto', md: 'auto !important', lg: 'auto !important', xl: 'auto !important' }} alignItems="center" justifyContent={{ sm: 'flex-end' }} order={{ base: '5', sm: '2', md: '3', xl: '4' }} w={{ base: 'full', sm: 'xs', md: 'xs', xl: 'initial' }} flexDirection={{ base: 'column', sm: 'row', xl: 'row' }}>
              <Menu autoSelect={false}>
                <MenuButton as={Button} fontSize='16px' ml={{ lg: '30px', xl: '130px' }} variant="primary" w={{ base: 'full', sm: '40%', md: '75%', xl: 'initial' }} size={{ base: 'md', sm: 'sm', xl: "md", }}>
                  Create
                </MenuButton>
                <MenuList>
                  <MenuItem>Create NFT</MenuItem>
                  <MenuItem onClick={() => router.push('/create-collection')}>Create Collection</MenuItem>
                </MenuList>
              </Menu>
              <Button variant="secondary" mx="16px" w={{ base: 'full', sm: '40%', md: '75%', xl: 'initial' }} size={{ base: 'md', sm: 'sm', xl: "md", }} mt={{ base: '10px', sm: '0' }}>Connect Wallet</Button>
            </Flex>
            <Box order={{ base: '3', sm: '3', md: '2', xl: '5' }} display={{ base: 'block', xl: 'none' }}>
              <Menu>
                <MenuButton as={IconButton} mr={{ base: '16px', xl: '16px' }} colorScheme='purple' variant='outline' icon={<HamburgerIcon />} aria-label='Options' />
              </Menu>
            </Box>
            <Box order={{ base: '2', sm: '4', md: '3', xl: '6' }} >
              <Menu>
                <MenuButton as={Avatar} size="sm" icon={<Avatar />} aria-label='Options' />
                <MenuList>
                  <MenuItem>
                    Profile
                  </MenuItem>
                  <MenuItem>
                    My Collection
                  </MenuItem>
                  <MenuItem>
                    Watchlist
                  </MenuItem>
                  <MenuItem>
                    Settings
                  </MenuItem>
                  <MenuItem>
                    Dark Mode
                  </MenuItem>
                  <MenuItem>
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Stack>


        </Box>
      </Container >
    </>
  );
}
