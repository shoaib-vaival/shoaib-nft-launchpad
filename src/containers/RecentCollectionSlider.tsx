import { Container, Flex, Heading, Button } from "@chakra-ui/react"
import { SlickSlider } from "../components/ReactSlick"
import CollectionCard from "../components/Cards/CollectionCard"
import Link from 'next/link'
import { collectionSliderProp } from "../types/collection"
import CustomSlider from "../components/Slider"

export const RecentSlider = ({data}:collectionSliderProp) =>{

    return (
          <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }}>
        <CustomSlider name="Featured Collections">
            {data?.map((item, index)=>{
                return <Link href="collection?id=1323232323"><CollectionCard type='withoutBody' featureImage={item.bannerImageUrl} key={index} isShowFeatureImage={true} isShowLogoImage={false} name={item.name} /></Link>
            })}
          
        </CustomSlider>
      </Container>
    )
}