import { Box, Flex, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const SocialShare = ({ url, title }: { url: string; title: string; }) => {
  const shareUrl = 'https://ibanera-launchpad.bloxbytes.com/nft/detail/700e272b-6077-4e78-a2c5-9b2a0b0206e4';

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          color='#756C99'
          ml={{ base: '5px', sm: '8px' }} mb={{ base: '8px', sm: '0' }}
          variant='outline'
          aria-label='Send'
          fontSize='20px'
          border='1px solid #c4c3f9'
          bg='#fff'
          icon={<i className='icon-share'></i>}>
        </MenuButton>
        <MenuList w='191px' minW='191px' p='8px'>
        <Flex align='center' p='8px' color='#756C99' _hover={{color:'#6863F3'}}>
            <Box mr='16px' fontSize='20px'><i className='icon-facebook'></i></Box>
            <FacebookShareButton url={url} quote={title}>
              Facebook
            </FacebookShareButton>
          </Flex>
          <Flex align='center' p='8px' color='#756C99' _hover={{color:'#6863F3'}}>
            <Box mr='10px' fontSize='16px'><i className='icon-twitter'></i></Box>
            <TwitterShareButton url={url} title={title}>
              Twitter
            </TwitterShareButton>
          </Flex>
          <Flex align='center' p='8px' color='#756C99' _hover={{color:'#6863F3'}}>
            <Box mr='12px' fontSize='20px'><i className='icon-whatsapp'></i></Box>
            <WhatsappShareButton url={url} title={title}>
              Whatsapp
            </WhatsappShareButton>
          </Flex>
        </MenuList>
      </Menu>
    </>
  );
};

export default SocialShare;
