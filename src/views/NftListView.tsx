import { Image } from "@chakra-ui/image"
import { Flex, Heading, Text, VStack } from "@chakra-ui/layout"
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table"

type nftListProp = {
    data:[]
}
export const NftListView = ({data}:nftListProp) => {
    return (
        <>
        <TableContainer>
                    <Table variant='simple'>
                      <Thead>
                        <Tr>
                          <Th textAlign="center">ITEM</Th>
                          <Th>RARITY</Th>
                          <Th >LAST Transfer</Th>
                          <Th >OWNER</Th>
                          <Th >TIME</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td p={{base:'12px',md:'17px 25px'}}>
                            <Flex gap="2"  alignItems="center" mr='48px'>
                              <Image src='' boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
                              <VStack spacing="0.5">
                                <Heading fontSize="18px">Panthera Leo</Heading>
                                <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
                              </VStack>
                            </Flex>
                          </Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >#667</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >John Smith</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >CryotoDL</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >3m ago</Td>
                        </Tr>
                        <Tr>
                          <Td p={{base:'12px',md:'17px 25px'}}>
                            <Flex gap="2"  alignItems="center" mr='48px'>
                              <Image src="/assets/images/cover-image1.png"  objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'65px',md:'96px'}} h={{base:'65px',md:'96px'}} />
                              <VStack spacing="0.5">
                                <Heading fontSize="18px">Panthera Leo</Heading>
                                <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
                              </VStack>
                            </Flex>
                          </Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >#667</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >John Smith</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >CryotoDL</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >3m ago</Td>
                        </Tr>
                        <Tr>
                          <Td p={{base:'12px',md:'17px 25px'}}>
                            <Flex gap="2" alignItems="center" mr='48px'>
                              <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
                              <VStack spacing="0.5">
                                <Heading fontSize="18px">Panthera Leo</Heading>
                                <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
                              </VStack>
                            </Flex>
                          </Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >#667</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >John Smith</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >CryotoDL</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >3m ago</Td>
                        </Tr>
                        <Tr>
                          <Td p={{base:'12px',md:'17px 25px'}}>
                            <Flex gap="2" alignItems="center" mr='48px'>
                              <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
                              <VStack spacing="0.5">
                                <Heading fontSize="18px">Panthera Leo</Heading>
                                <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
                              </VStack>
                            </Flex>
                          </Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >#667</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >John Smith</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >CryotoDL</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >3m ago</Td>
                        </Tr>
                        <Tr>
                          <Td p={{base:'12px',md:'17px 25px'}}>
                            <Flex gap="2" alignItems="center">
                              <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
                              <VStack spacing="0.5">
                                <Heading fontSize="18px">Panthera Leo</Heading>
                                <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
                              </VStack>
                            </Flex>
                          </Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >#667</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >John Smith</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >CryotoDL</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >3m ago</Td>
                        </Tr>
                        <Tr>
                          <Td p={{base:'12px',md:'17px 25px'}}>
                            <Flex gap="2" alignItems="center">
                              <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
                              <VStack spacing="0.5">
                                <Heading fontSize="18px">Panthera Leo</Heading>
                                <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
                              </VStack>
                            </Flex>
                          </Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >#667</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >John Smith</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >CryotoDL</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >3m ago</Td>
                        </Tr>
                        <Tr>
                          <Td p={{base:'12px',md:'17px 25px'}}>
                            <Flex gap="2" alignItems="center" mr='48px'>
                              <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
                              <VStack spacing="0.5">
                                <Heading fontSize="18px">Panthera Leo</Heading>
                                <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
                              </VStack>
                            </Flex>
                          </Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >#667</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >John Smith</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >CryotoDL</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >3m ago</Td>
                        </Tr>
                        <Tr>
                          <Td p={{base:'12px',md:'17px 25px'}}>
                            <Flex gap="2" alignItems="center" mr='48px'>
                              <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{base:'50px',md:'96px'}} h={{base:'50px',md:'96px'}} />
                              <VStack spacing="0.5">
                                <Heading fontSize="18px">Panthera Leo</Heading>
                                <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
                              </VStack>
                            </Flex>
                          </Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >#667</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >John Smith</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >CryotoDL</Td>
                          <Td p={{base:'12px',md:'17px 25px'}} >3m ago</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
        </>
    )
}