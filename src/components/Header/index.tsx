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

export const Header = () => {

  const { account, connect, disconnect } = useWeb3Context()

  return (
    <>
      <Container maxW={{ md: '4xl', xl: '8xl' }}>

        <Box padding={30}>
          <Stack direction="row" alignItems="center">
            <Box pt="8px" pb="8px">
              <Image src="/assets/images/Logo.png" alt="logo" maxW="138" maxH="45px" />
            </Box>
            <Box pl="30px" pr="20px" order={{md:'6',lg:'0'}}>
              <InputGroup variant="custom" colorScheme="purple" w={{ xl: "md", lg: '2xs', sm: '3xs' }}>
                <Input placeholder="Search..." />
                <InputLeftElement>
                  <img src="/assets/images/search-icon.svg" />
                </InputLeftElement>
              </InputGroup>
            </Box>
            <Box display={{ md: "none", xl: "block" }} >
              <HStack spacing={{ xl: '24px', lg: '16px' }} >
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
            <Flex alignItems="center">
              {/* <Button variant="primary" mr="16px" size="md">Create</Button> */}
              <Menu autoSelect={false} ml={{ lg: '30px', xl: '100px' }}>
                <MenuButton as={Button} fontSize='16px' ml={{ lg: '30px', xl: '50px' }} variant="primary">
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
              <Button variant="secondary" mx="16px" size="md">Connect Wallet</Button>
              <Avatar size="sm" />
            </Flex>
            <Box display={{ md: "block", xl: "none" }}>
              <Menu>
                <MenuButton as={IconButton} aria-label='Options' variant='outline' />
                <MenuList>
                  <MenuItem command='⌘T'>
                    New Tab
                  </MenuItem>
                  <MenuItem command='⌘N'>
                    New Window
                  </MenuItem>
                  <MenuItem command='⌘⇧N'>
                    Open Closed Tab
                  </MenuItem>
                  <MenuItem command='⌘O'>
                    Open File...
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
