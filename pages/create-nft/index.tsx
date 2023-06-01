import React, { useState } from "react";
import {
  FileUpload,
  ReactSelect,
  ImgUrlFunParam,
} from "../../src/components/common";
import { Detail } from "./consts";
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
} from "@chakra-ui/react";
import { collectionSchema } from "./schema";
import { POST } from "../../src/hooks/consts";
import { useMutation } from "../../src/hooks/useMutation";
import { ReactSelectCatMap } from '../../src/components/common/ReactSelect/types'
import NftPropertiesModal from '../../src/Modals/nftProperties'
import { PropertyTypes } from './types'

const CreateCollection = () => {
  const [collectionId, setCollectionId] = useState<string>("");
  const [properties, setProperties] = useState<PropertyTypes[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { data: collections } = useQuery<any>({
    queryKey: [QUERY_KEYS.GET_COLLECTIONS_NAME],
    url: ApiUrl?.GET_COLLECTIONS_NAME,
    showToast: false,
  });

  const { mutate } = useMutation<any>({
    method: POST,
    url: ApiUrl?.CREATE_NFT
  });

  const filtredCollections =
    collections &&
    collections?.map((collection: any) => ({ label: collection?.name, value: collection?._id }));

    //contract abi will goes here
  const getImgUrl = (imgUrlProp: ImgUrlFunParam) => {
  };

  const getSelectedData = (selectedValue: ReactSelectCatMap, identifier: string) => {
    if (identifier == "nft") {
      setCollectionId(selectedValue?.value);
    }
  };

  const initialValues = {
    nftImgUrl: "abc",
    name: "",
    description: "",
    collectionId: collectionId,
    properties: properties || [],
  };

  return (
    <Container maxW="952px" p={0}>
      <Heading as="h1">Create NFT</Heading>
      <NftPropertiesModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} properties={properties} setProperties={setProperties}/>
      <Formik
        initialValues={initialValues}
        validationSchema={collectionSchema}
        enableReinitialize
        onSubmit={(values) => mutate(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <FormControl>
              <Stack direction="column" spacing="40px">
                <FileUpload
                  label="Image"
                  detail={Detail?.bannerImg}
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
                    touched["name"] && errors["name"] ? errors["name"] : undefined
                  }
                  maxLength={50}
                />
                <Field
                  name="description"
                  component={ChakraTextarea}
                  label="Description"
                  placeholder="Describe your collection, 1000 characters are allowed"
                  desc={Detail?.desc}
                />
                <ReactSelect
                  options={filtredCollections}
                  isMultiple={false}
                  getSelectedData={getSelectedData}
                  identifier="collection"
                  label="Collection"
                />
                {touched["collectionId"] && errors["collectionId"] && (
                  <Text>{errors["collectionId"] as React.ReactNode}</Text>
                )}
              </Stack>
              {properties?.length >0 && properties?.map((items:any)=>(<>
              <Box bg='gray' w='20%' p={4} color='white' mt='3'>
                <Text>{items?.type}</Text>
                <Text>{items?.name}</Text>
              </Box></>))}
              <Button onClick={onOpen} mt='5'>+Create Properties</Button>
            </FormControl>
            <Button type="submit" ml="3">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default CreateCollection;
