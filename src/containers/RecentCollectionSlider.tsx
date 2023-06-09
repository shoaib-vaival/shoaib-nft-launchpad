import { Container, Flex, Heading, Button } from "@chakra-ui/react"
import { SlickSlider } from "../components/ReactSlick"
import CollectionCard from "../components/Cards/CollectionCard"
import Link from 'next/link'
import { collectionSliderProp } from "../types/collection"

export const RecentSlider = ({data}:collectionSliderProp) =>{

    return (
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }}>
            <Flex justifyContent='space-between' alignItems='center' mb={{ base: '20px', lg: '40px' }} px={{ base: '0', sm: '17px' }}>
          <Heading fontSize={{ base: '24px', md: '36px', xl: '48px' }}>Recent Collections</Heading>
          <Button p={{ base: '15px', md: '20px 32px' }} variant='primary'>View All</Button>
        </Flex>
        <SlickSlider>
            {data?.map((item, index)=>{
                return <Link href="collection?id=1323232323"><CollectionCard type='withBody' featureImage={item.bannerImageUrl} key={index} isShowFeatureImage={true} isShowLogoImage={false} name={item.name} /></Link>
            })}
          
        </SlickSlider>
      </Container>
    )
}