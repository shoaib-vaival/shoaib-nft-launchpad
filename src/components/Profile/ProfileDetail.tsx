import { Container, Heading, Flex, Box, Button, Text, Stat, StatLabel, StatNumber, Grid } from "@chakra-ui/react"



const ProfileDetail = () => {
    return (
    <>
    <Container variant='colorful' mt="74px" bg="transparent" pr="0" pt="0">
       <Flex alignItems='center' >

              <Heading as='h4' fontSize='32px'>
                Evelyn Gutierrez
              </Heading>
              <Box mx='12px' color='#6863F3'>
                <i className='icon-tick'></i>
              </Box>
              <Box>
                <Button color='#393F59' bg='transparent' borderRadius='xl' p='7px 8px' fontSize='12px' height='initial' border='2px solid #6863F3'>
                  <Text mr='8px'>0x797970 … 8080</Text> <i className='icon-copy'></i>
                </Button>

              </Box>

            </Flex>
               <Flex flexDirection={{ base: 'column', md: 'column', lg: 'row', xl: 'row' }}>
              <Box w="50%">
                <Box>
                  <Flex flexWrap='wrap'>
                    <Box display='flex' alignItems='center' fontSize='14px' mr='24px' pt='20px' pb='24px'>
                      <Text>Joined:</Text>
                      <Text fontWeight='bold'> Dec 2021</Text>
                    </Box>
                    <Box display='flex' alignItems='center' fontSize='14px' mr='24px'>
                      <Text>Created:</Text>
                      <Text fontWeight='bold'> Dec 2021</Text>
                    </Box>
                    <Box display='flex' alignItems='center' fontSize='14px' mr='24px'>
                      <Text>Created:</Text>
                      <Text fontWeight='bold'> Dec 2021</Text>
                    </Box>
                    <Box display='flex' alignItems='center' fontSize='14px' mr='24px'>
                      <Text>Creator Fee:</Text>
                      <Text fontWeight='bold'> 10%</Text>
                    </Box>
                    <Box display='flex' alignItems='center' fontSize='14px' mr='24px'>
                      <Text>Chain:</Text>
                      <Text fontWeight='bold'> Ethereum</Text>
                    </Box>

                  </Flex>
                </Box>
                <Box>
                  <Text maxW={{ sm: '100%', xl: '90%' }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua. At vero eos et accusam et…
                  </Text>
                </Box>
              </Box>
              <Box w="50%">
                  <Grid templateColumns='repeat(3, 1fr)' gap="3">
               <Stat>
  <StatLabel>Collected Fees</StatLabel>
  <StatNumber>£0.00</StatNumber>
</Stat>
               <Stat>
  <StatLabel>Collected Fees</StatLabel>
  <StatNumber>£0.00</StatNumber>
</Stat>
               <Stat>
  <StatLabel>Collected Fees</StatLabel>
  <StatNumber>£0.00</StatNumber>
</Stat>
               <Stat>
  <StatLabel>Collected Fees</StatLabel>
  <StatNumber>£0.00</StatNumber>
</Stat>
               <Stat>
  <StatLabel>Collected Fees</StatLabel>
  <StatNumber>£0.00</StatNumber>
</Stat>
</Grid>
              </Box>
            </Flex>

    </Container>
    </>
    )
}

export default ProfileDetail