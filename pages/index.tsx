import type { NextPage } from 'next'
import {Header} from '../src/components/Header'

import {Footer} from '../src/components/Footer'

import {Container,Stat, StatLabel, StatHelpText,StatNumber, Card, CardBody,Image, Stack,Heading, Text, Divider, CardFooter, Flex, Button, SimpleGrid, Box, Tabs, TabList, Tab, TabPanels, TabPanel} from '@chakra-ui/react'
import { SlickSlider } from '../src/components/ReactSlick'
import CollectionCard from '../src/components/Cards/CollectionCard'
import { Banner } from '../src/components/Banner'
import {FilterTabs} from '../src/components/FilterTabs'

const Home: NextPage = () => {

  return (
    <div>
      <Header />
      <Box bgImage = '/assets/images/bg-lines.png'>
      <Banner/>
      </Box>
      <Container mt='80px'>
        <Heading>Featured Collections</Heading>
        <SlickSlider >
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          </SlickSlider>
      </Container>
      <Container mt='80px'>
        <Heading>Featured Collections</Heading>
        <SlickSlider >
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          </SlickSlider>
      </Container>
      <Container  mt='80px' >
        <Flex justifyContent = 'space-between' alignItems='center' mb='40px'>
          <Heading>Browse by Categories</Heading>
          <Button variant='primary'>View All</Button>
        </Flex>
      <FilterTabs tabsList = {['All', 'Art', 'Gaming', 'Membership', 'PFPs']} getTabIndex={(index)=>console.log(index)}/>
      </Container>
      <Container  mt='80px' >
        <Flex justifyContent = 'space-between' alignItems='center' mb='40px'>
          <Heading>Trending Collections</Heading>
          <Button variant='primary'>View All</Button>
        </Flex>
       <SlickSlider >
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          </SlickSlider>
      </Container>
      <Container  mt='80px' >
        <Flex justifyContent = 'space-between' alignItems='center' mb='40px'>
          <Heading>Trending in Art</Heading>
          <Button variant='primary'>View All</Button>
        </Flex>
       <SlickSlider >
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          </SlickSlider>
      </Container>
      <Container  mt='80px' >
        <Flex justifyContent = 'space-between' alignItems='center' mb='40px'>
          <Heading>Recent Collections</Heading>
          <Button variant='primary'>View All</Button>
        </Flex>
       <SlickSlider >
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          </SlickSlider>
      </Container>
      <Footer/>
 </div>
  )
}

export default Home
