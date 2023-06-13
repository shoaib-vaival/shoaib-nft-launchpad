import { Button, IconButton } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input"
import { Container, Flex, Box, Stack, Text, Heading, VStack, Grid } from "@chakra-ui/layout"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu"
import { Stat, StatLabel, StatNumber } from "@chakra-ui/stat"
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table"
import CollectionCard from "../../src/components/Cards/CollectionCard"
import { SlickSlider } from "../../src/components/ReactSlick"



const NftDetail = () => {
  return (
    <>
      <Container maxW={{sm:'xl', md: '3xl', lg: '5xl', xl: '7xl' }} pt={{base:'20px',sm:'40px'}}>
        <Stack direction={{base:'column',lg:'row'}} spacing={{base:'18px',md:'48px'}}  px={{base:'0',sm:'17px'}}>
          <Box w={{base:'100%',lg:'45%' }} maxH={{base:'initial',md:'500px',lg:'650px'}} borderRadius='lg'>
            <Image src="/assets/images/nft2.png" w="100%" h='100%' objectFit='cover' borderRadius='lg'/>
          </Box>
          <Box w={{base:'100%',lg:'55%' }}>
            <Box paddingBottom={{base:'20px',sm:'28px'}} borderBottom="1px solid" borderColor="rgba(53, 53, 53, 0.2)">
              <Flex justifyContent="end">
                <Box>
                  <IconButton color=' #756C99' ml="8px"
                    variant='outline'
                    colorScheme='#6863F3'
                    aria-label='Send'
                    fontSize='20px'
                    icon={<i className="icon-share"></i>}
                  />
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      color='#756C99'
                      ml="8px"
                      variant='outline'
                      colorScheme='#6863F3'
                      aria-label='Send'
                      fontSize='20px'
                      icon={<i className='icon-menu'></i>} >
                      Actions
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Download</MenuItem>
                      <MenuItem>Create a Copy</MenuItem>
                      <MenuItem>Mark as Draft</MenuItem>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              </Flex>
              <Text marginTop="-15px" marginBottom="16px" fontSize='16px'>Angeli Sunstorm</Text>
              <Heading fontSize="32px" marginBottom="10px">Dahlian Kamimusubi</Heading>
              <Stack direction="row" alignItems='center' flexWrap='wrap'>
                <Flex mr="24px" fontSize='16px' >
                  <Text>Owned By </Text>
                  <Text>Alexa Greenholt </Text>
                </Flex>
                <Flex alignItems='center'>
                <Text fontSize='14px' mr='24px'><i className="icon-document-eye"></i>666 Views</Text>
                <Text border='1px solid #6f6bf366' p='2px 4px' borderRadius='6px' color='#393F59' bg='#ffffff5e'  fontSize='14px'><i className="icon-hash"></i>666 Views</Text>
                </Flex>
              </Stack>
            </Box>
            <Box paddingTop={{base:'20px',sm:'32px'}}>
              <Heading fontSize="18px" marginBottom="16px">Description</Heading>
              <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </Text>
              <Button marginTop="10px" marginBottom="20px" bg="transparent" paddingLeft="0px" _hover={{ bg: "transparent" }} fontWeight="600" fontSize="14px" color="#393F59">READ MORE</Button>
              <Heading fontSize="24px" marginBottom="16px">Details</Heading>
              <Box fontSize='16px'>
                <Flex justifyContent="space-between" mb='8px'>
                  <Text color="#756C99">Contract Address</Text>
                  <Text color="#6863F3" mb="auto">0x495f…7b5e</Text>
                </Flex>
                <Flex justifyContent="space-between" mb='8px' >
                  <Text color="#756C99">Token ID</Text>
                  <Text color="#6863F3" mb="auto">0x495f…7b5e</Text>
                </Flex>
                <Flex justifyContent="space-between" mb='8px' >
                  <Text color="#756C99">Token Standard</Text>
                  <Text color="#6863F3" mb="auto">0x495f…7b5e</Text>
                </Flex>
                <Flex justifyContent="space-between"  mb='8px'>
                  <Text color="#756C99">Chain</Text>
                  <Text color="#6863F3" mb="auto">0x495f…7b5e</Text>
                </Flex>
                <Flex justifyContent="space-between"  mb='8px'>
                  <Text color="#756C99">Metadata</Text>
                  <Text color="#6863F3" mb="auto">0x495f…7b5e</Text>
                </Flex>
                <Flex justifyContent="space-between" mb='8px' >
                  <Text color="#756C99">Creator Earnings</Text>
                  <Text color="#6863F3" mb="auto">0x495f…7b5e</Text>
                </Flex>
              </Box>

            </Box>
          </Box>
        </Stack>
        <Stack spacing={{base:'0px',sm:'48px'}} direction="row" px={{base:'0',sm:'17px'}}>
          <Box w={{base:'100%',lg:'45%' }}>
            <Heading fontSize="24px" marginBottom="16px" marginTop="40px">Details</Heading>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap='3'>
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
          <Box w={{base:'0%',lg:'55%' }}></Box>
        </Stack>
        <Flex px={{ base: '0', sm: '17px' }} justifyContent="space-between" alignItems={{base:'flex-start',sm:'center'}} marginBottom="16px" marginTop="40px" flexWrap='wrap' flexDirection={{base:'column',sm:'row'}}>
          <Heading mb={{base:'20px',sm:'0'}} fontSize="24px">Item Activity</Heading>
          <InputGroup variant="custom" w="286px">
            <InputLeftElement pointerEvents='none'>
              <i className="icon-funnel"></i>
            </InputLeftElement>
            <Input type='tel' placeholder='Phone number' />
          </InputGroup>
        </Flex>
        <Box  px={{base:'0',sm:'17px'}}>
        <TableContainer  border="1px solid" borderColor="rgba(111, 107, 243, 0.4)" boxShadow="2px 2px 8px rgba(13, 13, 13, 0.1)" backdropFilter="blur(30px)" borderRadius="16px">
          <Table variant='bordered'>
            <Thead>
              <Tr>
                <Th>Event</Th>
                <Th textAlign="right">Price</Th>
                <Th textAlign="right">From</Th>
                <Th textAlign="right">To</Th>
                <Th textAlign="right">Time</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td p={{base:'12px',md:'17px 25px'}}><Heading size="sm">Transfer</Heading></Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">--ETH</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">VictoriaL</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">Vincent2020.eth</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">23 secs ago</Td>
              </Tr>
              <Tr>
                <Td p={{base:'12px',md:'17px 25px'}}><Heading size="sm">Transfer</Heading></Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">--ETH</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">VictoriaL</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">Vincent2020.eth</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">23 secs ago</Td>
              </Tr>
              <Tr>
                <Td p={{base:'12px',md:'17px 25px'}}><Heading size="sm">Transfer</Heading></Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">--ETH</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">VictoriaL</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">Vincent2020.eth</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">23 secs ago</Td>
              </Tr>
              <Tr>
                <Td p={{base:'12px',md:'17px 25px'}}><Heading size="sm">Transfer</Heading></Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">--ETH</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">VictoriaL</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">Vincent2020.eth</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">23 secs ago</Td>
              </Tr>
              <Tr>
                <Td p={{base:'12px',md:'17px 25px'}}><Heading size="sm">Transfer</Heading></Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">--ETH</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">VictoriaL</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">Vincent2020.eth</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">23 secs ago</Td>
              </Tr>
              <Tr>
                <Td p={{base:'12px',md:'17px 25px'}}><Heading size="sm">Transfer</Heading></Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">--ETH</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">VictoriaL</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">Vincent2020.eth</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">23 secs ago</Td>
              </Tr>
              <Tr>
                <Td p={{base:'12px',md:'17px 25px'}}><Heading size="sm">Transfer</Heading></Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">--ETH</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">VictoriaL</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">Vincent2020.eth</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">23 secs ago</Td>
              </Tr>
              <Tr>
                <Td p={{base:'12px',md:'17px 25px'}}><Heading size="sm">Transfer</Heading></Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">--ETH</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">VictoriaL</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">Vincent2020.eth</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">23 secs ago</Td>
              </Tr>
              <Tr>
                <Td p={{base:'12px',md:'17px 25px'}}><Heading size="sm">Transfer</Heading></Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">--ETH</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">VictoriaL</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">Vincent2020.eth</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">23 secs ago</Td>
              </Tr>
              <Tr>
                <Td p={{base:'12px',md:'17px 25px'}}><Heading size="sm">Transfer</Heading></Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">--ETH</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">VictoriaL</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">Vincent2020.eth</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">23 secs ago</Td>
              </Tr>
              <Tr>
                <Td p={{base:'12px',md:'17px 25px'}}><Heading size="sm">Transfer</Heading></Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">--ETH</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">VictoriaL</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">Vincent2020.eth</Td>
                <Td p={{base:'12px',md:'17px 25px'}} textAlign="right">23 secs ago</Td>
              </Tr>
            </Tbody>

          </Table>
        </TableContainer>

          <Flex px={{ base: '0', sm: '17px' }} justifyContent='space-between' alignItems='center' mb={{ base: '20px', lg: '40px' }} mt={{ base: '40px', lg: '80px' }} >
            <Heading fontSize={{ base: '24px', md: '36px', xl: '48px' }}>More from this Collections</Heading>
            <Button p={{ base: '5px 20px', md: '20px 32px' }} variant='primary'>View All</Button>
          </Flex>
          <SlickSlider>
            <CollectionCard
              type="withBody"
              featureImage="/assets/images/nft1.png"
              isShowFeatureImage={true}
              isShowLogoImage={false}
              name="Peppy Road"
            />
            <CollectionCard
              type="withBody"
              featureImage="/assets/images/nft1.png"
              isShowFeatureImage={true}
              isShowLogoImage={false}
              name="Peppy Road"
            />
            <CollectionCard
              type="withBody"
              featureImage="/assets/images/nft1.png"
              isShowFeatureImage={true}
              isShowLogoImage={false}
              name="Peppy Road"
            />
            <CollectionCard
              type="withBody"
              featureImage="/assets/images/nft1.png"
              isShowFeatureImage={true}
              isShowLogoImage={false}
              name="Peppy Road"
            />
            <CollectionCard
              type="withBody"
              featureImage="/assets/images/nft1.png"
              isShowFeatureImage={true}
              isShowLogoImage={false}
              name="Peppy Road"
            />
            <CollectionCard
              type="withBody"
              featureImage="/assets/images/nft1.png"
              isShowFeatureImage={true}
              isShowLogoImage={false}
              name="Peppy Road"
            />
            <CollectionCard
              type="withBody"
              featureImage="/assets/images/nft1.png"
              isShowFeatureImage={true}
              isShowLogoImage={false}
              name="Peppy Road"
            />
            <CollectionCard
              type="withBody"
              featureImage="/assets/images/nft1.png"
              isShowFeatureImage={true}
              isShowLogoImage={false}
              name="Peppy Road"
            />
            <CollectionCard
              type="withBody"
              featureImage="/assets/images/nft1.png"
              isShowFeatureImage={true}
              isShowLogoImage={false}
              name="Peppy Road"
            />
          </SlickSlider>
          </Box>
      </Container>

    </>
  )
}

export default NftDetail