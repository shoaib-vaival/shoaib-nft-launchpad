import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Text,
  FormLabel,
  Input,
  Flex,
  Divider,
  Box,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import { ReactSelect } from "../../components/common";


const ListNftModal = ({
  isOpen,
  onClose,
  onOpen,
}: {
  isOpen?: any,
  onClose?: any,
  onOpen?: any,
}) => {

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent maxW='708px'>
          <ModalHeader>List For Sale</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Text fontSize='20px' fontWeight='700' mb='16px'>Set Price</Text>
              <FormLabel>Price</FormLabel>
              <InputGroup>
                
                <Input placeholder='Enter price for this item' />
                <InputRightAddon fontSize='14px' color='#393F59' bg='#6F6BF34D'>MATIC</InputRightAddon> 
              </InputGroup>
            </FormControl>

            <FormControl mt={4} mb='24px'>
              <FormLabel>Set Duration</FormLabel>
              <Input placeholder='Enter price for this item' />
            </FormControl>
            <Divider />
            <Text as={'h4'} mt='20px' fontWeight='700' fontSize='24px' color="#393F59">Summary</Text>
            <Text mb='40px'>Listing is free. Once sold, the following fees will be deducted.</Text>
            <Box>
              <Flex mb='24px' justifyContent="space-between">
                <Text color="#393F59">Listing Price</Text>
                <Text color="#393F59" mb="auto">
                  1.00 ETH
                </Text>
              </Flex>
              <Flex mb='24px' justifyContent="space-between">
                <Text color="#393F59">Service Fee</Text>
                <Text color="#393F59" mb="auto">
                  2.5%
                </Text>
              </Flex>
              <Flex justifyContent="space-between" mb='24px'>
                <Text color="#393F59">Creator Fee</Text>
                <Text color="#393F59" mb="auto">
                  0%
                </Text>
              </Flex>
              <Divider />
              <Flex justifyContent="space-between" flexWrap='wrap' mt='16px'>
                <Text fontWeight='600' fontSize={{base:'20px',sm:'24px'}}  color="#393F59">Total Potential Earnings</Text>
                <Text fontWeight='600' fontSize={{base:'20px',sm:'24px'}} color="#393F59" mb="auto">
                  0.975 ETH
                </Text>
              </Flex>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variant='primary' w='100%'>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ListNftModal;
