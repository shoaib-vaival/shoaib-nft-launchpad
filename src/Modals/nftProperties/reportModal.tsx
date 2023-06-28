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
  InputRightElement,
  Select,
  Icon,
  Textarea,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { ApiUrl } from "../../apis/apiUrl";
import { POST } from "../../hooks/consts";
import { useMutation } from "../../hooks/useMutation";
import { signMessage } from "../../context/signListing";
import { erc721Abi } from "../../connectors/erc721Abi";
import { ethers } from "ethers";
import { useNFTContract } from "../../connectors/erc721Provider";
import DatePickerReact from "../../components/DatePicker";

const ReportModal = ({
  isOpen,
  onClose,
  onOpen,
  nftData,
}: {
  isOpen?: any;
  onClose?: any;
  onOpen?: any;
  nftData?: any;
}) => {
  console.log("🚀 ~ file: listNft.tsx:41 ~ nftData:", nftData);




  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="508px">
          <ModalHeader>Report</ModalHeader>
          <ModalCloseButton />
          <ModalBody pt={6}>
            <FormControl mb='0'>
              <FormLabel fontSize={{base:'21px!important', md:'28px!important'}} mb='5px'>Why are you Reporting</FormLabel>
              <Text>Describe to us why you reporting about this NFT.</Text>
              <Textarea h='120px' mt='12px' mb='18px' placeholder='Please Describe here...' />
              
            </FormControl>

          </ModalBody>

          <ModalFooter gap='12px' pt='0' pb='20px' flexDirection={{base:'column', md:'row'}} >
            <Button
              variant="primary"
              w="100%"
              textTransform='uppercase'
            >
             Report
            </Button>

            <Button
              variant="secondary"
              w="100%"
              textTransform='uppercase'
            >
             Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReportModal;
