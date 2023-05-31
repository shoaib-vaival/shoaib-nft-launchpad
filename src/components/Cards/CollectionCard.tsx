import type { NextPage } from 'next'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, SimpleGrid, Box, Container, Flex } from '@chakra-ui/react'


const CollectionCards: NextPage = () => {


    return (
        <div>
            
            <Container py='12px'>
            <Card maxW='sm' justifyContent="center" overflow='hidden'>
                <CardBody display="flex" flexDirection="column" justifyContent="center">
                    <Box position='relative'>
                    <Image
                        src='/assets/images/nft1.png'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg' w='100%'/>
                        
                        <Box position='absolute' bottom='-16px' left='24px'  border='1px solid #fff'>
                            <Image 
                            src='/assets/images/RectangleCardImg.png'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg' maxW={88} maxH={88} />
                        </Box>
                        </Box>
                    <Stack pt='32px' spacing='3' px="24px">
                        <Heading size='20px' fontWeight="700" color="#0D0D0D">Kaka Deuterium</Heading>
                        <SimpleGrid columns={[2, null, 2]} spacing='40px'>
                            <Box >
                                <Text fontSize="14px" color="#756C99">Volume</Text>
                                <Text fontSize="20px" fontWeight="500" color="#393F59">1,118 ETH</Text>
                            </Box>
                            <Box>
                                <Text fontSize="14px" color="#756C99">Floor Price</Text>
                                <Text fontSize="20px" fontWeight="500" color="#393F59">0.003 ETH</Text>
                            </Box>
                        </SimpleGrid>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <Button variant='primary' colorScheme='blue' w="100%">
                        Buy now
                    </Button>
                </CardFooter>
            </Card>
            </Container>
        </div>
    )
}

export default CollectionCards