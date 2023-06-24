
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
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { pagePaths } from '../../constants'
import { collectionCardProps } from '../../types/collectionCard';
import { string } from 'yup';


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
  height,
  isEditAble,
  key,
  nftCollectionId,
  isEditable
}: collectionCardProps) => {
  const router = useRouter()
   const [isVisible, setIsVisible] = useState<boolean>(false);
   const onOver = () => {
     setIsVisible(true)
   }
   const onOut = () =>{
     setIsVisible(false)
   }
  if (type === 'withBody') {
    return (
      <div>
        <Container py='12px' px={{base:'0',sm:'12px'}} key={key}>
          <Box >
          <Card maxH={{base:'359px',xl:'459px'}} overflow='hidden' justifyContent='center' p={{base:'0!important',sm:'12px'}} onMouseOver={onOver} onMouseOut={onOut} h={height}>
            <CardBody
              display='flex'
              flexDirection='column'
              justifyContent='center'
            >
            <Box position='relative'  height={{base:'225px',md:'250px',xl:'342px'}} w={{base:'100%',md:'100%',xl:'350px'}} transform= {isVisible&& isEditAble?'translate(0px, -25px)':'translate(0px, 0px)'} transition='.2s ease-in-out'>
                {isShowFeatureImage && (
                  <Image
                    src={featureImage}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    w='100%'
                    h='100%'
                    objectFit='cover'



                  />
                )}

                  {isShowLogoImage && (
                <Box
                  position='absolute'
                  bottom='-16px'
                  left='24px'
                  border='1px solid #fff'
                  borderRadius='16px'
                      w={88}
                      h={88}
                >
                    <Image
                      src={
                        logoImage
                          ? logoImage
                          : '/assets/images/RectangleCardImg.png'
                      }
                      alt='Green double couch with wooden legs'
                      w='100%'
                      h='100%'
                      borderRadius='16px'
                      objectFit='cover'
                    />
                </Box>
                  )}
              </Box>
              <Stack pt='24px' spacing='3'  px={{base:'24px',sm:'16px',lg:'24px'}}  transition='.2s' transform= {isVisible && isEditAble?'translate(0px, -20px)':'translate(0px, 0px)'} pb='24px'>
                <Heading size='20px' fontWeight='700' color='#0D0D0D'>
                  {name}
                </Heading>
                <SimpleGrid columns={[2, null, 2]} spacing='40px'>
                  <Box>
                    <Text fontSize='14px' color='#756C99' mb='8px'>
                      Volume
                    </Text>
                    <Text fontSize='20px' fontWeight='500' color='#393F59'>
                      {volume?volume:'--'} Matic
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize='14px' color='#756C99' mb='8px'>
                      Floor Price
                    </Text>
                    <Text fontSize='20px' fontWeight='500' color='#393F59'>
                      {price?price:'--'} Matic
                    </Text>
                  </Box>
                </SimpleGrid>
              </Stack>
            </CardBody>
            <CardFooter transition='.4s'   h= {isVisible && isEditAble?'auto':'0'} transform= {isVisible && isEditAble?{base:'translate(0px, -48px)',md:'translate(0px, -50px)'}:'translate(0px, 0px)'} >
            { isEditAble?
                        <Button transition='.4s' h='100%'  variant='primary' colorScheme='blue' w='100%' onClick={()=>router.push(`${pagePaths?.COLLECTION}?id=${nftCollectionId}`)}>
                            Edit Collection
                        </Button>
                        
          
                    :''} 
                    </CardFooter>
          </Card>
          </Box>
        </Container>
      </div>
    );
  }
  if (type === 'withoutBody') {
    return (
      <Container py='12px' px={{base:'0',sm:'12px'}}>
        <Card maxW='sm' justifyContent='center' overflow='hidden' p={{base:'0!important',sm:'12px'}}>
          <CardBody
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems="center"
          >
            <Box position='relative'  height={{base:'225px',md:'250px',xl:'342px'}} maxW={{base:'100%',md:'initial',xl:'350px'}} w="100%" >
              {isShowFeatureImage && (
                <Image
                  src={featureImage}
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  w='100%'
                  h='100%'
                  objectFit='cover'
                />
              )}
              <Box position='absolute' bottom='32px' px={{base:'16px',md:'32px'}} w='100%'>
                <Heading size='20px' fontWeight='700' color='white'>
                  {name}
                </Heading>
              </Box>
            </Box>
          </CardBody>
        </Card>
      </Container>
    );
  }
  return <></>;
};

export default CollectionCard;
