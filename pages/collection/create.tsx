import React, { useState } from "react";
import {
  FileUpload,
  ReactSelect,
  ImgUrlFunParam,
} from "../../src/components/common";
import { useQuery } from "../../src/hooks/useQuery";
import { ApiUrl } from "../../src/apis/apiUrl";
import { QUERY_KEYS } from "../../src/hooks/queryKeys";
import { Field, Form, Formik, FieldArray, ErrorMessage } from "formik";
import InputField from "../../src/components/InputField";
import ChakraTextarea from "../../src/components/Textarea";
import { collectionDetail } from "../../src/constants";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  Icon,
  IconButton,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { collectionSchema } from "../../src/schemas";
import { POST } from "../../src/hooks/consts";
import { useMutation } from "../../src/hooks/useMutation";
import { ReactSelectCatMap } from "../../src/components/common/ReactSelect/types";
import { useRouter } from "next/router";
import {
  collectionByIdTypes,
  categoriesAndTagsTypes,
  collectionStateTypes,
  createCollectionTypes,
} from "../../src/types/collection";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { chainUrls } from "../../src/connectors/consts";
import { Web3Provider, ExternalProvider } from "@ethersproject/providers";
import { useContract } from "../../src/connectors/provider";

const CreateCollection = () => {
  const [collection, setCollection] = useState<collectionStateTypes>();
  const router = useRouter();
  const contractInst = useContract();
  const { account, provider } = useWeb3React<Web3Provider>();

  // Call the contract

  const deployy = async (name: string, symbol: string) => {
    try {
      if (contractInst) {
        const result = await contractInst.deploy(name, symbol);
      }
      // Handle the returned result here
    } catch (error) {
      console.error(error);
      // Handle errors here
    }
  };

  const { data: categories } = useQuery<categoriesAndTagsTypes>({
    queryKey: [QUERY_KEYS.GET_CAT],
    url: ApiUrl?.GET_CATEGORIES,
    showToast: false,
  });

  const { data: tags } = useQuery<categoriesAndTagsTypes>({
    queryKey: [QUERY_KEYS.GET_TAGS],
    url: ApiUrl?.GET_TAGS,
    showToast: false,
  });

  const { data: getCollectionById, isLoading: getCollectionByIdLoading } =
    useQuery<collectionByIdTypes>({
      queryKey: [QUERY_KEYS.GET_COLLECTION],
      url: `${ApiUrl?.GET_COLLECTION}/${router?.query?.id}`,
      showToast: false,
      enabled: router?.query?.id ? true : false,
    });

  const { mutate } = useMutation<createCollectionTypes>({
    method: POST,
    url: ApiUrl?.CREATE_COLLECTION,
    showSuccessToast: true,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const filtredCat =
    categories &&
    categories?.map((cat: categoriesAndTagsTypes) => ({
      label: cat?.name,
      value: cat?.id,
    }));

  const filtredTags =
    tags &&
    tags?.map((cat: categoriesAndTagsTypes) => ({
      label: cat?.name,
      value: cat?.id,
    }));

  const getImgUrl = (imgUrlProp: ImgUrlFunParam) => {
    if (imgUrlProp?.imgFor === "logo") {
      setCollection({ ...collection, logoImageUrl: imgUrlProp?.url });
    } else if (imgUrlProp?.imgFor === "featured") {
      setCollection({ ...collection, featureImageUrl: imgUrlProp?.url });
    }
    if (imgUrlProp?.imgFor === "banner") {
      setCollection({ ...collection, bannerImageUrl: imgUrlProp?.url });
    }
  };

  const getSelectedData = (
    selectedValue: ReactSelectCatMap,
    identifier: string
  ) => {
    if (identifier == "cat") {
      setCollection({ ...collection, category: selectedValue?.value });
    } else {
      setCollection({
        ...collection,
        tags:
          selectedValue?.length > 0
            ? selectedValue?.map((category) => category?.value)
            : [],
      });
    }
  };

  const initialValues = {
    logoImageUrl: collection?.logoImageUrl || "",
    bannerImageUrl: collection?.bannerImageUrl || "",
    featureImageUrl: collection?.featureImageUrl || "",
    name: getCollectionById?.name || "",
    description: getCollectionById?.description || "",
    category: getCollectionById?.category || collection?.category,
    tag: collection?.tags,
    website_url: getCollectionById?.website_url || "",
    etherscan: getCollectionById?.etherscan || "",
    telegram: getCollectionById?.telegram || "",
    twitter: getCollectionById?.twitter || "",
    instagram: getCollectionById?.instagram || "",
    Discord_id: getCollectionById?.Discord_id || "",
    creatorFee: getCollectionByIdLoading
      ? [{ walletAddress: "", percentage: 0 }]
      : getCollectionById?.creatorFee,
    collectionId: getCollectionById?.id || undefined,
  };

  return (
    <Container
      maxW={{ sm: "2xl", md: "3xl", lg: "5xl", xl: "952px" }}
      p={{ sm: "30px", md: "30px", lg: "0", xl: "0" }}
    >
      <Heading as="h1">Create Collection</Heading>
      <Formik
        initialValues={initialValues}
        validationSchema={collectionSchema}
        enableReinitialize
        onSubmit={(values) => {
           mutate(values);
        }}
      >
        {({ errors, touched, values }) => (
          <Form>
            <FormControl>
              <Stack direction="column">
                <FileUpload
                  label="Logo Image *"
                  detail={collectionDetail?.logoDetail}
                  imgFor="logo"
                  imgUrl={getImgUrl}
                  width="220px"
                  height="220px"
                  onlyIcon={true}
                  editAbleUrl={getCollectionById?.logoImageUrl}
                />
                {touched["logoImageUrl"] && errors["logoImageUrl"] && (
                  <Text
                    marginTop={"8px!important"}
                    fontWeight={"700"}
                    color={"red.700"}
                  >
                    {errors["logoImageUrl"] as React.ReactNode}
                  </Text>
                )}
                <FileUpload
                  label="Featured Image"
                  detail={collectionDetail?.featuredImg}
                  imgFor="featured"
                  imgUrl={getImgUrl}
                  editAbleUrl={getCollectionById?.featureImageUrl}
                />
                <FileUpload
                  label="Banner Image"
                  detail={collectionDetail?.bannerImg}
                  imgFor="banner"
                  imgUrl={getImgUrl}
                  editAbleUrl={getCollectionById?.bannerImageUrl}
                />
                <ReactSelect
                  options={filtredCat}
                  isMultiple={false}
                  getSelectedData={getSelectedData}
                  identifier="cat"
                  label="Category"
                />
                {touched["category"] && errors["category"] && (
                  <Text
                    marginTop={"8px!important"}
                    fontWeight={"700"}
                    color={"red.700"}
                  >
                    {errors["category"] as React.ReactNode}
                  </Text>
                )}
                <ReactSelect
                  options={filtredTags}
                  isMultiple={true}
                  getSelectedData={getSelectedData}
                  identifier="tag"
                  label="Tags"
                />
              </Stack>

              <Field
                as={InputField}
                size="md"
                label="Name *"
                type="text"
                placeholder="Name your collection"
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
                desc={collectionDetail?.desc}
              />

              <Box>
                <Heading fontSize={"24px"}>Social Links</Heading>
                <Text fontSize={"16px"}>
                  Add your existing social links to build a stronger reputation.
                </Text>
                <Flex
                  gap={"6"}
                  display={{ base: "block", sm: "flex" }}
                  justifyContent={{
                    base: "initial",
                    sm: "space-between",
                    xl: "space-between",
                  }}
                >
                  <Field
                    as={InputField}
                    size="md"
                    label="Website URL"
                    type="text"
                    placeholder="https://"
                    name="website_url"
                    errorText={
                      touched["website_url"] && errors["website_url"]
                        ? errors["website_url"]
                        : undefined
                    }
                    maxLength={50}
                  />
                  <Spacer />
                  <Field
                    as={InputField}
                    size="md"
                    label="Etherscan"
                    type="text"
                    placeholder="https://"
                    name="etherscan"
                    errorText={
                      touched["etherscan"] && errors["etherscan"]
                        ? errors["etherscan"]
                        : undefined
                    }
                    maxLength={50}
                  />
                </Flex>
                <Flex
                  gap={"6"}
                  display={{ base: "block", sm: "flex" }}
                  justifyContent={{
                    base: "initial",
                    sm: "space-between",
                    xl: "space-between",
                  }}
                >
                  <Field
                    as={InputField}
                    size="md"
                    label="Telegram"
                    type="text"
                    placeholder="Telegram ID"
                    name="telegram"
                    errorText={
                      touched["telegram"] && errors["telegram"]
                        ? errors["telegram"]
                        : undefined
                    }
                    maxLength={50}
                  />
                  <Field
                    as={InputField}
                    size="md"
                    label="Twitter"
                    type="text"
                    placeholder="https://"
                    name="twitter"
                    errorText={
                      touched["twitter"] && errors["twitter"]
                        ? errors["twitter"]
                        : undefined
                    }
                    maxLength={50}
                  />
                </Flex>
                <Flex
                  gap={"6"}
                  display={{ base: "block", sm: "flex" }}
                  justifyContent={{
                    base: "initial",
                    sm: "space-between",
                    xl: "space-between",
                  }}
                >
                  <Field
                    as={InputField}
                    size="md"
                    label="Instagram"
                    type="text"
                    placeholder="https://"
                    name="instagram"
                    errorText={
                      touched["instagram"] && errors["instagram"]
                        ? errors["instagram"]
                        : undefined
                    }
                    maxLength={50}
                  />
                  <Field
                    as={InputField}
                    size="md"
                    label="Discord"
                    type="text"
                    placeholder="Discord ID"
                    name="Discord_id"
                    errorText={
                      touched["Discord_id"] && errors["Discord_id"]
                        ? errors["Discord_id"]
                        : undefined
                    }
                    maxLength={50}
                  />
                </Flex>
              </Box>

              <FieldArray name="creatorFee">
                {({ push, remove }) => (
                  <>
                    {values &&
                      values?.creatorFee?.map((field: any, index: number) => (
                        <div key={index}>
                          <Flex
                            gap={"6"}
                            alignItems={{
                              base: "baseline",
                              sm: "center",
                              xl: "center",
                            }}
                            flexDirection={{
                              base: "column",
                              sm: "row",
                              xl: "row",
                            }}
                            w={"100%"}
                          >
                            <Box w={{ base: "100%", sm: "80%", xl: "80%" }}>
                              <Field
                                as={InputField}
                                size="md"
                                label="Wallet Address"
                                type="text"
                                maxLength={50}
                                name={`creatorFee.${[index]}.walletAddress`}
                              />
                              <ErrorMessage
                                name={`creatorFee.${[index]}.walletAddress`}
                                component="div"
                              />
                            </Box>

                            <Box w={{ base: "100%", sm: "20%", xl: "20%" }}>
                              <Field
                                as={InputField}
                                size="md"
                                label="Percentage"
                                type="number"
                                maxLength={50}
                                name={`creatorFee.${[index]}.percentage`}
                              />
                              <ErrorMessage
                                name={`creatorFee.${[index]}.percentage`}
                                component="div"
                              />
                            </Box>

                            {index > 0 && (
                              <IconButton
                                aria-label="close"
                                bg="#6863F34D"
                                mt="35px"
                                ml={"10px"}
                                type="button"
                                color="#6863F3"
                                border="1px solid #6863F3"
                                onClick={() => remove(index)}
                                icon={<i className="icon-remove"></i>}
                              />
                            )}
                          </Flex>
                        </div>
                      ))}
                    {values?.creatorFee && values?.creatorFee?.length < 5 && (
                      <Button
                        color="#6863F3"
                        fontSize="14px"
                        fontWeight="bold"
                        bg="transparent"
                        p="0"
                        type="button"
                        textDecoration="none"
                        variant="link"
                        onClick={() =>
                          push({ walletAddress: "", percentage: 0 })
                        }
                      >
                        +Add Address
                      </Button>
                    )}
                  </>
                )}
              </FieldArray>
            </FormControl>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default CreateCollection;
