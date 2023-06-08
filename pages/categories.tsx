import { Container, Image, Text, Flex, Heading, Button, Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import CollectionCard from '../src/components/Cards/CollectionCard';
import { SlickSlider } from '../src/components/ReactSlick';
import CustomSlider from '../src/components/Slider';

const Categories: NextPage = () => {
    return (
        <>
            <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }}>
                <Box px={{ base: '0', sm: '17px' }}>
                    <Container p={{base:'24px',sm:'24px 40px' ,md:'48px 84px'}} variant='colorful' position='relative' bgSize='cover' bgImage='/assets/images/cover-image1.png' backgroundRepeat='no-repeat' h='400px'> 
                        <Image src='/assets/images/cover-image1.png' boxSize='100px' objectFit='cover' mt='75px' border='1px solid white' borderRadius='16px' />
                        <Flex alignItems={{base:'baseline',md:'center'}} flexDirection={{base:'column',md:'row'}}>
                            <Box>
                        <Text color='white' marginTop='12px' fontSize={{base:'14px',md:'16px'}}>By John Smith</Text>
                        <Heading color='white' marginTop='8px' marginBottom='10px' fontSize={{base:'24px',sm:'28px',lg:'40px'}}>Mutant Ape Yacht</Heading>
                            <Flex gap='6' alignItems='center'>
                                <Text color='white' fontSize={{base:'14px',md:'16px'}} >By John Smith</Text>
                                <Text color='white' fontSize={{base:'14px',md:'16px'}}>By John Smith</Text>
                            </Flex>
                            </Box>
                            <Button size={{base:'md',lg:'lg'}} mt='20px' color='purple.500' ms={{base:'0',md:'auto'}}>View Collection</Button>
                        </Flex>
                    </Container>
                </Box>
            </Container>
            <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }}>
                <CustomSlider name='Featured Collections'>
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
            <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }}>
                <Flex justifyContent='space-between' alignItems='center' mb='40px'  px={{base:'0',sm:'12px'}}>
                    <Heading fontSize={{ base: '24px', md: '36px', xl: '48px' }}>Trending Collections</Heading>
                    <Button p={{ base: '15px', md: '20px 32px' }} variant='primary'>View All</Button>
                </Flex>
                <SlickSlider >
                    <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
                    <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
                    <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
                    <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
                    <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
                    <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
                    <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
                    <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
                    <CollectionCard type='withBody' featureImage='/assets/images/nft1.png' isShowFeatureImage={true} isShowLogoImage={false} name='Peppy Road' />
                </SlickSlider>
            </Container>
            <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }}>
                <CustomSlider name='Recent Collection'>
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
        </>
    )

}
export default Categories