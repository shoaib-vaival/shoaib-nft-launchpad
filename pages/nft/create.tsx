import React, { useState } from "react";
import {
  FileUpload,
  ReactSelect,
  ImgUrlFunParam,
} from "../../src/components/common";
import { createnft, nftDetail } from "../../src/constants";
import { useQuery } from "../../src/hooks/useQuery";
import { ApiUrl } from "../../src/apis/apiUrl";
import { QUERY_KEYS } from "../../src/hooks/queryKeys";
import { Field, Form, Formik, FieldArray } from "formik";
import InputField from "../../src/components/InputField";
import ChakraTextarea from "../../src/components/Textarea";
import {
  Button,
  Container,
  FormControl,
  Heading,
  Stack,
  Text,
  useDisclosure,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Flex,
  IconButton,
  FormLabel,
} from "@chakra-ui/react";
import { nftSchema } from "../../src/schemas";
import { POST } from "../../src/hooks/consts";
import { useMutation } from "../../src/hooks/useMutation";
import { ReactSelectCatMap } from "../../src/components/common/ReactSelect/types";
import NftPropertiesModal from "../../src/Modals/nftProperties";
import { PropertyTypes } from "../../src/types";
import { Header } from "../../src/components/Header";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useNFTContract } from "../../src/connectors/erc721Provider";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import { getFromLocalStorage } from "../../src/utils";
import ConnectionModal from "../../src/Modals/nftProperties/connectionModal";

const CreateNFT = () => {
  const [collectionId, setCollectionId] = useState<string>("");
  const [nftName, setNftName] = useState<string>("");
  const [nftDesc, setNftDesc] = useState<string>("");
  const [nftFile, setNftFile] = useState<any>();
  const [properties, setProperties] = useState<PropertyTypes[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const contractInst = useNFTContract();
  const { account, provider } = useWeb3React<Web3Provider>();
  const router = useRouter();

  const {
    isOpen: isConnectionModalOpen,
    onOpen: onConnectionModalOpen,
    onClose: onConnectionModalClose,
  } = useDisclosure();

  const { data: collections } = useQuery<any>({
    queryKey: [QUERY_KEYS.GET_COLLECTIONS_NAME],
    url: ApiUrl?.GET_COLLECTIONS_NAME,
    showToast: false,
  });

  const minting = async (uri: string) => {
    if (contractInst) {
      try {
        const result = await contractInst.safeMint(account, uri);
        if (result) {
          const ethProvider = new ethers.providers.Web3Provider(
            provider?.provider as any
          );
          const receipt = await ethProvider.waitForTransaction(result.hash);
          if (receipt) router.push("/profile-created");
        }
        // Handle the returned result here
      } catch (error) {
        console.error(error);
        // Handle errors here
      }
    }
  };

  const { mutate, isLoading } = useMutation<any>({
    method: POST,
    url: ApiUrl?.CREATE_NFT,
    isFileData: true,
    token: true,
    onSuccess: async (data) => {
      await minting(String(data?.ipfsJsonUrl));
    },
  });

  const filtredCollections =
    collections &&
    collections?.map((collection: any) => ({
      label: collection?.name,
      value: collection?.id,
    }));

  //contract abi will goes here
  const getImgUrl = (imgUrl: ImgUrlFunParam) => {
    // console.log("🚀 ~ file: index.tsx:62 ~ getImgUrl ~ imgUrl:", imgUrl);
    setNftFile(imgUrl);
    // console.log(imgUrlProp);
    // imgUrl.url
    // contract function call for minting
  };

  const getSelectedData = (
    selectedValue: ReactSelectCatMap,
    identifier: string
  ) => {
    setCollectionId(selectedValue?.value);
  };

  const initialValues = {
    photo: nftFile,
    name: nftName,
    description: nftDesc,
    collectionId: collectionId,
    properties: properties || [],
  };

  return (
    <>
      <Container
        maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "952px" }}
        px={{ base: "17px", sm: "34px", xl: "17px" }}
      >
        <Heading as="h1" pt={"30px"}>
          Create New Item
        </Heading>

        <Formik
          initialValues={initialValues}
          validationSchema={nftSchema}
          enableReinitialize
          onSubmit={(values) => {
            if (getFromLocalStorage("accessToken")) {
              mutate({ ...values, photo: nftFile, collectionId: collectionId });
            } else {
              onConnectionModalOpen();
            }
          }}
        >
          {({ errors, touched, values }) => (
            <Form>
              <FormControl>
                <NftPropertiesModal
                  isOpen={isOpen}
                  onOpen={onOpen}
                  onClose={onClose}
                  nftName={values?.name}
                  setNftName={setNftName}
                  nftDesc={values?.description}
                  setNftDesc={setNftDesc}
                  properties={properties}
                  setProperties={setProperties}
                />
                <Stack direction="column">
                <FormControl isRequired>
                  <FileUpload
                    label="Image, Video, Audio, or 3D Model"
                    detail={createnft?.bannerImg}
                    imgFor="nft"
                    imgUrl={getImgUrl}
                  />
                  {touched["photo"] && errors["photo"] && (
                    <Text>{errors["photo"] as React.ReactNode}</Text>
                  )}
                  </FormControl>
                  <FormLabel fontSize='24px!important' fontWeight='700' mb='0!important'>Details</FormLabel>

                  <Field
                    as={InputField}
                    size="md"
                    label="Name"
                    type="text"
                    formControlProps={{ isRequired: true }}
                    placeholder="Name your nft"
                    name="name"
                    errorText={
                      touched["name"] && errors["name"]
                        ? errors["name"]
                        : undefined
                    }
                    maxLength={50}
                  />
                  <Field
                    name="description"
                    component={ChakraTextarea}
                    label="Description"
                    placeholder="Describe your collection, 1000 characters are allowed"
                    desc={nftDetail?.desc}
                  />
                                  <Text color='#393F59'>Markdown syntax is supported. 0 of 1000 characters used.</Text>

                   <FormLabel fontSize='24px!important'mt='30px' fontWeight='700' mb='0!important'>Collection</FormLabel>
                   <Text color='#393F59'>This is the collection where your item will appear.</Text>

                  <ReactSelect
                    options={filtredCollections}
                    isMultiple={false}
                    getSelectedData={getSelectedData}
                    identifier="collection"
                    label="Collection"
                    nftName={values?.name}
                    setNftName={setNftName}
                    nftDesc={values?.description}
                    setNftDesc={setNftDesc}
                  />
                  {touched["collectionId"] && errors["collectionId"] && (
                    <Text
                      marginTop={"0px!important"}
                      fontWeight={"500"}
                      color={"red.700"}
                    >
                      {errors["collectionId"] as React.ReactNode}
                    </Text>
                  )}
                  <Flex justifyContent='space-between' alignItems='center'>
                  <Box>  
                <Heading fontSize={"24px"} mt='38px'>Properties</Heading>
                <Text fontSize={"16px"} mt='16px' color='#393F59'>
                Textual traits that show up as rectangles
                  </Text>
                </Box>
                <Box>
                <IconButton color=' #756C99'mb={{base:'8px',sm:'0'}} ml={{base:'5px',sm:'0'}}
            variant='outline'
            colorScheme='#6863F3'
            aria-label='Send'
            fontSize='20px'
            onClick={onOpen}
            icon={<i className='icon-plus'></i>}
          />
                </Box>
                  </Flex>
                  <Box>
                    <Flex flexWrap={"wrap"}>
                      {properties &&
                        properties?.length > 0 &&
                        properties?.map((items: any) => (
                          <>
                            <Stat
                              flexBasis={"22%"}
                              flex={"0% 1 0%)"}
                              margin={"12px 12px 12px 0"}
                            >
                              <StatLabel>{items?.type}</StatLabel>
                              <StatNumber>{items?.name}</StatNumber>
                            </Stat>
                          </>
                        ))}
                      <Button
                      display='none'
                        color="#6863F3"
                        fontSize="14px"
                        fontWeight="bold"
                        bg="transparent"
                        p="0"
                        variant="link"
                        onClick={onOpen}
                        mt="5"
                      >
                        +Create Properties
                      </Button>
                    </Flex>
                  </Box>

                  
                </Stack>
              </FormControl>
              <ConnectionModal
                isOpen={isConnectionModalOpen}
                onOpen={onConnectionModalOpen}
                onClose={onConnectionModalClose}
              />
              <Button isLoading={isLoading} type="submit" variant="primary">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default CreateNFT;
