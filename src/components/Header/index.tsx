import { ReactNode } from "react";
import { useWeb3Context } from "../../context/Web3Provider";
import {Button, Stack, Box, Container, Input, InputGroup, InputLeftElement, Flex, Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider
} from '@chakra-ui/react'
import Link from 'next/link'

export const Header = () => {
  const {account, connect, disconnect} = useWeb3Context()

  return (
    <>
    <Container maxW='container.xl'>   

    <Box>
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Box pt="8px" pb="8px">
        <img src="/assets/images/Logo.png" width="185" height="60px"/>
      </Box>
        <InputGroup variant="custom" colorScheme="purple" w="md">
          <Input placeholder="Search..."/>
          <InputLeftElement>
          <img src="/assets/images/search-icon.svg" />
           </InputLeftElement>
          </InputGroup>
          <Flex justifyContent="space-between">
            <Link href="#">Home</Link>
            <Link href="#">Explorer</Link>
             <Menu  autoSelect={false}>
  <MenuButton  as={Button} variant="link">
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
          </Flex>
          <Flex alignItems="center">
            {/* <Button variant="primary" mr="16px" size="md">Create</Button> */}
            <Menu  autoSelect={false}>
  <MenuButton  as={Button} variant="primary">
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
            <Button variant="secondary" mr="16px" size="md">Connect Wallet</Button>
            <Avatar size="sm" />
          </Flex>
    </Stack>
    </Box>
    </Container>
    {/* <Button variant="primary"  size="xs">Button</Button>
    <Button variant="primary" size="sm">Button</Button>
    <Button variant="primary" size="md">Button</Button>
    <Button  variant="primary" size="lg">Button</Button> */}
    {/* <h1>{account}</h1> */}
       {/* {!account?  
              <Button
              variant="primary"
              onClick={()=>connect()}
              >Connect Wallet</Button>
              :
               <button 
              onClick={()=>disconnect()}
              >Disconnect Wallet</button>
              } */}
    
    </>
  );
}
