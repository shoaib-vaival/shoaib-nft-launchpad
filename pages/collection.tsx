import { IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Container, Flex , Box, VStack, Heading, Text} from "@chakra-ui/layout";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer
} from "@chakra-ui/table";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { NextPage } from "next";
import CollectionCard from "../src/components/Cards/CollectionCard";
import ProfileDetail from "../src/components/Profile/ProfileDetail";
import ProfileHeader from "../src/components/Profile/ProfileHeader";


const Collection:NextPage = ()=>{
    const socialIcons = [
        {icon:'icon-internet',url:'#' },
        {icon:'icon-telegram', url:'#'},
        {icon:'icon-froggy', url:'#'},
        {icon:'icon-instagram', url:'#'},
        {icon:'icon-twitter', url:'#'},
        {icon:'icon-groupbar', url:'#'}
        ]
    return(
    <>
    <ProfileHeader socialIcons={socialIcons}/>
    <ProfileDetail/>
    <Container>
    <Tabs>
  <TabList>
    <Tab>Items</Tab>
    <Tab>Activity</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
        <Flex justifyContent={'end'}>
              <IconButton
                variant='outline'
                colorScheme='primary'
                aria-label='Send email'
                icon={<i className='icon-funnel'></i>}
              />
              <Box pl={{ base: '0', sm: '0', md: '8px' }} pt={{ base: '20px', md: '0', xl: '0' }} >
                <InputGroup variant='custom' colorScheme='purple' w={{ base: 'full', sm: 'md', xl: 'sm' }} marginBottom={{ base: '3', md: 'initial', xl: 'initial' }} >
                  <Input placeholder='Search...' />
                  <InputLeftElement>
                    <img src='/assets/images/search-icon.svg' />
                  </InputLeftElement>
                </InputGroup>
              </Box>
              <Box>
              <IconButton
                variant='outline'
                colorScheme='primary'
                aria-label='Send email'
                ml={{ base: '0', sm: '0', md: '8px' }}
                icon={<i className='icon-list'></i>}
              />
              </Box>
              <Box>
              <IconButton
                variant='outline'
                colorScheme='primary'
                aria-label='Send email'
                icon={<i className='icon-grid'></i>}
                 ml={{ base: '0', sm: '0', md: '8px' }}
              />
              </Box>
            </Flex>
      <Flex wrap="wrap" w="full">
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
      </Flex>
    </TabPanel>
    <TabPanel>
      <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>ITEM</Th>
        <Th>PARITY</Th>
        <Th >LAST Transfer</Th>
        <Th >OWNER</Th>
        <Th >TIME</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
            <Flex gap="2" alignItems="center">
             <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover'  border="1px solid white" borderRadius="16px" w="96px" h="96px"/>
             <VStack spacing="0.5">
                 <Heading fontSize="18px">Panthera Leo</Heading>
                 <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
             </VStack>
             </Flex>
        </Td>
        <Td >#667</Td>
        <Td >John Smith</Td>
        <Td >CryotoDL</Td>
        <Td >3m ago</Td>
      </Tr>
      <Tr>
        <Td>
            <Flex gap="2" alignItems="center">
             <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover'  border="1px solid white" borderRadius="16px" w="96px" h="96px"/>
             <VStack spacing="0.5">
                 <Heading fontSize="18px">Panthera Leo</Heading>
                 <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
             </VStack>
             </Flex>
        </Td>
        <Td >#667</Td>
        <Td >John Smith</Td>
        <Td >CryotoDL</Td>
        <Td >3m ago</Td>
      </Tr>
      <Tr>
        <Td>
            <Flex gap="2" alignItems="center">
             <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover'  border="1px solid white" borderRadius="16px" w="96px" h="96px"/>
             <VStack spacing="0.5">
                 <Heading fontSize="18px">Panthera Leo</Heading>
                 <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
             </VStack>
             </Flex>
        </Td>
        <Td >#667</Td>
        <Td >John Smith</Td>
        <Td >CryotoDL</Td>
        <Td >3m ago</Td>
      </Tr>
      <Tr>
        <Td>
            <Flex gap="2" alignItems="center">
             <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover'  border="1px solid white" borderRadius="16px" w="96px" h="96px"/>
             <VStack spacing="0.5">
                 <Heading fontSize="18px">Panthera Leo</Heading>
                 <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
             </VStack>
             </Flex>
        </Td>
        <Td >#667</Td>
        <Td >John Smith</Td>
        <Td >CryotoDL</Td>
        <Td >3m ago</Td>
      </Tr>
      <Tr>
        <Td>
            <Flex gap="2" alignItems="center">
             <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover'  border="1px solid white" borderRadius="16px" w="96px" h="96px"/>
             <VStack spacing="0.5">
                 <Heading fontSize="18px">Panthera Leo</Heading>
                 <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
             </VStack>
             </Flex>
        </Td>
        <Td >#667</Td>
        <Td >John Smith</Td>
        <Td >CryotoDL</Td>
        <Td >3m ago</Td>
      </Tr>
      <Tr>
        <Td>
            <Flex gap="2" alignItems="center">
             <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover'  border="1px solid white" borderRadius="16px" w="96px" h="96px"/>
             <VStack spacing="0.5">
                 <Heading fontSize="18px">Panthera Leo</Heading>
                 <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
             </VStack>
             </Flex>
        </Td>
        <Td >#667</Td>
        <Td >John Smith</Td>
        <Td >CryotoDL</Td>
        <Td >3m ago</Td>
      </Tr>
      <Tr>
        <Td>
            <Flex gap="2" alignItems="center">
             <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover'  border="1px solid white" borderRadius="16px" w="96px" h="96px"/>
             <VStack spacing="0.5">
                 <Heading fontSize="18px">Panthera Leo</Heading>
                 <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
             </VStack>
             </Flex>
        </Td>
        <Td >#667</Td>
        <Td >John Smith</Td>
        <Td >CryotoDL</Td>
        <Td >3m ago</Td>
      </Tr>
      <Tr>
        <Td>
            <Flex gap="2" alignItems="center">
             <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover'  border="1px solid white" borderRadius="16px" w="96px" h="96px"/>
             <VStack spacing="0.5">
                 <Heading fontSize="18px">Panthera Leo</Heading>
                 <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
             </VStack>
             </Flex>
        </Td>
        <Td >#667</Td>
        <Td >John Smith</Td>
        <Td >CryotoDL</Td>
        <Td >3m ago</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Container>
    </>
    )
}

export default Collection