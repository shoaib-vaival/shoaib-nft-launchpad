import type { NextPage } from 'next'
import { Header } from '../src/components/Header'

import { Footer } from '../src/components/Footer'

import { Container, Heading, Flex, Button, Box } from '@chakra-ui/react'
import { SlickSlider } from '../src/components/ReactSlick'
import CollectionCard from '../src/components/Cards/CollectionCard'
import { Banner } from '../src/components/Banner'
import { FilterTabs } from '../src/components/FilterTabs'
import CustomSlider from '../src/components/Slider'

const Home: NextPage = () => {
  return (
    <div>
      <Box position='relative'>
      <Box bgImage='/assets/images/bg-lines.png' position='absolute' left='0' right='0' bottom='-60px'  w='100%' h='100%' bgSize='cover' bgPosition='bottom'></Box>
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '4xl', xl: '7xl' }}>
        <Box px={{ base: '0', sm: '17px' }}>
          <Banner />
        </Box>
      </Container>
      </Box>
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '4xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }}>
        <CustomSlider name="Featured Collections">
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
        </CustomSlider>
      </Container>

      <Container maxW={{ sm: 'xl', md: '3xl', lg: '4xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }}>
        <CustomSlider name="Featured Collections">
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
        </CustomSlider>
      </Container>
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '4xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }} >
        <Flex justifyContent='space-between' alignItems='center' mb='40px' px={{ base: '0', sm: '17px' }}>
          <Heading fontSize={{ base: '24px', md: '36px', xl: '48px' }}>Browse by Categories</Heading>
          <Button p={{ base: '15px', md: '20px 32px' }} variant='primary'>View All</Button>
        </Flex>
        <FilterTabs
          tabsList={["All", "Art", "Gaming", "Membership", "PFPs"]}
          getTabIndex={(index) => console.log(index)}
        />
      </Container>
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '4xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }} >
        <Flex justifyContent='space-between' alignItems='center' mb={{ base: '20px', lg: '40px' }} px={{ base: '0', sm: '17px' }}>
          <Heading fontSize={{ base: '24px', md: '36px', xl: '48px' }}>Trending Collections</Heading>
          <Button p={{ base: '15px', md: '20px 32px' }} variant='primary'>View All</Button>
        </Flex>
        <SlickSlider>
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
        </SlickSlider>
      </Container>
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '4xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }} >
        <Flex justifyContent='space-between' alignItems='center' mb='40px' px={{ base: '0', sm: '17px' }}>
          <Heading>Trending in Art</Heading>
          <Button p={{ base: '15px', md: '20px 32px' }} variant='primary'>View All</Button>
        </Flex>
        <SlickSlider>
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
        </SlickSlider>
      </Container>
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '4xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }} >
        <Flex justifyContent='space-between' alignItems='center' mb='40px' px={{ base: '0', sm: '17px' }}>
          <Heading fontSize={{ base: '24px', md: '36px', xl: '48px' }}>Recent Collections</Heading>
          <Button p={{ base: '15px', md: '20px 32px' }} variant='primary'>View All</Button>
        </Flex>
        <SlickSlider>
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
          <CollectionCard
            type="withBody"
            featureImage="/assets/images/nft1.png"
            isShowFeatureImage={true}
            isShowLogoImage={false}
            name="Peppy Road"
          />
        </SlickSlider>
      </Container>

    </div>
  )
}

export default Home;
