import { Stack, Box, Container, Image, Text, Heading, IconButton, HStack, Divider, Flex } from '@chakra-ui/react'
import Link from 'next/link';


export const Footer = () => {

  return (
    <>
      <Box bg='#F4F4FE' position='relative' mt={{ base: '40px', lg: '80px' }}>
        <Box bgImage='url(/assets/images/linesBg.png)' bgSize='Cover' bgRepeat='no-repeat' bgPosition='initial' width='100%' height='100%'>

          <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }}>

            <Box pt={{ base: '40px', lg: '80px', xl:'100px' }}  pb='30px'>
              <Stack flexDirection={{base:'column',lg:'row'}} justifyContent='space-between' flexWrap={{md:'wrap',lg:'nowrap'}}>
                <Box pb='8px' maxW='390px'>
                  <Image src='/assets/images/Logo.png' alt='logo' maxW='138' maxH='45px' />

                  <Text mt='24px' color='#756C99'>Empowering the future of web3 with transformative gaming, finance, and governance solutions</Text>
                </Box>

                <Box pb='8px' maxW='390px'>
                  <Heading mb={{base:'16px',lg:'32px'}} fontSize='16px' fontWeight='700' >Marketplace</Heading>
                  <Stack spacing={{base:'16px',lg:'24px'}} fontSize='16px' color='#756C99'>
                    <Link href='#'>Categories</Link>
                    <Link href='#'>Collections</Link>
                  </Stack>
                </Box>
                <Box pb='8px' maxW='390px'>
                  <Heading mb={{base:'16px',lg:'32px'}} fontSize='16px' fontWeight='700' >States</Heading>
                  <Stack spacing={{base:'16px',lg:'24px'}} color='#756C99'>
                    <Link href='#'>States</Link>
                  </Stack>
                </Box>
                <Box pb='8px'>
                  <Heading mb={{base:'16px',lg:'32px'}} fontSize='16px' fontWeight='700' >Follow Us</Heading>
                  <HStack spacing={{base:'7px',lg:'20px',xl:'60px'}}>
                    <Box textAlign='center'>
                      <IconButton color=' #6863F3'
                        variant='transparent'
                        aria-label='Send'
                        fontSize='24px'
                        textAlign='center'
                        display='initial'
                        icon={<i className='icon-twitter'></i>}
                      />
                    </Box>

                    <Box textAlign='center'>
                      <IconButton color=' #6863F3'
                        variant='transparent'
                        aria-label='Send'
                        fontSize='24px'
                        textAlign='center'
                        display='initial'
                        icon={<i className='icon-telegram'></i>}
                      />
                    </Box>
                    <Box textAlign='center'>
                      <IconButton color=' #6863F3'
                        variant='transparent'
                        aria-label='Send'
                        fontSize='24px'
                        textAlign='center'
                        display='initial'
                        icon={<i className=' icon-froggy'></i>}
                      />
                    </Box>
                    <Box textAlign='center'>
                      <IconButton color=' #6863F3'
                        variant='transparent'
                        aria-label='Send'
                        fontSize='24px'
                        textAlign='center'
                        display='initial'
                        icon={<i className='icon-instagram'></i>}
                      />
                    </Box>
                    <Box textAlign='center'>
                      <IconButton color=' #6863F3'
                        variant='transparent'
                        aria-label='Send'
                        fontSize='24px'
                        textAlign='center'
                        display='initial'
                        icon={<i className='icon-medium'></i>}
                      />
                    </Box>
                    <Box textAlign='center'>
                      <IconButton color=' #6863F3'
                        variant='transparent'
                        aria-label='Send'
                        fontSize='24px'
                        textAlign='center'
                        display='initial'
                        icon={<i className='icon-reddit'></i>}
                      />
                    </Box>
                  </HStack>
                </Box>
              </Stack>
            </Box>
            <Divider orientation='horizontal' />
            <Box pb='100px' pt='30px'>
              <Flex flexDirection={{base:'column',md:'row'}} justifyContent='space-between'>
                <Text color='#756C99'>
                  © 2023 Monex Inc. All Rights Reserved. Powered by {' '}
                  <Link color='purple.500' href=''>
                    Ibanera
                  </Link>
                </Text>
                <HStack mt={{base:'20px',md:'0!important'}} spacing='24px' fontSize='16px' color='#756C99' flexDirection='row' alignItems='center'>
                  <Link href='#'>Categories</Link>
                  <Link href='#'>Collections</Link>
                </HStack>
              </Flex>
            </Box>

          </Container >
        </Box>
      </Box>
    </>
  );
}
