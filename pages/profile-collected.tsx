import type { NextPage } from 'next'
import { Header } from '../src/components/Header'
import CollectionCards from '../src/components/Cards/CollectionCard'
import { colors } from '../src/theme/colors'
import { Box, Container, Flex, Heading, Text, Button, Image, HStack, Icon, IconButton, Tabs, TabList, Tab, TabPanels, TabPanel, Menu, MenuButton, MenuList, MenuItem, Checkbox, Stack, CheckboxGroup, Wrap, WrapItem, Center, InputGroup, Input, InputLeftElement } from '@chakra-ui/react'
import Link from 'next/link'
import { CheckIcon } from '@chakra-ui/icons'


const myCollection: NextPage = () => {

  return (
    <div>
      <Header />
      <Box>
        <Container maxW={{ sm: '4xl', lg: '6xl', xl: '8xl' }}>
          <Box pt='30px' pb='40px'>
            <Box position='relative' maxW='100%' height='415px' maxH='600px' >
              <Image src='/assets/images/Maskgroup.png' alt='Maskgroup' w='100%' h='100%' objectFit='cover'
                borderRadius='2xl' />

              <Box position='absolute' bottom='-48px' left='48px' border='1px solid #fff' borderRadius='xl' w={220} h={220} >
                <Image
                  src='/assets/images/RectangleCardImg.png' alt='Maskgroup'
                  w='100%' h='100%' objectFit='cover' borderRadius='2xl' />
              </Box>
            </Box>
            <Box>
              <HStack float='right' pt='8px'>
                <Box textAlign='center'>
                  <IconButton color=' #756C99'
                    variant='outline'
                    colorScheme='#6863F3'
                    aria-label='Send'
                    fontSize='20px'
                    icon={<i className='icon-internet'></i>}
                  />
                </Box>
                <Box textAlign='center'>
                  <IconButton color=' #756C99'
                    variant='outline'
                    colorScheme='#6863F3'
                    aria-label='Send email'
                    fontSize='20px'
                    icon={<i className=' icon-froggy'></i>}
                  />
                </Box>
                <Box textAlign='center'>
                  <IconButton color=' #756C99'
                    variant='outline'
                    colorScheme='#6863F3'
                    aria-label='Send email'
                    fontSize='20px'
                    icon={<i className='icon-instagram'></i>}
                  />
                </Box>
                <Box textAlign='center'>
                  <IconButton color=' #756C99'
                    variant='outline'
                    colorScheme='#6863F3'
                    aria-label='Send email'
                    fontSize='20px'
                    textAlign='center'
                    display='initial'
                    icon={<i className='icon-twitter'></i>}
                  />
                </Box>
                <Box textAlign='center'>
                  <IconButton color=' #756C99'
                    variant='outline'
                    colorScheme='#6863F3'
                    aria-label='Send email'
                    fontSize='20px'
                    icon={<i className='icon-groupbar'></i>}
                  />
                </Box>
                <Box textAlign='center'>
                  <IconButton color=' #756C99'
                    variant='outline'
                    colorScheme='6863F3'
                    aria-label='Send email'
                    fontSize='20px'
                    icon={<i className='icon-share'></i>}
                  />
                </Box>
                <Box textAlign='center'>
                  <IconButton color=' #756C99'
                    variant='outline'
                    colorScheme='6863F3'
                    aria-label='Send email'
                    fontSize='20px'
                    icon={<i className='icon-telegram'></i>}
                  />
                </Box>
              </HStack>
            </Box>
            <Flex alignItems='center' pt='60px'>

              <Heading as='h4' fontSize='32px'>
                Evelyn Gutierrez
              </Heading>
              <Box mx='12px' color='#6863F3'>
                <i className='icon-tick'></i>
              </Box>
              <Box>
                <Button color='#393F59' bg='transparent' borderRadius='xl' p='7px 8px' fontSize='12px' height='initial' border='2px solid #6863F3'>
                  <Text mr='8px'>0x797970 … 8080</Text> <i className='icon-copy'></i>
                </Button>

              </Box>

            </Flex>
            <Flex flexDirection={{ base: 'column', md: 'column', lg: 'row', xl: 'row' }}>
              <Box>
                <Box>
                  <Flex flexWrap='wrap'>
                    <Box display='flex' alignItems='center' fontSize='14px' mr='24px' pt='20px' pb='24px'>
                      <Text>Joined:</Text>
                      <Text fontWeight='bold'> Dec 2021</Text>
                    </Box>
                    <Box display='flex' alignItems='center' fontSize='14px' mr='24px'>
                      <Text>Created:</Text>
                      <Text fontWeight='bold'> Dec 2021</Text>
                    </Box>
                    <Box display='flex' alignItems='center' fontSize='14px' mr='24px'>
                      <Text>Created:</Text>
                      <Text fontWeight='bold'> Dec 2021</Text>
                    </Box>
                    <Box display='flex' alignItems='center' fontSize='14px' mr='24px'>
                      <Text>Creator Fee:</Text>
                      <Text fontWeight='bold'> 10%</Text>
                    </Box>
                    <Box display='flex' alignItems='center' fontSize='14px' mr='24px'>
                      <Text>Chain:</Text>
                      <Text fontWeight='bold'> Ethereum</Text>
                    </Box>

                  </Flex>
                </Box>
                <Box>
                  <Text maxW={{ sm: '100%', xl: '90%' }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua. At vero eos et accusam et…
                  </Text>
                </Box>
              </Box>
              <Box>
                <Wrap spacing='16px'>
                  <WrapItem>
                    <Box w='180px' h='80px' borderRadius='16px' border='2px solid #6F6BF366' p='16px'>
                      <Text fontSize="14px" color="#756C99">Volume</Text>
                      <Text fontSize="20px" fontWeight='bold' color="#393F59">1,118 ETH</Text>
                    </Box>
                  </WrapItem>
                  <WrapItem>
                    <Box w='180px' h='80px' borderRadius='16px' border='2px solid #6F6BF366' p='16px'>
                      <Text fontSize="14px" color="#756C99">Volume</Text>
                      <Text fontSize="20px" fontWeight='bold' color="#393F59">1,118 ETH</Text>
                    </Box>
                  </WrapItem>
                  <WrapItem>
                    <Box w='180px' h='80px' borderRadius='16px' border='2px solid #6F6BF366' p='16px'>
                      <Text fontSize="14px" color="#756C99">Volume</Text>
                      <Text fontSize="20px" fontWeight='bold' color="#393F59">1,118 ETH</Text>
                    </Box>
                  </WrapItem>
                  <WrapItem>
                    <Box w='180px' h='80px' borderRadius='16px' border='2px solid #6F6BF366' p='16px'>
                      <Text fontSize="14px" color="#756C99">Volume</Text>
                      <Text fontSize="20px" fontWeight='bold' color="#393F59">1,118 ETH</Text>
                    </Box>
                  </WrapItem>
                  <WrapItem>
                    <Box w='180px' h='80px' borderRadius='16px' border='2px solid #6F6BF366' p='16px'>
                      <Text fontSize="14px" color="#756C99">Volume</Text>
                      <Text fontSize="20px" fontWeight='bold' color="#393F59">1,118 ETH</Text>
                    </Box>
                  </WrapItem>
                </Wrap>
              </Box>
            </Flex>
          </Box>

          <Box pt='30px' pb='40px'>
            <Box>
              <Tabs >
                <TabList fontWeight='bold'>
                  <Tab _selected={{ color: '#6863F3', borderBottom: '2px solid #6863F3', fontWeight: 'bold' }}>Collected</Tab>
                  <Tab _selected={{ color: '#6863F3', borderBottom: '2px solid #6863F3', fontWeight: 'bold' }}>Created</Tab>
                  <Tab _selected={{ color: '#6863F3', borderBottom: '2px solid #6863F3', fontWeight: 'bold' }}>Activity</Tab>
                </TabList>
              </Tabs>
            </Box>
          </Box>

          <Box>
            <Flex justifyContent={'end'}>
              <IconButton
                variant='outline'
                colorScheme='primary'
                aria-label='Send email'
                icon={<i className='icon-funnel'></i>}
              />
              <Box pl={{ base: '0', sm: "0", md: '20px' }} pt={{ base: '20px', md: '0', xl: '0' }} >
                <InputGroup variant="custom" colorScheme="purple" w={{ base: 'full', sm: 'md', xl: 'sm' }} marginBottom={{ base: '3', md: 'initial', xl: 'initial' }} >
                  <Input placeholder="Search..." />
                  <InputLeftElement>
                    <img src="/assets/images/search-icon.svg" />
                  </InputLeftElement>
                </InputGroup>
              </Box>
              <Box  px={'8px'} >
              
                <Menu>
                  <MenuButton as={Button} iconSpacing={'30px'} rightIcon={<i className='icon-Chevron'></i>} p={'15px'} border={'1px solid #6863F3'}>
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
              </Box>
              <Box>
              <IconButton
                variant='outline'
                colorScheme='primary'
                aria-label='Send email'
                icon={<i className='icon-list'></i>}
              />
              </Box>
              <Box>
              <IconButton
                variant='outline'
                colorScheme='primary'
                aria-label='Send email'
                icon={<i className='icon-grid'></i>}
              />
              </Box>
            </Flex>
          </Box>


          <Flex pt='30px' pb='40px'>

            <Box as={'div'} mt={'12px'} minW='220px' height={'450px'} border='1px solid #6f6bf35e' borderRadius='16px' p='16px' pb='24px' justifyContent='space-between'>
              <Heading pb='20px' fontSize='18px'>Stats</Heading>
              <Stack mt={1} spacing={2} >
                <Stack spacing={2} direction={'column'} fontSize={'14px'}>
                  <Checkbox colorScheme='primary' defaultChecked><Text fontSize='14px'>Naruto</Text></Checkbox>
                </Stack>
              </Stack>

            </Box>
            <Box w={'auto'}>
              <Flex direction={['column', 'row']} flexWrap={{ base: 'nowrap', sm: 'wrap', md: 'wrap', lg: 'wrap', xl: 'wrap' }} >
                <Box w={{ xl: '25%', md: '50%', sm: '100%' }} display='initial'>
                  <CollectionCards />
                </Box>
                <Box w={{ xl: '25%', md: '50%', sm: '100%' }} display='initial'>
                  <CollectionCards />
                </Box>
                <Box w={{ xl: '25%', md: '50%', sm: '100%' }} display='initial'>
                  <CollectionCards />
                </Box>
                <Box w={{ xl: '25%', md: '50%', sm: '100%' }} display='initial'>
                  <CollectionCards />
                </Box>
                <Box w={{ xl: '25%', md: '50%', sm: '100%' }} display='initial'>
                  <CollectionCards />
                </Box>
                <Box w={{ xl: '25%', md: '50%', sm: '100%' }} display='initial'>
                  <CollectionCards />
                </Box>
              </Flex>

            </Box>
          </Flex>
        </Container>
      </Box>




    </div>
  )
}

export default myCollection
