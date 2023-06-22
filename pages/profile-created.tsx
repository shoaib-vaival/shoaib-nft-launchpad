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
  TableContainer
} from "@chakra-ui/table";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { NextPage } from "next";
import { useState } from "react";
import { ApiUrl } from "../src/apis/apiUrl";
import CollectionCard from "../src/components/Cards/CollectionCard";
import { ReactSelect } from "../src/components/common";
import { Loader } from "../src/components/Loader";
import ProfileDetail from "../src/components/Profile/ProfileDetail";
import ProfileHeader from "../src/components/Profile/ProfileHeader";
import { SlickSlider } from '../src/components/ReactSlick'
import CustomSlider from "../src/components/Slider";
import { QUERY_KEYS } from "../src/hooks/queryKeys";
import { useInfiniteQuery } from "../src/hooks/useInfiniteQuery";
import { useQuery } from "../src/hooks/useQuery";
import { collectionType, nftType, profileType } from "../src/types";
import { NftGridView } from "../src/views/NftGridView";
import { NftListView } from "../src/views/NftListView";



const ProfilCreated: NextPage = () => {
  const [view, setView] = useState<string>('grid')
  const changeViewMode = (viewMode: string) => {
    setView(viewMode)
  }
  const {data, isLoading:isProfileLoading} = useQuery<profileType>({
    queryKey:[QUERY_KEYS.GET_USER],
    url:ApiUrl.GET_USER,
    token:true,
  })
  const {data:userCollections, isLoading:isUserCollectionLoading} = useQuery<collectionType[]>({
    queryKey:[QUERY_KEYS.GET_COLLECTION_BY_USER_ID],
    url:ApiUrl.GET_COLLECTION_BY_USER_ID,
    token:true
  })
  const {data:userNfts, error, fetchNextPage, status, hasNextPage, isLoading:isUserNftLoading } = useInfiniteQuery<nftType[]>({
    queryKey:[QUERY_KEYS.GET_NFT_DETAIL],
    url:ApiUrl.GET_NFT_DETAIL,
    token:true
  })
  const socialIcons = [
    { icon: 'icon-internet', url: data?.websiteUrl },
    { icon: 'icon-telegram', url: data?.telegram },
    { icon: 'icon-froggy', url: data?.discord },
    { icon: 'icon-instagram', url: data?.instagram },
    { icon: 'icon-twitter', url: data?.twitter },
    { icon: 'icon-groupbar', url: data?.etherScanUrl }
  ]
  return (
    <>
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '8xl' }}>
        <Box px={{ base: '0', sm: '17px' }}>
          {isProfileLoading && data === undefined ? <Flex width="100%" height="100%" justifyContent='center' alignItems="center"><Loader /></Flex> :
          <ProfileHeader socialIcons={socialIcons} showSocialIcons={true} coverPhoto={data?.profileCoverURL} profilePhoto={data?.profileUrl}/>}
        </Box>
        <Box mb={{ base: '12px', md: '35px' }}>
        <ProfileDetail showStats = {false} data={{...data, description:data?.bio}}  isCollection={false} />
        </Box>
      </Container>
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '8xl' }}>
        <Box>
          <Tabs>
            <TabList ml='12px' pl='0'>
              <Tab>Items</Tab>
              <Tab>Activity</Tab>
            </TabList>

            <TabPanels>
              <TabPanel p={0}>

                <Box>
                  {isUserCollectionLoading && data === undefined ? <Flex width="100%" height="100%" justifyContent='center' alignItems="center"><Loader /></Flex> :
                  <SlickSlider >
                    {userCollections?.map((collection: any, index: number) => {
                      return <CollectionCard type='withBody' key={index} featureImage={collection?.bannerImageUrl} logoImage={collection?.logoImageUrl} isShowFeatureImage={true} isShowLogoImage={true} name={collection.name} />
                    })}
                  </SlickSlider>
                  }
                </Box>
                <Flex mt='15px' mx='12px' borderTop={userCollections?.length ? '1px solid rgba(53, 53, 53, 0.2)' : ''} justifyContent={'end'} alignItems="center" pt='20px' flexWrap='wrap'>
                  <Box order='1'>
                    <IconButton
                      variant='outline'
                      colorScheme='primary'
                      aria-label='Send email'
                      icon={<i className='icon-funnel'></i>}
                    />
                  </Box>
                  <Box order={{ base: '3', sm: '2' }} w={{ base: '100%', sm: 'auto' }} pl={{ base: '0', sm: '8px' }} pt={{ base: '15px', md: '0', xl: '0' }} >
                    <InputGroup variant='custom' colorScheme='purple' w={{ base: "full", sm: "200px", md: 'sm' }} marginBottom={{ base: '3', md: 'initial', xl: 'initial' }} >
                      <Input placeholder='Search...' />
                      <InputLeftElement>
                        <img src='/assets/images/search-icon.svg' />
                      </InputLeftElement>
                    </InputGroup>
                  </Box>
                  <ButtonGroup order={{ base: '2', sm: '3' }} size='md' isAttached variant='outline' ml="8px">
                    <IconButton
                      variant='outline'
                      colorScheme='primary'
                      aria-label='Send email'
                      icon={<i className='icon-list'></i>}
                      onClick={() => changeViewMode('list')}
                      bg={view === 'list' ? 'rgba(111, 107, 243, 0.3)' : ''}
                      color={view === 'list' ? 'rgba(111, 107, 243, 0.3)' : "#756C99"}
                    />
                    <IconButton
                      variant='outline'
                      colorScheme='primary'
                      aria-label='Send email'
                      icon={<i className='icon-grid'></i>}
                      onClick={() => changeViewMode('grid')}
                      bg={view === 'grid' ? 'rgba(111, 107, 243, 0.3)' : ''}
                      color={view === 'grid' ? 'rgba(111, 107, 243, 0.3)' : "#756C99"}
                    />
                  </ButtonGroup>
                  <Box>
                  </Box>
                  <Box>
                  </Box>
                </Flex>
                {view === 'grid'? userNfts !== undefined && <NftGridView data={userNfts} fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} /> : userNfts !== undefined && <NftListView data={userNfts} fetchNextPage={fetchNextPage} hasNextPage={hasNextPage}/>}
              </TabPanel>
              <TabPanel pt='0'>
                <Flex justifyContent={'end'} alignItems="center" pt='20px' flexWrap='wrap'>
                  <Box order='1'>
                    <IconButton
                      variant='outline'
                      colorScheme='primary'
                      aria-label='Send email'
                      icon={<i className='icon-funnel'></i>}
                    />
                  </Box>
                  <Box order={{ base: '3', sm: '2' }} w={{ base: '100%', sm: 'auto' }} pl={{ base: '0', sm: '8px' }} pt={{ base: '15px', md: '0', xl: '0' }} >
                    <InputGroup variant='custom' colorScheme='purple' w={{ base: "full", sm: "200px", md: 'sm' }} marginBottom={{ base: '3', md: 'initial', xl: 'initial' }} >
                      <Input placeholder='Search...' />
                      <InputLeftElement>
                        <img src='/assets/images/search-icon.svg' />
                      </InputLeftElement>
                    </InputGroup>
                  </Box>
                  <Box width="150px" ml='8px' order={{ base: '2', sm: '3' }}>
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
                            <Box color='#6863F3'>
                              <i className='icon-transfer'></i>
                            </Box>
                            <Text fontWeight='700'>Transfer</Text>
                            <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{ base: '50px', md: '96px' }} h={{ base: '50px', md: '96px' }} />
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
                          <Box color='#6863F3'>
                                      <i className='icon-transfer'></i>
                                      </Box>
                                      <Text fontWeight='700'>Transfer</Text>
                            <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{ base: '50px', md: '96px' }} h={{ base: '50px', md: '96px' }} />
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
                          <Box color='#6863F3'>
                                      <i className='icon-transfer'></i>
                                      </Box>
                                      <Text fontWeight='700'>Transfer</Text>
                            <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{ base: '50px', md: '96px' }} h={{ base: '50px', md: '96px' }} />
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
                          <Box color='#6863F3'>
                                      <i className='icon-transfer'></i>
                                      </Box>
                                      <Text fontWeight='700'>Transfer</Text>
                            <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{ base: '50px', md: '96px' }} h={{ base: '50px', md: '96px' }} />
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
                          <Box color='#6863F3'>
                                      <i className='icon-transfer'></i>
                                      </Box>
                                      <Text fontWeight='700'>Transfer</Text>
                            <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{ base: '50px', md: '96px' }} h={{ base: '50px', md: '96px' }} />
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
                          <Box color='#6863F3'>
                                      <i className='icon-transfer'></i>
                                      </Box>
                                      <Text fontWeight='700'>Transfer</Text>
                            <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{ base: '50px', md: '96px' }} h={{ base: '50px', md: '96px' }} />
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
                          <Box color='#6863F3'>
                                      <i className='icon-transfer'></i>
                                      </Box>
                                      <Text fontWeight='700'>Transfer</Text>
                            <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{ base: '50px', md: '96px' }} h={{ base: '50px', md: '96px' }} />
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
                          <Box color='#6863F3'>
                                      <i className='icon-transfer'></i>
                                      </Box>
                                      <Text fontWeight='700'>Transfer</Text>
                            <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{ base: '50px', md: '96px' }} h={{ base: '50px', md: '96px' }} />
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

export default ProfilCreated