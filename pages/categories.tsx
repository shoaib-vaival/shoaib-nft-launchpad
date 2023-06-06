import { Container, Image,  Text, Flex, Heading, Button } from "@chakra-ui/react";
import { NextPage } from "next";
import CollectionCard from "../src/components/Cards/CollectionCard";
import { SlickSlider } from "../src/components/ReactSlick";
import CustomSlider from "../src/components/Slider";

const Categories:NextPage = () =>{
    return(
        <>
        <Container variant='colorful' position="relative" bgSize="cover" bgImage="/assets/images/cover-image1.png" backgroundRepeat="no-repeat" h="400px">
            <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' mt="108px" border="1px solid white" borderRadius="16px"/>
            <Text color="white" marginTop="12px">By John Smith</Text>
            <Heading color="white" marginTop="8px" marginBottom="12px">Mutant Ape Yacht</Heading>
            <Flex gap="6" alignItems="center">
                <Text color="white" >By John Smith</Text>
                <Text color="white" >By John Smith</Text>
               <Button  size="lg" color="purple.500" ms="auto">View Collection</Button>
            </Flex>
        </Container>
        <Container mt='80px'>
       <CustomSlider name="Featured Collections">
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withoutBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          </CustomSlider>
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
       <CustomSlider name="Recent Collection">
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage = {true} isShowLogoImage={false} name='Peppy Road'/>
          </CustomSlider>
      </Container>
        </>
    )

}
export default Categories