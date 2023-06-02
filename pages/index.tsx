import type { NextPage } from 'next'
import {Header} from '../src/components/Header'

import {Footer} from '../src/components/Footer'

import {Container,Stat, StatLabel, StatHelpText,StatNumber, Card, CardBody,Image, Stack,Heading, Text, Divider, CardFooter, Flex, Button, SimpleGrid, Box, Tabs, TabList, Tab, TabPanels, TabPanel} from '@chakra-ui/react'
import { SlickSlider } from '../src/components/ReactSlick'
import CollectionCard from '../src/components/Cards/CollectionCard'
import { Banner } from '../src/components/Banner'



const Home: NextPage = () => {

  return (
    <div>
      <Header />
      <Banner/>
      <Container maxW="">
        <SlickSlider >
          <CollectionCard type="withoutBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
          <CollectionCard type="withoutBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
          <CollectionCard type="withoutBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
          <CollectionCard type="withoutBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
          <CollectionCard type="withoutBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
          <CollectionCard type="withoutBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
          <CollectionCard type="withoutBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
          <CollectionCard type="withoutBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
          <CollectionCard type="withoutBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
          </SlickSlider>
      </Container>
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
<Footer/>
<Stat mb="200px">
  <StatLabel>Collected Fees</StatLabel>
  <StatNumber>£0.00</StatNumber>
  <StatHelpText>Feb 12 - Feb 28</StatHelpText>
</Stat>
<Tabs>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>

    </div>
  )
}

export default Home
