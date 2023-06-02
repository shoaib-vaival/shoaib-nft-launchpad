import { Stack, Box, Container, Image, Text, Heading, IconButton } from '@chakra-ui/react'
import Link from 'next/link';


export const Footer = () => {

  return (
    <>
      <Container maxW={{ sm: '4xl', lg: '6xl', xl: '8xl' }}>

        <Box py={30}>
          <Stack flexDirection='row'>
            <Box pb='8px'>
              <Image src='/assets/images/Logo.png' alt='logo' maxW='138' maxH='45px' />

              <Text mt='24px'>Empowering the future of web3 with transformative gaming, finance, and governance solutions</Text>
            </Box>

            <Box pb='8px'>
              <Heading mb='32px' fontSize='16px'fontWeight='700' >Marketplace</Heading>
              <Stack spacing='24px'>
              <Link href='#'>Categories</Link>
              <Link href='#'>Collections</Link>
              </Stack>
            </Box>
            <Box pb='8px'>
              <Heading mb='32px' fontSize='16px'fontWeight='700' >States</Heading>
              <Stack spacing='24px' fontSize='16px'>
              <Link href='#'>States</Link>
              </Stack>
            </Box>
            <Box pb='8px'>
              <Heading mb='32px' fontSize='16px'fontWeight='700' >Follow Us</Heading>
              <HStack float='right' pt='8px'>
                <Box textAlign='center'>
                  <IconButton color=' #756C99'
                    variant='outline'
                    colorScheme='#6863F3'
                    aria-label='Send'
                    fontSize='20px'
                    icon={<i className='icon-internet'></i>}
                  />
                </Box>
                <Box textAlign='center'>
                  <IconButton color=' #756C99'
                    variant='outline'
                    colorScheme='#6863F3'
                    aria-label='Send email'
                    fontSize='20px'
                    icon={<i className=' icon-froggy'></i>}
                  />
                </Box>
                <Box textAlign='center'>
                  <IconButton color=' #756C99'
                    variant='outline'
                    colorScheme='#6863F3'
                    aria-label='Send email'
                    fontSize='20px'
                    icon={<i className='icon-instagram'></i>}
                  />
                </Box>
                <Box textAlign='center'>
                  <IconButton color=' #756C99'
                    variant='outline'
                    colorScheme='#6863F3'
                    aria-label='Send email'
                    fontSize='20px'
                    textAlign='center'
                    display='initial'
                    icon={<i className='icon-twitter'></i>}
                  />
                </Box>
                <Box textAlign='center'>
                  <IconButton color=' #756C99'
                    variant='outline'
                    colorScheme='#6863F3'
                    aria-label='Send email'
                    fontSize='20px'
                    icon={<i className='icon-groupbar'></i>}
                  />
                </Box>
                <Box textAlign='center'>
                  <IconButton color=' #756C99'
                    variant='outline'
                    colorScheme='6863F3'
                    aria-label='Send email'
                    fontSize='20px'
                    icon={<i className='icon-share'></i>}
                  />
                </Box>
                <Box textAlign='center'>
                  <IconButton color=' #756C99'
                    variant='outline'
                    colorScheme='6863F3'
                    aria-label='Send email'
                    fontSize='20px'
                    icon={<i className='icon-telegram'></i>}
                  />
                </Box>
              </HStack>
            </Box>
          </Stack>
        </Box>


      </Container >
    </>
  );
}
