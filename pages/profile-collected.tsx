import type { NextPage } from 'next'
import { Header } from '../src/components/Header'
import CollectionCards from '../src/components/Cards/CollectionCard'
import { colors } from '../src/theme/colors'
import { Box, Container, Flex, Heading, Text, Button, Image, HStack, Icon, IconButton, Tabs, TabList, Tab, TabPanels, TabPanel, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import Link from 'next/link'


const myCollection: NextPage = () => {

  return (
    <div>
      <Header />
      <Box>
        <Container maxW={{ md: '4xl', xl: '8xl' }}>
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
                    aria-label='Send email'
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
              <Text maxW={{ sm: '100%', xl: '55%' }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et…

              </Text>
            </Box>
          </Box>

          <Box pt='30px' pb='40px'>
            <Box>
              <Tabs >
                <TabList fontWeight='bold'>
                  <Tab _selected={{ color: '#6863F3', borderBottom: '2px solid #6863F3',fontWeight:'bold' }}>Collected</Tab>
                  <Tab _selected={{ color: '#6863F3', borderBottom: '2px solid #6863F3',fontWeight:'bold' }}>Created</Tab>
                  <Tab _selected={{ color: '#6863F3', borderBottom: '2px solid #6863F3',fontWeight:'bold' }}>Activity</Tab>
                </TabList>
              </Tabs>
            </Box>
          </Box>




          <Box pt='30px' pb='40px'>
        
            <Flex flexWrap='wrap' flexDirection='column' w='220px' border='1px solid #6f6bf35e'>
              <Box display='flex' alignItems='center' fontSize='14px' pt='20px' pb='24px' justifyContent='space-between'>
                <Text>Stats</Text>
                <Text><i className='icon-Chevron'></i></Text>
              </Box>
              <Box display='flex' alignItems='center' fontSize='14px'>
                <Text>Created:</Text>
                <Text fontWeight='bold'> Dec 2021</Text>
              </Box>
              <Box display='flex' alignItems='center' fontSize='14px'>
                <Text>Created:</Text>
                <Text fontWeight='bold'> Dec 2021</Text>
              </Box>
              <Box display='flex' alignItems='center' fontSize='14px'>
                <Text>Creator Fee:</Text>
                <Text fontWeight='bold'> 10%</Text>
              </Box>
              <Box display='flex' alignItems='center' fontSize='14px'>
                <Text>Chain:</Text>
                <Text fontWeight='bold'> Ethereum</Text>
              </Box>

            </Flex>
          </Box>
        </Container>
      </Box>




    </div>
  )
}

export default myCollection
