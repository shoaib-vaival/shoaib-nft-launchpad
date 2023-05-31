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
      <Container maxW={{ sm:'xl',lg:'4xl', xl: '8xl' }}>

        <Box py={30}>
          <Stack direction='row' alignItems={{base:"flex-start",xl:'center'}} justifyContent={{base:'flex-start',xl:'initial'}} flexWrap='wrap' spacing={{base:'2'}}>
            <Box pt="8px" pb="8px" order={{base:'1', xl:'1'}} marginRight={{base:'auto',xl:'initial'}}>
              <Image src="/assets/images/Logo.png" alt="logo" maxW="138" maxH="45px" />
            </Box>
            <Box order={{base:'4', xl:'2'}} w={{base:'full',xl:'initial'}}  pl={{base:'0',sm:"0", md:'30px'}} pr={{base:'0',sm:"0", md:'20px'}} >
              <InputGroup variant="custom" colorScheme="purple" w={{ base:'full',xl:'lg' }} marginBottom={{base:'3', xl:'initial'}} >
                <Input placeholder="Search..." />
                <InputLeftElement>
                  <img src="/assets/images/search-icon.svg" />
                </InputLeftElement>
              </InputGroup>
            </Box>
            <Box order={{base:'6',xl:'3'}}  display={{base:'none',sm:'none',xl:'initial'}} >
              <HStack alignItems={{base:'initial',xl:'center'}} flexDirection={{base:'column', sm:'column', md:'row',xl:'row'}} spacing={{ xl: '24px', lg: '16px' }} >
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
            <Flex alignItems="center" w={{base:'full',sm:'2xs',xl:'initial'}} flexDirection={{base:'column', sm:'row',xl:'row'}} order={{base:'5',sm:'2', xl:'4'}}>
              <Menu autoSelect={false}>
                <MenuButton as={Button} fontSize='16px' ml={{ lg: '30px', xl: '130px' }} variant="primary" w={{base:'full',xl:'initial'}} size="md">
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
              <Button variant="secondary" mx="16px" w={{base:'full',xl:'initial'}} size="md">Connect Wallet</Button>
            </Flex>
             
            <Box order={{base:'3',xl:'5'}} display={{base:'block',xl:'none'}}>
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
            <Avatar size="sm" order={{base:'2',xl:'6'}} />
          </Stack>
          {/* <Stack>
          <Box pl="30px" pr="20px" display={{ xs: "block",sm: "block", md: "none", xl: "none" }}>
              <InputGroup variant="custom" colorScheme="purple" w={{ xl: "md", lg: '2xs', sm: '3xs' }}>
                <Input placeholder="Search..." />
                <InputLeftElement>
                  <img src="/assets/images/search-icon.svg" />
                </InputLeftElement>
              </InputGroup>
            </Box>
          </Stack> */}
        </Box>
      </Container >
    </>
  );
}
