import { Container, Heading, Flex, Box, Button, Text, Stat, StatLabel, StatNumber, Grid } from '@chakra-ui/react'

type  profileDetailProps = {
  showStats:boolean
}
const ProfileDetail = ({showStats}:profileDetailProps) => {
  return (
    <>
      <Container pl={{base:'0', md:'54px'}} mt='24px'  pr='0' pt='0'>
        <Flex alignItems={{base:'baseline',md:'center'}} flexDirection={{base:'column',sm:'row'}} >
          <Flex alignItems='center'>
            <Heading as='h4' fontSize={{base:'26px',md:'32px'}}>
              Evelyn Gutierrez
            </Heading>
            <Box mx='12px' color='#6863F3'>
              <i className='icon-tick'></i>
            </Box>
          </Flex>
          <Box>
            <Button color='#393F59' bg='transparent' borderRadius='xl' p='7px 8px' m={{base:'10px 0',md:'initial'}} fontSize='12px' height='initial' border='2px solid #6863F3'>
              <Text mr='8px'>0x797970 … 8080</Text> <i className='icon-copy'></i>
            </Button>

          </Box>

        </Flex>
        <Flex flexDirection={{ base: 'column', md: 'column', lg: 'row', xl: 'row' }}>
          <Box w={{base:'100%',lg:'50%'}} mb={{base:'20px',lg:'initial'}}>
            <Box>
              <Flex flexWrap='wrap' mb={{base:'4px',md:'initial'}}>
                <Box display='flex' alignItems='center' fontSize='14px' mr={{base:'10px',md:'24px'}} pt={{base:'10px',md:'20px'}} pb={{base:'5px',md:'24px'}}>
                  <Text>Joined:</Text>
                  <Text fontWeight='bold' color='#090C3D'> Dec 2021</Text>
                </Box>
                <Box display='flex' alignItems='center' fontSize='14px' mr={{base:'10px',md:'24px'}} pt={{base:'10px',md:'20px'}} pb={{base:'5px',md:'24px'}}>
                  <Text>Created:</Text>
                  <Text fontWeight='bold' color='#090C3D'> Dec 2021</Text>
                </Box>
                <Box display='flex' alignItems='center' fontSize='14px' mr={{base:'10px',md:'24px'}} pt={{base:'10px',md:'20px'}} pb={{base:'5px',md:'24px'}}>
                  <Text>Created:</Text>
                  <Text fontWeight='bold' color='#090C3D'> Dec 2021</Text>
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
          {showStats &&
          <Box w={{base:'100%',lg:'50%'}}  mb={{base:'20px',lg:'initial'}}>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap='3'>
              <Stat>
                <StatLabel>Total Volume</StatLabel>
                <StatNumber>-- Eth</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Floor Price</StatLabel>
                <StatNumber>-- Eth</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Items Listed</StatLabel>
                <StatNumber>--%</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Owners</StatLabel>
                <StatNumber>--</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Unique Owners</StatLabel>
                <StatNumber>--%</StatNumber>
              </Stat>
            </Grid>
          </Box>
          }
        </Flex>

      </Container>
    </>
  )
}

export default ProfileDetail