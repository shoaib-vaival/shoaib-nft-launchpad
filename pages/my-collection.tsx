import type { NextPage } from 'next'
import { Header } from '../src/components/Header'
import CollectionCards from '../src/components/Cards/CollectionCard'
import { Box, Container, Flex, Heading, Text, Button, Square } from '@chakra-ui/react'


const myCollection: NextPage = () => {

  return (
    <div>
      <Header />
      <Box>
      <Container maxW={{ sm: '4xl', lg: '6xl', xl: '8xl' }}>
          <Box pt='30px' pb='40px'>
            <Flex justifyContent='space-between' alignItems='center' textAlign={{base:'center',md:'initial'}} flexDirection={{base:'column',md:'row'}}>
              <Box pr={{base:'0',md:'50px'}}>
                <Heading as='h1' fontSize={{base:'26px',sm:'36px',lg:'42px',xl:'56px'}} mb={{base:'10px', lg:'0'}}>
                  My Collections
                </Heading>
                <Text fontSize={{base:'18px',md:'24px'}}>Create, curate, and manage collections of unique NFTs to share and sell.</Text>
              </Box>
              <Box>
                <Button variant='primary' textTransform='uppercase' fontSize='14px' mt={{base:'30px', lg:'0'}}>
                  Create Collection
                </Button>
              </Box>

            </Flex>
          </Box>

        </Container>
        <Container maxW={{ sm: '4xl', lg: '6xl', xl: '8xl' }} pb={{ xl: '100px', md: '50px' }}>
          <Box>
            <Flex direction={['column', 'row']} flexWrap='wrap' >
              <Box w={{ xl: '25%', md: '50%',base:'100%' }} display='initial'>
                <CollectionCards />
              </Box>
              <Box w={{ xl: '25%', md: '50%',base:'100%' }} display='initial'>
                <CollectionCards />
              </Box>
              <Box w={{ xl: '25%', md: '50%',base:'100%' }} display='initial'>
                <CollectionCards />
              </Box>
              <Box w={{ xl: '25%', md: '50%',base:'100%' }} display='initial'>
                <CollectionCards />
              </Box>
              <Box w={{ xl: '25%', md: '50%',base:'100%' }} display='initial'>
                <CollectionCards />
              </Box>
              <Box w={{ xl: '25%', md: '50%',base:'100%' }} display='initial'>
                <CollectionCards />
              </Box>
            </Flex>

          </Box>
        </Container>

      </Box>


    </div>
  )
}

export default myCollection
