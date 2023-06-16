import { Container, Image, Text, Flex, Heading, Button, Box, VStack, IconButton, InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer
} from "@chakra-ui/table";
import { NextPage } from 'next';
import CollectionCard from '../src/components/Cards/CollectionCard';
import { SlickSlider } from '../src/components/ReactSlick';
import CustomSlider from '../src/components/Slider';
import { ReactSelect } from '../src/components/common';

const Categories: NextPage = () => {
    return (
        <>
            <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }}>
                <Box pr={{ base: "0", md: "50px" }}>
                    <Heading
                        as="h1"
                        fontSize={{
                            base: "26px",
                            sm: "36px",
                            lg: "42px",
                            xl: "56px",
                        }}
                        mb={{ base: "10px", lg: "24px" }}>
                        Activity
                    </Heading>
                </Box>
                <Flex justifyContent={'end'} alignItems="center" pt='20px' mb='25px' flexWrap='wrap'>
                    <Box order='1'>
                        <IconButton
                            variant='outline'
                            colorScheme='primary'
                            aria-label='Send email'
                            icon={<i className='icon-funnel'></i>}
                        />
                    </Box>
                    <Box order={{ base: '3', sm: '2' }} w={{ base: '100%', sm: 'auto' }} pl={{ base: '0', sm: '8px' }} pt={{ base: '15px', md: '0', xl: '0' }} >
                        <InputGroup variant='custom' colorScheme='purple' w={{ base: "full", sm: "200px", md: 'sm' }} marginBottom={{ base: '3', md: 'initial', xl: 'initial' }} >
                            <Input placeholder='Search...' />
                            <InputLeftElement>
                                <img src='/assets/images/search-icon.svg' />
                            </InputLeftElement>
                        </InputGroup>
                    </Box>
                    <Box width="150px" ml='8px' order={{ base: '2', sm: '3' }}>
                        <ReactSelect options={[{ key: 'Sorty By', value: 'Sort By' }]} isMultiple={false} identifier='filter' getSelectedData={(value: string) => console.log(value)} placeholder="Sort By" />
                    </Box>
                </Flex>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th textAlign="center">ITEM</Th>
                                <Th>RARITY</Th>
                                <Th >From</Th>
                                <Th >To</Th>
                                <Th >TIME</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td p={{ base: '12px', md: '17px 25px' }}>
                                    <Flex gap="2" alignItems="center" mr={{ base: '80px', md: '0' }}>
                                        <Text fontSize='20px' color='#6863F3'><i className="icon-transfer"></i></Text>
                                        <Text fontWeight='700'>Transfer</Text>
                                        <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{ base: '65px', md: '96px' }} h={{ base: '65px', md: '96px' }} />
                                        <VStack spacing="0.5">
                                            <Heading fontSize="18px">Panthera Leo</Heading>
                                            <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
                                        </VStack>
                                    </Flex>
                                </Td>
                                <Td >#667</Td>
                                <Td >John Smith</Td>
                                <Td >CryotoDL</Td>
                                <Td >3m ago</Td>
                            </Tr>
                            <Tr>
                                <Td p={{ base: '12px', md: '17px 25px' }}>
                                    <Flex gap="2" alignItems="center" mr={{ base: '80px', md: '0' }}>
                                        <Text fontSize='20px' color='#6863F3'><i className="icon-transfer"></i></Text>
                                        <Text fontWeight='700'>Transfer</Text>
                                        <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{ base: '65px', md: '96px' }} h={{ base: '65px', md: '96px' }} />
                                        <VStack spacing="0.5">
                                            <Heading fontSize="18px">Panthera Leo</Heading>
                                            <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
                                        </VStack>
                                    </Flex>
                                </Td>
                                <Td >#667</Td>
                                <Td >John Smith</Td>
                                <Td >CryotoDL</Td>
                                <Td >3m ago</Td>
                            </Tr>
                            <Tr>
                                <Td p={{ base: '12px', md: '17px 25px' }}>
                                    <Flex gap="2" alignItems="center" mr={{ base: '80px', md: '0' }}>
                                        <Text fontSize='20px' color='#6863F3'><i className="icon-transfer"></i></Text>
                                        <Text fontWeight='700'>Transfer</Text>
                                        <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{ base: '65px', md: '96px' }} h={{ base: '65px', md: '96px' }} />
                                        <VStack spacing="0.5">
                                            <Heading fontSize="18px">Panthera Leo</Heading>
                                            <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
                                        </VStack>
                                    </Flex>
                                </Td>
                                <Td >#667</Td>
                                <Td >John Smith</Td>
                                <Td >CryotoDL</Td>
                                <Td >3m ago</Td>
                            </Tr>
                            <Tr>
                                <Td p={{ base: '12px', md: '17px 25px' }}>
                                    <Flex gap="2" alignItems="center" mr={{ base: '80px', md: '0' }}>
                                        <Text fontSize='20px' color='#6863F3'><i className="icon-transfer"></i></Text>
                                        <Text fontWeight='700'>Transfer</Text>
                                        <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{ base: '65px', md: '96px' }} h={{ base: '65px', md: '96px' }} />
                                        <VStack spacing="0.5">
                                            <Heading fontSize="18px">Panthera Leo</Heading>
                                            <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
                                        </VStack>
                                    </Flex>
                                </Td>
                                <Td >#667</Td>
                                <Td >John Smith</Td>
                                <Td >CryotoDL</Td>
                                <Td >3m ago</Td>
                            </Tr>
                            <Tr>
                                <Td p={{ base: '12px', md: '17px 25px' }}>
                                    <Flex gap="2" alignItems="center" mr={{ base: '80px', md: '0' }}>
                                        <Text fontSize='20px' color='#6863F3'><i className="icon-transfer"></i></Text>
                                        <Text fontWeight='700'>Transfer</Text>
                                        <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{ base: '65px', md: '96px' }} h={{ base: '65px', md: '96px' }} />
                                        <VStack spacing="0.5">
                                            <Heading fontSize="18px">Panthera Leo</Heading>
                                            <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
                                        </VStack>
                                    </Flex>
                                </Td>
                                <Td >#667</Td>
                                <Td >John Smith</Td>
                                <Td >CryotoDL</Td>
                                <Td >3m ago</Td>
                            </Tr>
                            <Tr>
                                <Td p={{ base: '12px', md: '17px 25px' }}>
                                    <Flex gap="2" alignItems="center" mr={{ base: '80px', md: '0' }}>
                                        <Text fontSize='20px' color='#6863F3'><i className="icon-transfer"></i></Text>
                                        <Text fontWeight='700'>Transfer</Text>
                                        <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{ base: '65px', md: '96px' }} h={{ base: '65px', md: '96px' }} />
                                        <VStack spacing="0.5">
                                            <Heading fontSize="18px">Panthera Leo</Heading>
                                            <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
                                        </VStack>
                                    </Flex>
                                </Td>
                                <Td >#667</Td>
                                <Td >John Smith</Td>
                                <Td >CryotoDL</Td>
                                <Td >3m ago</Td>
                            </Tr>
                            <Tr>
                                <Td p={{ base: '12px', md: '17px 25px' }}>
                                    <Flex gap="2" alignItems="center" mr={{ base: '80px', md: '0' }}>
                                        <Text fontSize='20px' color='#6863F3'><i className="icon-transfer"></i></Text>
                                        <Text fontWeight='700'>Transfer</Text>
                                        <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{ base: '65px', md: '96px' }} h={{ base: '65px', md: '96px' }} />
                                        <VStack spacing="0.5">
                                            <Heading fontSize="18px">Panthera Leo</Heading>
                                            <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
                                        </VStack>
                                    </Flex>
                                </Td>
                                <Td >#667</Td>
                                <Td >John Smith</Td>
                                <Td >CryotoDL</Td>
                                <Td >3m ago</Td>
                            </Tr>
                            <Tr>
                                <Td p={{ base: '12px', md: '17px 25px' }}>
                                    <Flex gap="2" alignItems="center" mr={{ base: '80px', md: '0' }}>
                                        <Text fontSize='20px' color='#6863F3'><i className="icon-transfer"></i></Text>
                                        <Text fontWeight='700'>Transfer</Text>
                                        <Image src="/assets/images/cover-image1.png" boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{ base: '65px', md: '96px' }} h={{ base: '65px', md: '96px' }} />
                                        <VStack spacing="0.5">
                                            <Heading fontSize="18px">Panthera Leo</Heading>
                                            <Text color="rgba(57, 63, 89, 1)" fontSize="14px">Angeli Sunstorm</Text>
                                        </VStack>
                                    </Flex>
                                </Td>
                                <Td >#667</Td>
                                <Td >John Smith</Td>
                                <Td >CryotoDL</Td>
                                <Td >3m ago</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>

            </Container>
        </>
    )

}
export default Categories