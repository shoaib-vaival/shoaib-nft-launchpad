import type { NextPage } from 'next'
import { Header } from '../src/components/Header'
import CollectionCard from '../src/components/Cards/CollectionCard'
import { Box, Container, Flex, Heading, Text, Button, Square } from '@chakra-ui/react'
import { useQuery } from '../src/hooks/useQuery'
import { Loader } from '../src/components/Loader'


const myCollection: NextPage = () => {

  const {isLoading, data} = useQuery<any>({
    queryKey: ['get-collection'],
    url: 'collection/getCollectionsByWalletAddress/0x0000',
    showToast: false,
  });

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
              {isLoading && data === undefined?<Flex width="100%" height="100%" justifyContent='center' alignItems="center"><Loader/></Flex>:
              data.map((nftCollection, index)=>{
                  return <CollectionCard logoImage = {nftCollection.logoImageUrl} featureImage = {nftCollection.bannerImageUrl} name= {nftCollection.name} volume='-.-' price='-.-'  />
                })
              }
            </Flex>

          </Box>
        </Container>

      </Box>


    </div>
  )
}

export default myCollection
