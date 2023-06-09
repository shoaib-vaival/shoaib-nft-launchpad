import { ButtonGroup, IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Container, Flex, Box, VStack, Heading, Text } from "@chakra-ui/layout";
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
import { useState } from "react";
import CollectionCard from "../src/components/Cards/CollectionCard";
import { ReactSelect } from "../src/components/common";
import ProfileDetail from "../src/components/Profile/ProfileDetail";
import ProfileHeader from "../src/components/Profile/ProfileHeader";


const Collection: NextPage = () => {
  const [isGroupMode, setIsGroupMode] = useState<boolean>(true)
  const changeViewMode = (mode: string) => {
    if (mode === 'group') {
      setIsGroupMode(true)
    }
    if (mode === 'list') {
      setIsGroupMode(false)
    }
  }
  const socialIcons = [
    { icon: 'icon-internet', url: '#' },
    { icon: 'icon-telegram', url: '#' },
    { icon: 'icon-froggy', url: '#' },
    { icon: 'icon-instagram', url: '#' },
    { icon: 'icon-twitter', url: '#' },
    { icon: 'icon-groupbar', url: '#' }
  ]
  return (
    <>
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }}>
        <Box px={{base:'0',md:'17px'}}>
        <ProfileHeader 
        socialIcons={socialIcons}
        showSocialIcons={true}  />
        </Box>
        <ProfileDetail showStats = {true}/>
      </Container>
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }}>
        <Box>
        <Tabs>
          <TabList>
            <Tab>Items</Tab>
            <Tab>Activity</Tab>
          </TabList>

          <TabPanels>
            <TabPanel p={0}>
              <Flex justifyContent={'end'} alignItems="center"  pt='20px' flexWrap='wrap'>
                <Box order='1'>
                <IconButton
                  variant='outline'
                  colorScheme='primary'
                  aria-label='Send email'
                  icon={<i className='icon-funnel'></i>}
                />
                </Box>
                <Box order={{base:'3',sm:'2'}} w={{base:'100%',sm:'auto'}} pl={{ base: '0', sm: '8px'}} pt={{ base: '15px', md: '0', xl: '0' }} >
                  <InputGroup variant='custom' colorScheme='purple'w={{ base: "full", sm: "200px",md:'sm' }} marginBottom={{ base: '3', md: 'initial', xl: 'initial' }} >
                    <Input placeholder='Search...' />
                    <InputLeftElement>
                      <img src='/assets/images/search-icon.svg' />
                    </InputLeftElement>
                  </InputGroup>
                </Box>
                <ButtonGroup order={{base:'2',sm:'3'}} size='md' isAttached variant='outline' ml="8px">
                  <IconButton
                    variant='outline'
                    colorScheme='primary'
                    aria-label='Send email'
                    icon={<i className='icon-list'></i>}
                    onClick={() => changeViewMode('list')}
                    bg="rgba(111, 107, 243, 0.3)"
                    color="#6863F3"
                  />
                  <IconButton
                    variant='outline'
                    colorScheme='primary'
                    aria-label='Send email'
                    icon={<i className='icon-grid'></i>}
                    onClick={() => changeViewMode('group')}
                    color="#756C99"
                  />
                </ButtonGroup>
                <Box>
                </Box>
                <Box>
                </Box>
              </Flex>
              {isGroupMode ?
                <Flex flexWrap='wrap' rowGap='16px' pt='24px'>
                  <Box width={{ base: '100%', sm: '50%', md: '33%', xl: '25%' }}>
                    <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
                  </Box>

                  <Box width={{ base: '100%', sm: '50%', md: '33%', xl: '25%' }}>
                    <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
                  </Box>

                  <Box width={{ base: '100%', sm: '50%', md: '33%', xl: '25%' }}>
                    <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
                  </Box>

                  <Box width={{ base: '100%', sm: '50%', md: '33%', xl: '25%' }}>
                    <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
                  </Box>

                  <Box width={{ base: '100%', sm: '50%', md: '33%', xl: '25%' }}>
                    <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
                  </Box>
                  <Box width={{ base: '100%', sm: '50%', md: '33%', xl: '25%' }}>
                    <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
                  </Box>

                  <Box width={{ base: '100%', sm: '50%', md: '33%', xl: '25%' }}>
                    <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
                  </Box>

                  <Box width={{ base: '100%', sm: '50%', md: '33%', xl: '25%' }}>
                    <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
                  </Box>

                  <Box width={{ base: '100%', sm: '50%', md: '33%', xl: '25%' }}>
                    <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
                  </Box>

                  <Box width={{ base: '100%', sm: '50%', md: '33%', xl: '25%' }}>
                    <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
                  </Box>

                  <Box width={{ base: '100%', sm: '50%', md: '33%', xl: '25%' }}>
                    <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
                  </Box>

                  <Box width={{ base: '100%', sm: '50%', md: '33%', xl: '25%' }}>
                    <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
                  </Box>
                </Flex>
                : <>
                  <TableContainer>
                    <Table variant='simple'>
                      <Thead>
                        <Tr>
                          <Th textAlign="center">ITEM</Th>
                          <Th>PARITY</Th>
                          <Th >LAST Transfer</Th>
                          <Th >OWNER</Th>
                          <Th >TIME</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>
                            <Flex gap="2"  alignItems="center" mr='48px'>
                              <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
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
                            <Flex gap="2"  alignItems="center" mr='48px'>
                              <Image src="/assets/images/cover-image1.png"  objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'65px',md:'96px'}} h={{base:'65px',md:'96px'}} />
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
                            <Flex gap="2" alignItems="center" mr='48px'>
                              <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
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
                            <Flex gap="2" alignItems="center" mr='48px'>
                              <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
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
                              <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
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
                              <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
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
                            <Flex gap="2" alignItems="center" mr='48px'>
                              <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
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
                            <Flex gap="2" alignItems="center" mr='48px'>
                              <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
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
                </>}
            </TabPanel>
            <TabPanel pt='0'>
            <Flex justifyContent={'end'} alignItems="center"  pt='20px' flexWrap='wrap'>
              <Box order='1'>
                <IconButton
                  variant='outline'
                  colorScheme='primary'
                  aria-label='Send email'
                  icon={<i className='icon-funnel'></i>}
                />
                </Box>
                <Box order={{base:'3',sm:'2'}} w={{base:'100%',sm:'auto'}} pl={{ base: '0', sm: '8px'}} pt={{ base: '15px', md: '0', xl: '0' }} >
                  <InputGroup variant='custom' colorScheme='purple'w={{ base: "full", sm: "200px",md:'sm' }} marginBottom={{ base: '3', md: 'initial', xl: 'initial' }} >
                    <Input placeholder='Search...' />
                    <InputLeftElement>
                      <img src='/assets/images/search-icon.svg' />
                    </InputLeftElement>
                  </InputGroup>
                </Box>
                <Box width="150px" ml='8px'  order={{base:'2',sm:'3'}}>
                  <ReactSelect options={[{ key: 'Sorty By', value: 'Sort By' }]} isMultiple={false} identifier='filter' getSelectedData={(value: string) => console.log(value)} placeholder="Sort By" />
                </Box>
              </Flex>
              <TableContainer pt='24px'> 
                <Table variant='simple'>
                  <Thead>
                    <Tr>
                      <Th textAlign="center">ITEM</Th>
                      <Th>PARITY</Th>
                      <Th >LAST Transfer</Th>
                      <Th >OWNER</Th>
                      <Th >TIME</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>
                        <Flex gap="2" alignItems="center" mr='48px'>
                          <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
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
                        <Flex gap="2" alignItems="center" mr='48px'>
                          <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
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
                        <Flex gap="2" alignItems="center" mr='48px'>
                          <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
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
                        <Flex gap="2" alignItems="center" mr='48px'>
                          <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
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
                        <Flex gap="2" alignItems="center" mr='48px'>
                          <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
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
                        <Flex gap="2" alignItems="center" mr='48px'>
                          <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
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
                        <Flex gap="2" alignItems="center" mr='48px'>
                          <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
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
                        <Flex gap="2" alignItems="center" mr='48px'>
                          <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
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
    </Box>
      </Container>
    </>
  )
}

export default Collection