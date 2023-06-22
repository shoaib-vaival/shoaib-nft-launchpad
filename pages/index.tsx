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
import { useEffect } from 'react'
import { collectionForSliderType, getCategoriesApiType } from '../src/types/homePage'
import { categoriesType, collectionType} from '../src/types'
import Link from 'next/link'
import { dashboardApiType } from '../src/types/response.type'
import { Loader } from '../src/components/Loader'

const Home: NextPage = () => {
  const {data, isLoading} = useQuery<dashboardApiType>({
    queryKey:[QUERY_KEYS.GET_DASHBOARD_COLLECTIONS],
    url:ApiUrl.GET_DASHBOARD_COLLECTION,
    showToast:false,
  })
  const {data:categories} = useQuery<categoriesType[]>({
    queryKey:[QUERY_KEYS.GET_CAT],
    url:ApiUrl.GET_CATEGORIES
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
       {isLoading && data === undefined ? <Flex width="100%" height="100%" justifyContent='center' alignItems="center"><Loader /></Flex> :
       <>
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }}>
      <Heading px={{base:'0',sm:'17px'}} fontSize={{base:'24px',md:'36px',xl:'48px'}}>Featured Collections</Heading>
       <SlickSlider>
       { data?.featured && data?.featured.map((item:collectionType, index:number)=>{
                return <Link href={`collection/${item?.id}`} key={index}><CollectionCard type='withoutBody' featureImage={item?.bannerImageUrl}  isShowFeatureImage={true} isShowLogoImage={false} name={item?.name} /></Link>
            })}
        </SlickSlider>
      </Container>
      {/* <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }}>
      <Heading px={{base:'0',sm:'17px'}} fontSize={{base:'24px',md:'36px',xl:'48px'}}>Featured Collections</Heading>
       <SlickSlider>
       { data?.featured && data?.featured.map((item:collectionType, index:number)=>{
                return <Link href={`collection/${item?.id}`} key={index}><CollectionCard type='withBody' featureImage={item?.bannerImageUrl}  isShowFeatureImage={true} isShowLogoImage={false} name={item?.name} /></Link>
            })}
        </SlickSlider>
      </Container> */}
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }} >
        <Flex justifyContent='space-between' alignItems='center' mb='40px' px={{ base: '0', sm: '17px' }}>
          <Heading fontSize={{ base: '28px',sm:'32px', md: '36px', xl: '56px' }}>Browse by Categories</Heading>
          <Button p={{ base: '15px', md: '20px 32px' }} variant='primary'>View All</Button>
        </Flex>
        <FilterTabs
          tabsList={categories}
          getTabIndex={(index) => console.log(index)}
        />
      </Container>
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }}>
            <Flex justifyContent='space-between' alignItems='center' mb={{ base: '20px', lg: '40px' }} px={{ base: '0', sm: '17px' }}>
          <Heading fontSize={{ base: '24px', md: '36px', xl: '48px' }}>Trending Collection</Heading>
          <Button p={{ base: '15px', md: '20px 32px' }} variant='primary'>View All</Button>
        </Flex>
        <SlickSlider>
            {data?.trending?.map((item:collectionType, index:number)=>{
                return <Link href={`collection/${item?.id}`} key={index}><CollectionCard type='withBody' featureImage={item.bannerImageUrl}  isShowFeatureImage={true} isShowLogoImage={false} name={item.name} /></Link>
            })}         
        </SlickSlider>
      </Container>
 <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }}>
            <Flex justifyContent='space-between' alignItems='center' mb={{ base: '20px', lg: '40px' }} px={{ base: '0', sm: '17px' }}>
          <Heading fontSize={{ base: '24px', md: '36px', xl: '48px' }}>Trending in Art</Heading>
          <Button p={{ base: '15px', md: '20px 32px' }} variant='primary'>View All</Button>
        </Flex>
        <SlickSlider>
            {data?.trendingInArt?.map((item:collectionType, index:number)=>{
                return <Link href={`collection/${item?.id}`} key={index}><CollectionCard type='withBody' featureImage={item.bannerImageUrl} isShowFeatureImage={true} isShowLogoImage={false} name={item.name} /></Link>
            })}
          
        </SlickSlider>
      </Container>
       <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }}>
        <CustomSlider name="Recent Collection">
            {data?.recent?.map((item:collectionType, index:number)=>{
                return <Link href={`collection/${item?.id}`}  key={index}><CollectionCard type='withBody' featureImage={item.bannerImageUrl} isShowFeatureImage={true} isShowLogoImage={false} name={item.name} /></Link>
            })}
          
        </CustomSlider>
      </Container>
        </>
          }
    </div>
  )
}

export default Home;
