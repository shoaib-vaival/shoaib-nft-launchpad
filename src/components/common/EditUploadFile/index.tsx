import { Box, Container, Flex, FormControl, FormLabel, Icon, Image, Input, Text } from "@chakra-ui/react"
import { useState } from "react";

export const EditUploadFile = ({FileUploadOverlay}:{FileUploadOverlay?: boolean}) => {
  const [isVisible, setIsVisible] = useState<boolean>();

  const over = () => {
      setIsVisible(true);
  }
  const out = () => {
      setIsVisible(false);
  }
  return (
    <>
      <Box p="0" position='relative' _hover={{ transitionDuration: '0.2s'}}
          onMouseOver={over} onMouseOut={out}>
        <Box  overflow='hidden' borderRadius='16px' h={{ base: '250px', md: '358px' }} >
          <Image src="/assets/images/cover-image1.png" w='100%' h='100%' objectFit='cover' />
        </Box>
        {FileUploadOverlay &&
          <FormControl  display={isVisible ? "block" : "none"} position='absolute' top='0' m='0' p='20px'>
            <FormLabel htmlFor="image" fontSize='48px' color='#fff' borderRadius='16px' width="100%" h={{ base: '215px', md:"315px"}} bg="#6863f3cc" zIndex="999" m='0!important'>
              <Input type="file" id="image" w='100%' h='100%' border='0' hidden />
              <Flex alignItems='center' justifyContent='center' h='100%'>
                <Box textAlign='center' fontSize={{base:'30px',md:'48px'}} color='#fff' >
                  <i className="icon-image"></i>
                  <Text fontSize={{base:'15px',md:'20px'}}>
                    Edit Your Profile Cover
                  </Text>
                </Box>
              </Flex>
            </FormLabel>

          </FormControl>
        }
        <Box w={{ base: '100px',sm:'150px', md: '200px' }} h={{ base: '100px',sm:'150px', md: '200px' }} borderRadius="16px" border="2px solid white" position="absolute" left='5%' bottom={{base:'-30%', sm:'-43%' ,md:'-45%'}} transform="translateY(-50%)">
          <Image src="/assets/images/RectangleCardImg.png"  _hover={{ transitionDuration: '0.2s'}}
          onMouseOver={over} onMouseOut={out} />
          {FileUploadOverlay &&
          <FormControl  display={isVisible ? "block" : "none"} position='absolute' top='0' m='0' p={{base:'10px',sm:'20px'}}>
            <FormLabel htmlFor="image" fontSize='48px' color='#fff' borderRadius='16px' width="100%" h={{ base: '75px',sm:'105px', md: '150px' }} bg="#6863f3cc" zIndex="999" m='0!important'>
              <Input type="file" id="image" w='100%' h='100%' border='0' hidden />
              <Flex alignItems='center' justifyContent='center' h='100%'>
                <Box textAlign='center' fontSize={{base:'20px',md:'48px'}} color='#fff' >
                  <i className="icon-image"></i>
                </Box>
              </Flex>
            </FormLabel>

          </FormControl>
        }
        </Box>
      </Box>
    </>
  )
}