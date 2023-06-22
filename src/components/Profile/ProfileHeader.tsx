import { Container } from "@chakra-ui/layout"
import { Image, Flex, IconButton, Box, Menu, MenuButton, MenuList, MenuItem, Icon } from '@chakra-ui/react'

const ProfileHeader = ({ socialIcons, showSocialIcons , coverPhoto, profilePhoto}: { socialIcons?: { icon?: string, url?: string }[], showSocialIcons?:boolean, coverPhoto?:string, profilePhoto?:string }) => {
  return (
    <>
      <Container pl={{base:'24px', md:'54px'}} variant='colorful' position="relative" bgSize="cover" bgImage={coverPhoto} h={{base:'220px',md:'400px'}}>
        <Image src={profilePhoto} w={{base:'100px',md:'200px'}} h={{base:'100px',md:'200px'}} borderRadius="16px" border="2px solid white" position="absolute" bottom='-35%' transform="translateY(-50%)" objectFit="cover" />
      </Container>
      <Container maxW="1440" mt={{base:'50px',md:'8px'}} px='0'>
          {showSocialIcons && 
        <Flex justifyContent={{base:'flex-start',sm:'end'}} w="full" wrap="wrap" >
            {socialIcons?.map((icon, index) => {
              return (
                <IconButton color=' #756C99' ml={{base:'5px',sm:'8px'}} mb={{base:'8px',sm:'0'}} key={index} as="a" target="_blank" href={icon.url}
                  variant='outline'
                  colorScheme='#6863F3'
                  aria-label='Send'
                  fontSize='20px'
                  icon={<i className={icon.icon}></i>}
                />
              )
            })}
            
          <Box borderLeft={{base:'none',sm:'1px solid #A6A6A6'}} paddingLeft={{base:'0',sm:'2'}} ml={{base:'0',sm:'2'}} >
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
            <MenuList  w='191px' minW='191px' p='16px 8px'>
            <MenuItem fontWeight='600'>Share Link</MenuItem>
              <MenuItem> <Box mr='13px' color='#756C99'><i className='icon-fill-twiter'></i></Box><Box color='#393F59'>Twitter</Box></MenuItem>
              <MenuItem> <Box mr='13px' color='#756C99'><i className='icon-facebook'></i></Box><Box color='#393F59'>Facebook</Box></MenuItem>
              <MenuItem> <Box mr='13px' color='#756C99'><i className='icon-fill-tele'></i></Box><Box color='#393F59'>Telegram</Box></MenuItem>
              <MenuItem> <Box mr='13px' color='#756C99'><i className='icon-at'></i></Box><Box color='#393F59'>Email</Box></MenuItem>
              <MenuItem> <Box mr='13px' color='#756C99'><i className='icon-copy-1'></i></Box><Box color='#393F59'>Copy</Box></MenuItem>
            </MenuList>
          </Menu>

        </Flex>
        }
      </Container>
    </>
  )
}

export default ProfileHeader