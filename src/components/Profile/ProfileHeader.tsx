import { Container } from "@chakra-ui/layout"
import {Image, Flex, IconButton, Box, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'


const ProfileHeader = ({socialIcons}:{socialIcons?:{icon:string, url:string}[]})=>{
    return (
        <>
        <Container variant='colorful' position="relative" bgSize="cover" bgImage="/assets/images/cover-image1.png" backgroundRepeat="no-repeat" h="400px">
            <Image src="/assets/images/RectangleCardImg.png" w="220px" h="220px" borderRadius="16px" border="2px solid white" position="absolute" bottom="-50%" transform="translateY(-50%)"/>
        </Container>
        <Container maxW="1440" mt="8px" px='0'>
        <Flex justifyContent="end" w="full"   >
        <Box borderRight="1px solid #A6A6A6" paddingRight="2" mr="2">
          {  socialIcons?.map((icon, index)=>{
              return (
                  <IconButton color=' #756C99' ml="8px" key={index} as="a" href={icon.url}
                          variant='outline'
                          colorScheme='#6863F3'
                          aria-label='Send'
                          fontSize='20px'
                          icon={<i className={icon.icon}></i>}
                        />
              )
          })}
          </Box>
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
        </Flex>
        </Container>
        </>
    )
}

export default ProfileHeader