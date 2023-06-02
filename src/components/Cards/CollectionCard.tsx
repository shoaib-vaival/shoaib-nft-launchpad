import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  SimpleGrid,
  Box,
  Container,
  Flex,
} from "@chakra-ui/react";

type collectionCard = {
  type?: string;
  featureImage?: string;
  logoImage?: string;
  name?: string;
  volume?: string;
  price?: string;
  isShowFeatureImage?: boolean;
  isShowLogoImage?: boolean;
  isShowBody?: boolean;
  isShowHeading?: boolean;
  isShowSubHeading?: boolean;
};

const CollectionCard = ({
  type,
  featureImage,
  logoImage,
  name,
  volume,
  price,
  isShowFeatureImage,
  isShowLogoImage,
  isShowBody,
}: collectionCard) => {
  if (type === "withBody") {
    return (
      <div>
        <Container py="12px">
          <Card maxW="sm" justifyContent="center" overflow="hidden">
            <CardBody
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Box position="relative">
                {isShowFeatureImage && (
                  <Image
                    src={featureImage}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                    w="100%"
                  />
                )}

                <Box
                  position="absolute"
                  bottom="-16px"
                  left="24px"
                  border="1px solid #fff"
                >
                  {isShowLogoImage && (
                    <Image
                      src={
                        logoImage
                          ? logoImage
                          : "/assets/images/RectangleCardImg.png"
                      }
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                      maxW={88}
                      maxH={88}
                    />
                  )}
                </Box>
              </Box>
              <Stack pt="16px" spacing="3" px="24px" pb="24px">
                <Heading size="20px" fontWeight="700" color="#0D0D0D">
                  {name}
                </Heading>
                <SimpleGrid columns={[2, null, 2]} spacing="40px">
                  <Box>
                    <Text fontSize="14px" color="#756C99">
                      Volume
                    </Text>
                    <Text fontSize="20px" fontWeight="500" color="#393F59">
                      {volume}
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize="14px" color="#756C99">
                      Floor Price
                    </Text>
                    <Text fontSize="20px" fontWeight="500" color="#393F59">
                      {price}
                    </Text>
                  </Box>
                </SimpleGrid>
              </Stack>
            </CardBody>
            {/* <CardFooter>
                        <Button variant='primary' colorScheme='blue' w="100%">
                            Buy now
                        </Button>
                    </CardFooter> */}
          </Card>
        </Container>
      </div>
    );
  }
  if (type === "withoutBody") {
    return (
      <Container py="12px">
        <Card maxW="sm" justifyContent="center" overflow="hidden">
          <CardBody
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box position="relative">
              {isShowFeatureImage && (
                <Image
                  src={featureImage}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  w="100%"
                />
              )}
              <Box position="absolute" bottom="32px" px="32px" w="100%">
                <Heading size="20px" fontWeight="700" color="white">
                  {name}
                </Heading>
              </Box>
            </Box>

            {/* <Box position='absolute' bottom='-16px' left='24px'  border='1px solid #fff'>
                                {isShowLogoImage &&
                                <Image 
                                src={logoImage?logoImage:'/assets/images/RectangleCardImg.png'}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg' maxW={88} maxH={88} />
                                }
                            </Box>
                            </Box>
                        <Stack pt='16px' spacing='3' px="24px" pb="24px">
                            <Heading size='20px' fontWeight="700" color="#0D0D0D">{name}</Heading>
                            <SimpleGrid columns={[2, null, 2]} spacing='40px'>
                                <Box >
                                    <Text fontSize="14px" color="#756C99">Volume</Text>
                                    <Text fontSize="20px" fontWeight="500" color="#393F59">{volume}</Text>
                                </Box>
                                <Box>
                                    <Text fontSize="14px" color="#756C99">Floor Price</Text>
                                    <Text fontSize="20px" fontWeight="500" color="#393F59">{price}</Text>
                                </Box>
                            </SimpleGrid>
                        </Stack> */}
          </CardBody>
          {/* <CardFooter>
                        <Button variant='primary' colorScheme='blue' w="100%">
                            Buy now
                        </Button>
                    </CardFooter> */}
        </Card>
      </Container>
    );
  }
  return <></>;
};

export default CollectionCard;
