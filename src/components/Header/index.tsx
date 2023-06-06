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
  IconButton,
  HStack,
  Image,
  useDisclosure

} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { HamburgerIcon } from '@chakra-ui/icons';
import ConnectionModal from '../../Modals/nftProperties/connectionModal'
import { getAddChainParameters } from "../../connectors/walletChains";
import { useWeb3React } from "@web3-react/core";


export const Header = () => {
  const { isOpen:isConnectionModalOpen, onOpen:onConnectionModalOpen, onClose:onConnectionModalClose } = useDisclosure()
  const {
    connect,
    disconnect,
    connectWalletConnect,
    walletConnectAccount,
    disconnectWalletConnect,
    chainId,
  } = useWeb3Context();
  
  const { active, account } = useWeb3React();

  const router = useRouter()

  return (
    <>
      <Container maxW={{ md: '2xl', lg: '5xl', xl: '8xl' }}>

        <Box py={30}>
          <Stack direction='row' alignItems={{ base: 'flex-start', sm: 'center', xl: 'center' }} justifyContent={{ base: 'flex-start', xl: 'initial' }} flexWrap='wrap' >
            <Box pb='8px' order={{ base: '1', sm: '1' }} marginRight={{ base: 'auto', md: 'initial' }}>
              <Image src='/assets/images/Logo.png' alt='logo' maxW='138' maxH='45px' />
            </Box>
            <Box order={{ base: '4', sm: '4', md: '5', lg: '2' }} w={{ base: 'full', lg: 'initial' }} pl={{ base: '0', lg: '10px', xl: '30px' }} pr={{ base: '0',lg: '20px' }} pt={{ base: '20px', lg: '0' }} >
              <InputGroup variant='custom' colorScheme='purple' w={{ base: 'full', md:'full',lg: '200px',xl:'md' }} marginBottom={{ base: '3', md: 'initial', xl: 'initial' }} >
                <Input placeholder='Search...' />
                <InputLeftElement>
                  <img src='/assets/images/search-icon.svg' />
                </InputLeftElement>
              </InputGroup>
            </Box>
            <Box order={{ base: '6', sm: '6', md: '6', lg: '3' }} display={{ base: 'none', lg: 'initial' }} >
              <HStack textTransform='uppercase' alignItems={{ base: 'initial', xl: 'center' }} flexDirection={{ base: 'column', sm: 'column', md: 'row', xl: 'row' }} spacing={{ xl: '24px', lg: '16px' }} >
                <Link href='#'>Home</Link>
                <Link href='#'>Explorer</Link>
                <Menu autoSelect={false}>
                  <MenuButton as={Button} textTransform='uppercase' variant='link' fontSize='17px' color='#0D0D0D' >
                    Stats
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
            </Box>
            <Flex order={{ base: '5', sm: '5', md: '2', lg: '4' }}  marginLeft={{ base: 'auto', md: 'auto !important' }} alignItems='center' justifyContent={{ sm: 'flex-end' }} w={{ base: 'full', md: 'xs', xl: 'initial' }} flexDirection={{ base: 'column', sm: 'row' }}>
              <Menu autoSelect={false}>
              <ConnectionModal isOpen={isConnectionModalOpen} onOpen={onConnectionModalOpen} onClose={onConnectionModalClose}/>
                <MenuButton as={Button}  onClick={onConnectionModalOpen} textTransform='uppercase' fontSize='16px' ml={{ base:'0', md:'30px',lg:'0' }} mr={{base:'0',sm:'25px',md:'0'}} variant='primary' w={{ base: 'full', sm: '50%', md: '75%', xl: 'initial' }} size= 'md'>
                  Create
                </MenuButton>
                <MenuList>
                  <MenuItem>Create NFT</MenuItem>
                  <MenuItem onClick={() => router.push('/create-collection')}>Create Collection</MenuItem>
                </MenuList>
              </Menu>
              <Button variant='secondary' textTransform='uppercase' mx={{base:'0',md:'16px'}} fontSize='14px' w={{ base: 'full', sm: '50%', md: '100%', xl: 'initial' }} size='md' mt={{ base: '10px', sm: '0' }}>Connect Wallet</Button>
            </Flex>
            <Box order={{ base: '3', sm: '3', md: '4', lg: '5' }} display={{ base: 'block', lg: 'none' }} pl='16px'>
              <Menu>
                <MenuButton as={IconButton} mr={{ base: '16px', xl: '16px' }} colorScheme='purple' variant='outline' icon={<HamburgerIcon />} aria-label='Options' />
              </Menu>
            </Box>
            <Box order={{ base: '2', sm: '2', md: '3', lg: '6' }} >
              <Menu>
                <MenuButton as={Avatar} size='sm' icon={<Avatar />} aria-label='Options' />
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
      </Container>
    </>
  );
};
