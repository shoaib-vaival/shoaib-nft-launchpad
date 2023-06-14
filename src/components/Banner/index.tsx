
import { useState } from "react";
import { Container, Flex, Image, VStack, Heading, Text, Button, Box, Icon } from '@chakra-ui/react'

export const Banner = () => {

    const [isVisible, setIsVisible] = useState<boolean>();

    const over = () => {
        setIsVisible(true);
    }
    const out = () => {
        setIsVisible(false);
    }
    return (
        <Container variant='colorful' position='relative' padding={{ base: '25px', md: '25px 54px' }}>
            <Box position='absolute' bottom='0px' left='0px' opacity='0.4' >
                <Image src='/assets/images/banner-lines.png' />
            </Box>
            <Flex justifyContent='space-between' flexWrap='wrap'>
                <VStack alignItems='start' width={{ md: '100%', xl: '60%' }} spacing={{ base: '4', lg: '6' }} >
                    <Heading mt={{ md: '15px', xl: '28px' }} color='white' fontSize={{ base: '32px', md: '48px', xl: '64px' }} textShadow='10px 10px 20px rgba(13, 13, 13, 0.3)'><span style={{ fontWeight: '500' }}>Mint</span> NFTs, Collections</Heading>
                    <Text color='white' fontSize={{ md: '20px', xl: '24px' }}>
                        We are an all-in-one innovative minting platform that provides you seamless and user-friendly blockchain experience.
                    </Text>
                    <Flex alignItems='center'>
                    <Button mt={{ md: '0px', xl: '50px' }} color='#6863F3' textTransform='uppercase' p={{base:'18px 26px',md:'23px 32px'}} _hover={{ transitionDuration: '0.2s',transitionTimingFunction: "ease-in-out"}}
                        onMouseOver={over} onMouseOut={out}>Start Minting <Box ml='5px' color="#6863F3"  transform={isVisible ? 'translateX(5px)' : 'translateX(-5px)'} display={isVisible ? "block" : "none"}><i className="icon-right"></i></Box></Button>
                    
                    </Flex>
                </VStack>
                <Image display={{ base: 'none', xl: 'block' }} src='/assets/images/banner-block.png' />
            </Flex>
        </Container>
    )
}