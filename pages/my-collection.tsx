import type { NextPage } from 'next'
import { Header } from '../src/components/Header'
import CollectionCards from '../src/components/Cards/CollectionCard'
import { Box, Container, Flex, Heading, Text, Button, Square } from '@chakra-ui/react'


const myCollection: NextPage = () => {

  return (
    <div>
      <Header />
      <Box>
      <Container maxW={{ md: '4xl', xl: '8xl' }}>
          <Box pt='30px' pb='40px'>
            <Flex justifyContent='space-between' alignItems='center'>
              <Box>
                <Heading as='h1' fontSize='56px'>
                  My Collections
                </Heading>
                <Text fontSize="24px">Create, curate, and manage collections of unique NFTs to share and sell.</Text>
              </Box>
              <Box>
                <Button variant='primary' fontSize='24px'>
                  Create Collection
                </Button>
              </Box>

            </Flex>
          </Box>

        </Container>
        <Container maxW={{md: '4xl', xl: '8xl' }} pb={{ xl: '100px', md: '50px' }}>
          <Box>
            <Flex direction={['column', 'row']} flexWrap='wrap'>
              <Square w={{ xl: '25%', md: '50%',sm:'50%' }} display='initial'>
                <CollectionCards />
              </Square>
              <Square w={{ xl: '25%', md: '50%',sm:'50%' }} display='initial'>
                <CollectionCards />
              </Square>
              <Square w={{ xl: '25%', md: '50%',sm:'50%' }} display='initial'>
                <CollectionCards />
              </Square>
              <Square w={{ xl: '25%', md: '50%',sm:'50%' }} display='initial'>
                <CollectionCards />
              </Square>
              <Square w={{ xl: '25%', md: '50%',sm:'50%' }} display='initial'>
                <CollectionCards />
              </Square>
              <Square w={{ xl: '25%', md: '50%',sm:'50%' }} display='initial'>
                <CollectionCards />
              </Square>
            </Flex>

          </Box>
        </Container>

      </Box>


    </div>
  )
}

export default myCollection
