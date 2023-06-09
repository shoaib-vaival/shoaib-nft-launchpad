import { Container } from "@chakra-ui/layout"
import CollectionCard from "../components/Cards/CollectionCard"
import CustomSlider from "../components/Slider"
import Link from 'next/link'
import { collectionSliderProp } from "../types/collection"

export const TrendingCollectionInArtSlider = ({data}:collectionSliderProp) =>{

    return (
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }}>
        <CustomSlider name="Trending Collections">
            {data?.map((item, index)=>{
                return <Link href="collection?id=1323232323"><CollectionCard type='withBody' featureImage={item.bannerImageUrl} key={index} isShowFeatureImage={true} isShowLogoImage={false} name={item.name} /></Link>
            })}
          
        </CustomSlider>
      </Container>
    )
}