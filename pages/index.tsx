import type { NextPage } from 'next'
import {Header} from '../src/components/Header'
import {Card, CardBody,Image, Stack,Heading, Text, CardFooter, Button, SimpleGrid, Box} from '@chakra-ui/react'


const Home: NextPage = () => {

  return (
    <div>
      <Header />
      <Card maxW='sm' marginLeft="20px" justifyContent="center" >
  <CardBody display="flex" flexDirection="column" justifyContent="center">
    <Image
      src='/assets/images/nft1.png'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='16px' spacing='3' px="24px">
      <Heading size='20px' fontWeight="700" color="#0D0D0D">Living room Sofa</Heading>
      <SimpleGrid columns={[2, null, 2]} spacing='40px'>
        <Box >
          <Text fontSize="14px" color="#756C99">Volume</Text>
          <Text fontSize="20px" fontWeight="500" color="#393F59">1,118 ETH</Text>
        </Box>
        <Box  >
          <Text fontSize="14px" color="#756C99">Floor Price</Text>
          <Text fontSize="20px" fontWeight="500" color="#393F59">0.003 ETH</Text>
        </Box>
      </SimpleGrid>
    </Stack>
  </CardBody>
  <CardFooter>
      <Button variant='primary' colorScheme='blue' w="100%">
        Buy now
      </Button>
  </CardFooter>
</Card>
    </div>
  )
}

export default Home
