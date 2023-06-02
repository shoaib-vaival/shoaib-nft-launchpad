

import { Container, Flex, Image,VStack, Heading, Text, Button , Box} from '@chakra-ui/react'

export const Banner = ()=>{
    return(
        <Container variant='colorful' maxW={{ sm: '4xl', lg: '6xl', xl: '8xl' }} position="relative" >
            <Box position="absolute" bottom="0px" left="0px" opacity="0.4">
            <Image src = '/assets/images/banner-lines.png'/>
            </Box>
            <Flex justifyContent='space-between'>
                <VStack alignItems="start" width="60%" spacing="6">
                    <Heading mt="28px" color="white" fontSize="64px" textShadow="10px 10px 20px rgba(13, 13, 13, 0.3)"><span style={{fontWeight:'500'}}>Mint</span> NFTs, Collections</Heading>
                    <Text color="white" fontSize="24px">
                        We are an all-in-one innovative minting platform that provides you seamless and user-friendly blockchain experience.
                    </Text>
                    <Button mt="50px" color="#6863F3">Start Minting</Button>
                </VStack>
                <Image src='/assets/images/banner-block.png'/>
            </Flex>
        </Container>
    )
}