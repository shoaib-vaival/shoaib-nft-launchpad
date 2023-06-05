import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Text,
  Image
} from '@chakra-ui/react';


const ConnectionModal = ({ isOpen, onClose }: any) => {

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW='600px'>
          <ModalHeader>Connect Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color='#393F59' fontSize='16px' mt='16px'>Get started with your Ethereum wallet to sign messages and send transactions</Text>
            <Flex direction={{base:'column',md:'row'}} justifyContent='space-evenly' mt='20px'>
              <Flex justifyContent='flex-start' p='12px 16px'>
                <Button justifyContent='flex start' width={{base:'100%',md:'250px'}} leftIcon={<Image src='/assets/images/MetaMask.png' alt='MetaMask' maxH={'22px'} maxW={'24px'} mr='16px' />} fontSize='16px' fontWeight='700' bg='#D7D7D7' borderRadius='8px' size='lg'>
                  MetaMask
                </Button>
              </Flex>
              <Flex justifyContent='flex-start' p='12px 16px'>
                <Button  justifyContent='flex start'  width={{base:'100%',md:'250px'}} leftIcon={<Image src='/assets/images/WalletConnect.png' alt='WalletConnect' maxH={'22px'} maxW={'24px'} mr='16px' />} fontSize='16px' fontWeight='700' bg='#D7D7D7' borderRadius='8px' size='lg'>
                  MetaMask
                </Button>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConnectionModal;