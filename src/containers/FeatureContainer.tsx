import { Container } from "@chakra-ui/layout"
import CollectionCard from "../components/Cards/CollectionCard"
import CustomSlider from "../components/Slider"
import Link from 'next/link'

type featureSlider ={
    featuredData?:{
        id:string,
        name:string,
        description:string,
        website_url:string,
        etherscan:string,
        telegram:string,
        twitter:string,
        instagram:string,
        discord_id:string,
        logoImageUrl:string,
        bannerImageUrl:string,
        featureImageUrl:string,
        creatorFee:{
            walletAddress:string,
            percentage:string
        }[],
        insertedDate:string,
        updatedDate:string
    }[]
}

export const FeatureSlider = ({featuredData}:featureSlider) =>{

    return (
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }}>
        <CustomSlider name="Featured Collections">
            {featuredData?.map((item, index)=>{
                return <Link href="collection?id=1323232323"><CollectionCard type='withoutBody' featureImage={item.bannerImageUrl} key={index} isShowFeatureImage={true} isShowLogoImage={false} name={item.name} /></Link>
            })}
          
        </CustomSlider>
      </Container>
    )
}