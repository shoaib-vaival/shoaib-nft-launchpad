import type { NextPage } from 'next'
import { Header } from '../src/components/Header'

import { Footer } from '../src/components/Footer'

import { Container, Heading, Flex, Button, Box } from '@chakra-ui/react'
import { SlickSlider } from '../src/components/ReactSlick'
import CollectionCard from '../src/components/Cards/CollectionCard'
import { Banner } from '../src/components/Banner'
import { FilterTabs } from '../src/components/FilterTabs'
import CustomSlider from '../src/components/Slider'
import { useQuery } from '../src/hooks/useQuery'
import { QUERY_KEYS } from '../src/hooks/queryKeys'
import { ApiUrl } from '../src/apis/apiUrl'
import { FeatureSlider } from '../src/containers/FeatureContainer'
import { useEffect } from 'react'
import { RecentSlider } from '../src/containers/RecentCollectionSlider'
import { TrendingSlider } from '../src/containers/TrendingCollectionSlider'
import { TrendingCollectionInArtSlider } from '../src/containers/TrendingCollectionInArt'

const Home: NextPage = () => {
  const {data, isLoading} = useQuery<any>({
    queryKey:[QUERY_KEYS.GET_DASHBOARD_COLLECTIONS],
    url:ApiUrl.GET_DASHBOARD_COLLECTION,
    showToast:false
  })
  return (
    <div>
      <Box position='relative'>
      <Box bgImage='/assets/images/bg-lines.png' position='absolute' left='0' right='0' bottom='-60px'  w='100%' h='100%' bgSize='cover' bgPosition='bottom'></Box>
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }}>
        <Box px={{ base: '0', sm: '17px' }}>
          <Banner />
        </Box>
      </Container>
      </Box>

      <FeatureSlider data={data?.featured}/>
      <FeatureSlider data={data?.featured}/>
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }} >
        <Flex justifyContent='space-between' alignItems='center' mb='40px' px={{ base: '0', sm: '17px' }}>
          <Heading fontSize={{ base: '24px', md: '36px', xl: '48px' }}>Browse by Categories</Heading>
          <Button p={{ base: '15px', md: '20px 32px' }} variant='primary'>View All</Button>
        </Flex>
        <FilterTabs
          tabsList={["All", "Art", "Gaming", "Membership", "PFPs"]}
          getTabIndex={(index) => console.log(index)}
        />
      </Container>
      <TrendingSlider data={data?.trending}/>
      <TrendingCollectionInArtSlider data = {data?.trendingInArt}/>
      <RecentSlider data={data?.recent}/>
    

    </div>
  )
}

export default Home;
