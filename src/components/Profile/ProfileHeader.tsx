import { Container } from "@chakra-ui/layout"
import { Image, Flex, IconButton, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const ProfileHeader = ({ socialIcons, showSocialIcons }: { socialIcons?: { icon?: string, url?: string }[], showSocialIcons?:boolean }) => {
  return (
    <>
      <Container pl={{base:'24px', md:'54px'}} variant='colorful' position="relative" bgSize="cover" bgImage="/assets/images/cover-image1.png" backgroundRepeat="no-repeat" h={{base:'220px',md:'400px'}}>
        <Image src="/assets/images/RectangleCardImg.png" w={{base:'100px',md:'200px'}} h={{base:'100px',md:'200px'}} borderRadius="16px" border="2px solid white" position="absolute" bottom='-35%' transform="translateY(-50%)" />
      </Container>
      <Container maxW="1440" mt={{base:'50px',md:'8px'}} px='0'>
          {showSocialIcons && 
        <Flex justifyContent={{base:'flex-start',sm:'end'}} w="full" wrap="wrap" >
            {socialIcons?.map((icon, index) => {
              return (
                <IconButton color=' #756C99' ml={{base:'5px',sm:'8px'}} mb={{base:'8px',sm:'0'}} key={index} as="a" href={icon.url}
                  variant='outline'
                  colorScheme='#6863F3'
                  aria-label='Send'
                  fontSize='20px'
                  icon={<i className={icon.icon}></i>}
                />
              )
            })}
            
          <Box  borderLeft={{base:'none',sm:'1px solid #A6A6A6'}} paddingLeft={{base:'0',sm:'2'}} ml={{base:'0',sm:'2'}} >
          <IconButton color=' #756C99'mb={{base:'8px',sm:'0'}} ml={{base:'5px',sm:'0'}}
            variant='outline'
            colorScheme='#6863F3'
            aria-label='Send'
            fontSize='20px'
            icon={<i className="icon-share"></i>}
          />
          </Box>
          <Menu>
            <MenuButton
              as={IconButton}
              color='#756C99'
              ml={{base:'5px',sm:'8px'}} mb={{base:'8px',sm:'0'}}
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
        }
      </Container>
    </>
  )
}

export default ProfileHeader