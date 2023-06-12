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

const CreateNFT = () => {
  const [collectionId, setCollectionId] = useState<string>("");
  const [nftName, setNftName] = useState<string>("");
  const [nftFile, setNftFile] = useState<any>();
  const [properties, setProperties] = useState<PropertyTypes[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const contractInst = useNFTContract();
  const { account, provider } = useWeb3React<Web3Provider>();

  const { data: collections } = useQuery<any>({
    queryKey: [QUERY_KEYS.GET_COLLECTIONS_NAME],
    url: ApiUrl?.GET_COLLECTIONS_NAME,
    showToast: false,
    onSuccess: (data) => {},
  });

  const minting = async (uri: string) => {
    try {
      if (contractInst) {
        const result = await contractInst.safeMint(account, uri);
        console.log(result);
      }
      // Handle the returned result here
    } catch (error) {
      console.error(error);
      // Handle errors here
    }
  };

  const { mutate, isLoading } = useMutation<any>({
    method: POST,
    url: ApiUrl?.CREATE_NFT,
    isFileData: true,
    onSuccess: async (data) => {
      console.log("NFT Data", data);
      await minting(data?.ipfsJsonUrl.toString());
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
    nftImgUrl: "abc",
    name: nftName,
    description: "",
    collectionId: collectionId,
    properties: properties || [],
  };

  return (
    <>
      <Container maxW={{ md: "2xl", lg: "5xl", xl: "952px" }}>
        <Heading as="h1" pt={"60px"}>
          Create New Item
        </Heading>

        <Formik
          initialValues={initialValues}
          validationSchema={nftSchema}
          enableReinitialize
          onSubmit={(values) =>
            mutate({ ...values, photo: nftFile, collectionId: collectionId })
          }
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
                  properties={properties}
                  setProperties={setProperties}
                />
                <Stack direction="column">
                  <FileUpload
                    label="Image, Video, Audio, or 3D Model *"
                    detail={createnft?.bannerImg}
                    imgFor="nft"
                    imgUrl={getImgUrl}
                  />
                  {touched["nftImgUrl"] && errors["nftImgUrl"] && (
                    <Text>{errors["nftImgUrl"] as React.ReactNode}</Text>
                  )}
                  <Field
                    as={InputField}
                    size="md"
                    label="Name *"
                    type="text"
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
                  <ReactSelect
                    options={filtredCollections}
                    isMultiple={false}
                    getSelectedData={getSelectedData}
                    identifier="collection"
                    label="Collection"
                    nftName={values?.name}
                    setNftName={setNftName}
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
