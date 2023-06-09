import { Button, IconButton } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input"
import { Container, Flex, Box, Stack, Text, Heading, VStack, Grid} from "@chakra-ui/layout"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu"
import { Stat, StatLabel, StatNumber } from "@chakra-ui/stat"
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table"
import CollectionCard from "../../src/components/Cards/CollectionCard"
import { SlickSlider } from "../../src/components/ReactSlick"



const NftDetail = () =>{
    return (
        <>
        <Container>
        <Stack direction="row" spacing="48px">
            <Box w="45%">
            <Image src="/assets/images/nft2.png" w="100%"/>
            </Box>
            <Box w="55%">
                <Box paddingBottom="28px" borderBottom="1px solid" borderColor="rgba(53, 53, 53, 0.2)">
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
                    <Text marginTop="-15px" marginBottom="16px">Angeli Sunstorm</Text>
                    <Heading fontSize="32px" marginBottom="12px">Dahlian Kamimusubi</Heading>
                    <Stack spacing="24px" direction="row">
                        <Flex mr="24px">
                            <Text>Owned By </Text>
                            <Text>Alexa Greenholt </Text>
                        </Flex>
                        <Text><i className="icon-document-eye"></i>666 Views</Text>
                        <Text><i className="icon-hash"></i>666 Views</Text>
                    </Stack>
                </Box>
                <Box paddingTop="32px">
                    <Heading fontSize="18px" marginBottom="16px">Description</Heading>
                    <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </Text>
                    <Button  marginTop="25px" marginBottom="40px" bg="transparent" paddingLeft="0px" _hover={{bg:"transparent"}} fontWeight="600" fontSize="14px" color="#393F59">READ MORE</Button>
                    <Heading fontSize="24px" marginBottom="16px">Details</Heading>
                    <Box overflowY="scroll" height="130px">
                    <Flex justifyContent="space-between">
                        <Text color="#756C99">Contract Address</Text>
                        <Text color="#6863F3" mb="auto">0x495f…7b5e</Text>
                    </Flex>
                    <Flex justifyContent="space-between" >
                        <Text color="#756C99">Token ID</Text>
                        <Text color="#6863F3" mb="auto">0x495f…7b5e</Text>
                    </Flex>
                    <Flex justifyContent="space-between" >
                        <Text color="#756C99">Token Standard</Text>
                        <Text color="#6863F3" mb="auto">0x495f…7b5e</Text>
                    </Flex>
                    <Flex justifyContent="space-between" >
                        <Text color="#756C99">Chain</Text>
                        <Text color="#6863F3" mb="auto">0x495f…7b5e</Text>
                    </Flex>
                    <Flex justifyContent="space-between" >
                        <Text color="#756C99">Metadata</Text>
                        <Text color="#6863F3" mb="auto">0x495f…7b5e</Text>
                    </Flex>
                    <Flex justifyContent="space-between" >
                        <Text color="#756C99">Creator Earnings</Text>
                        <Text color="#6863F3" mb="auto">0x495f…7b5e</Text>
                    </Flex>
                    </Box>

                </Box>
            </Box>
        </Stack>
        <Stack spacing="48px" direction="row">
            <Box w="45%">
                 <Heading fontSize="24px" marginBottom="16px" marginTop="40px">Details</Heading>
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
            <Box w='55%'></Box>
        </Stack>
        <Flex justifyContent="space-between" alignItems="center"  marginBottom="16px" marginTop="40px">
             <Heading fontSize="24px">Item Activity</Heading>
              <InputGroup variant="custom" w="286px">
    <InputLeftElement pointerEvents='none'>
        <i className="icon-funnel"></i>
    </InputLeftElement>
    <Input type='tel' placeholder='Phone number' />
  </InputGroup>
        </Flex>
        <TableContainer border="1px solid" borderColor="rgba(111, 107, 243, 0.4)" boxShadow="2px 2px 8px rgba(13, 13, 13, 0.1)" backdropFilter= "blur(30px)" borderRadius="16px">
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
        <Td><Heading size="sm">Transfer</Heading></Td>
        <Td textAlign="right">--ETH</Td>
        <Td textAlign="right">VictoriaL</Td>
        <Td textAlign="right">Vincent2020.eth</Td>
        <Td textAlign="right">23 secs ago</Td>
      </Tr>
      <Tr>
        <Td><Heading size="sm">Transfer</Heading></Td>
        <Td textAlign="right">--ETH</Td>
        <Td textAlign="right">VictoriaL</Td>
        <Td textAlign="right">Vincent2020.eth</Td>
        <Td textAlign="right">23 secs ago</Td>
      </Tr>
      <Tr>
        <Td><Heading size="sm">Transfer</Heading></Td>
        <Td textAlign="right">--ETH</Td>
        <Td textAlign="right">VictoriaL</Td>
        <Td textAlign="right">Vincent2020.eth</Td>
        <Td textAlign="right">23 secs ago</Td>
      </Tr>
      <Tr>
        <Td><Heading size="sm">Transfer</Heading></Td>
        <Td textAlign="right">--ETH</Td>
        <Td textAlign="right">VictoriaL</Td>
        <Td textAlign="right">Vincent2020.eth</Td>
        <Td textAlign="right">23 secs ago</Td>
      </Tr>
      <Tr>
        <Td><Heading size="sm">Transfer</Heading></Td>
        <Td textAlign="right">--ETH</Td>
        <Td textAlign="right">VictoriaL</Td>
        <Td textAlign="right">Vincent2020.eth</Td>
        <Td textAlign="right">23 secs ago</Td>
      </Tr>
      <Tr>
        <Td><Heading size="sm">Transfer</Heading></Td>
        <Td textAlign="right">--ETH</Td>
        <Td textAlign="right">VictoriaL</Td>
        <Td textAlign="right">Vincent2020.eth</Td>
        <Td textAlign="right">23 secs ago</Td>
      </Tr>
      <Tr>
        <Td><Heading size="sm">Transfer</Heading></Td>
        <Td textAlign="right">--ETH</Td>
        <Td textAlign="right">VictoriaL</Td>
        <Td textAlign="right">Vincent2020.eth</Td>
        <Td textAlign="right">23 secs ago</Td>
      </Tr>
      <Tr>
        <Td><Heading size="sm">Transfer</Heading></Td>
        <Td textAlign="right">--ETH</Td>
        <Td textAlign="right">VictoriaL</Td>
        <Td textAlign="right">Vincent2020.eth</Td>
        <Td textAlign="right">23 secs ago</Td>
      </Tr>
      <Tr>
        <Td><Heading size="sm">Transfer</Heading></Td>
        <Td textAlign="right">--ETH</Td>
        <Td textAlign="right">VictoriaL</Td>
        <Td textAlign="right">Vincent2020.eth</Td>
        <Td textAlign="right">23 secs ago</Td>
      </Tr>
      <Tr>
        <Td><Heading size="sm">Transfer</Heading></Td>
        <Td textAlign="right">--ETH</Td>
        <Td textAlign="right">VictoriaL</Td>
        <Td textAlign="right">Vincent2020.eth</Td>
        <Td textAlign="right">23 secs ago</Td>
      </Tr>
      <Tr>
        <Td><Heading size="sm">Transfer</Heading></Td>
        <Td textAlign="right">--ETH</Td>
        <Td textAlign="right">VictoriaL</Td>
        <Td textAlign="right">Vincent2020.eth</Td>
        <Td textAlign="right">23 secs ago</Td>
      </Tr>
    </Tbody>

  </Table>
        </TableContainer>

  <Container maxW={{sm:'2xl', md: '3xl', lg: '5xl', xl: '8xl' }} mt={{base:'40px',lg:'80px'}} >
        <Flex justifyContent = 'space-between' alignItems='center' mb={{base:'20px',lg:'40px'}}>
          <Heading fontSize={{base:'24px',md:'36px',xl:'48px'}}>More from this Collections</Heading>
          <Button  p= {{base:'5px 10px',md:'20px 32px'}}variant='primary'>View All</Button>
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
      </Container>
        </Container>
        
        </>
    )
}

export default NftDetail