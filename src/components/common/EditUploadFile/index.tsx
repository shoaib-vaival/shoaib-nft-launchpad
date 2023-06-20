import { Box, Container, Flex, FormControl, FormLabel, Icon, Image, Input, Text } from "@chakra-ui/react"
import { useState } from "react";

export const EditUploadFile = ({image, id, onChange}:{image: string, id:string, onChange:(e:any)=>void}) => {
  const [preview, setPreview] = useState<any>()
   const [isVisible, setIsVisible] = useState<boolean>();
     const over = () => {
    setIsVisible(true);
  };
  const out = () => {
    setIsVisible(false);
  };
  const changeHandler = (e:any)=>{
    onChange(e)
    if(e.target.files[0]){    
      setPreview(
        URL.createObjectURL(e.target.files[0])
      )
    }

  }

  return (
    <>
      <Box p="0" position='relative'  onMouseOver={over} onMouseOut={out} h="100%">
        <Box  overflow='hidden' borderRadius='16px' h="100%" >
          <Image src={preview ? preview : image} w='100%' objectFit='cover' />
        </Box>
          <FormControl  display={isVisible ? "block" : "none"}  h="100%"  position='absolute' top='0' m='0' p='20px'>
            <FormLabel htmlFor={id} fontSize='48px' color='#fff' borderRadius='16px' width="100%" h="100%" bg="#6863f3cc" zIndex="999" m='0!important'>
              <Input type="file" id={id} w='100%' h='100%' border='0' hidden onChange={(e)=>changeHandler(e)}/>
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

      </Box>
    </>
  )
}