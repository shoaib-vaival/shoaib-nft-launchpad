import { Container, Image, Text, Flex, Heading, Button, Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { ApiUrl } from '../src/apis/apiUrl';
import CollectionCard from '../src/components/Cards/CollectionCard';
import { SlickSlider } from '../src/components/ReactSlick';
import CustomSlider from '../src/components/Slider';
import { QUERY_KEYS } from '../src/hooks/queryKeys';
import { useQuery } from '../src/hooks/useQuery';
import Link from 'next/link'
import { useInfiniteQuery } from '../src/hooks/useInfiniteQuery';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from '../src/components/Loader';
import { getAbortController } from '@tanstack/query-core/build/lib/utils';

const Categories: NextPage = () => {
    const {data:bannerCollection} = useQuery<any>({
        queryKey:[QUERY_KEYS],
        url:ApiUrl.GET_BANNER_COLLECTION,
        token:false
    })
    const {data:allCollections, error, fetchNextPage, status, hasNextPage, isLoading} = useInfiniteQuery<any>({
        queryKey:[QUERY_KEYS.GET_ALL_COLLECTIONS],
        url:ApiUrl.GET_ALL_COLLECTIONS,
    })
    console.log(allCollections)
    return (
        <>
            <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }} mt={{ base: '40px' }}>
                <Box px={{ base: '0', sm: '17px' }}>
                    <Container p={{ base: '24px', sm: '24px 40px', md: '48px 84px' }} variant='colorful' position='relative' bgSize='cover' bgImage={bannerCollection?.bannerImageUrl} backgroundRepeat='no-repeat' h='400px'>
                        <Image src={bannerCollection?.logoImageUrl} boxSize='100px' objectFit='cover' mt='75px' border='1px solid white' borderRadius='16px' />
                        <Flex alignItems={{ base: 'baseline', md: 'center' }} flexDirection={{ base: 'column', md: 'row' }}>
                            <Box>
                                <Text color='white' marginTop='12px' fontSize={{ base: '14px', md: '16px' }}>{bannerCollection?.name}</Text>
                                <Heading color='white' marginTop='8px' marginBottom='10px' fontSize={{ base: '24px', sm: '28px', lg: '40px' }}>{}</Heading>
                                <Flex gap='6' alignItems='center'>
                                    <Text color='white' fontSize={{ base: '14px', md: '16px' }} >8,800 items</Text>
                                    <Text color='white' fontSize={{ base: '14px', md: '16px' }}>0.02 ETH</Text>
                                </Flex>
                            </Box>
                            <Button as={Link} href={`collection/${bannerCollection?.id}`}size={{ base: 'md', lg: 'lg' }} mt='20px' color='purple.500' ms={{ base: '0', md: 'auto' }}>View Collection</Button>
                        </Flex>
                    </Container>
                </Box>
            </Container>

            <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }} mt={{ base: '40px', lg: '80px' }}>
                <Flex justifyContent='space-between' alignItems='center' px={{ base: '0', sm: '12px' }}>
                    <Heading fontSize={{ base: '24px', md: '36px', xl: '48px' }}>Featured Collections</Heading>
                </Flex>
                     <InfiniteScroll
              dataLength={allCollections ? allCollections.length : 0}
              next={() => fetchNextPage()}
              hasMore={!!hasNextPage}
              loader={<Flex width="100%" height="100%" justifyContent='center' alignItems="center"><Loader /></Flex>}
            >
                <Flex flexWrap='wrap' rowGap='16px' pt='24px'>
                {allCollections?.map((collection:any, index:number)=>{
                    return(
                    <Box as={Link} href={`collection/${collection?.id}`} width={{ base: '100%', sm: '50%', md: '33%', xl: '25%' }} display='initial' key={index}>
                        <CollectionCard type="withBody" featureImage={collection?.bannerImageUrl} isShowFeatureImage={true} isShowLogoImage={false} name={collection?.name} />
                    </Box>
                    )
                })}
                </Flex>
                    </InfiniteScroll>
            </Container>
        </>
    )

}
export default Categories