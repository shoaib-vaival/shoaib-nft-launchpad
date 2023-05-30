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
import { Field, Form, Formik } from "formik";
import InputField from "../../src/components/InputField";
import ChakraTextarea from "../../src/components/Textarea";
import {
  Button,
  Container,
  FormControl,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { collectionSchema } from "./schema";

const CreateCollection = () => {
  const [collection, setCollection] = useState<any>({});

  const { data: categories } = useQuery<any>({
    queryKey: [QUERY_KEYS.GET_CAT],
    url: ApiUrl?.GET_CATEGORIES,
    showToast: false,
  });

  const { data: tags } = useQuery<any>({
    queryKey: [QUERY_KEYS.GET_TAGS],
    url: ApiUrl?.GET_TAGS,
    showToast: false,
  });

  const filtredCat =
    categories &&
    categories?.map((cat: any) => ({ label: cat?.name, value: cat?._id }));
  const filtredTags =
    tags && tags?.map((cat: any) => ({ label: cat?.name, value: cat?._id }));

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

  const getSelectedData = (selectedValue: any, identifier: string) => {
    if (identifier == "cat") {
      setCollection({ ...collection, category: selectedValue?.value });
    } else {
      setCollection({
        ...collection,
        tags:
          selectedValue?.length > 0
            ? selectedValue?.map((category: any) => category?.value)
            : [],
      });
    }
  };

  const initialValues = {
    logoImageUrl: collection?.logoImageUrl,
    bannerImageUrl: collection?.bannerImageUrl,
    featureImageUrl: collection?.featureImageUrl,
    name: "",
    description: "",
    category: collection?.category,
    tags: collection?.tags,
    website_url: "",
    etherscan: "",
    telegram: "",
    twitter: "",
    instagram: "",
    Discord_id: "",
    creatorFee: [],
  };

  return (
    <Container maxW="952px" p={0}>
      <Heading as="h1">Create Collection</Heading>
      <Formik
        initialValues={initialValues}
        validationSchema={collectionSchema}
        enableReinitialize
        onSubmit={(values) => console.log(values)}
      >
        {({ errors, touched, values }) => (
          <Form>
            <FormControl>
              <Stack direction="column" spacing="40px">
                <FileUpload
                  label="Logo Image *"
                  detail={Detail?.logoDetail}
                  imgFor="logo"
                  imgUrl={getImgUrl}
                  width="220px"
                  height="220px"
                  onlyIcon={true}
                />
                <FileUpload
                  label="Featured Image"
                  detail={Detail?.featuredImg}
                  imgFor="featured"
                  imgUrl={getImgUrl}
                />
                <FileUpload
                  label="Banner Image"
                  detail={Detail?.bannerImg}
                  imgFor="banner"
                  imgUrl={getImgUrl}
                />
                <ReactSelect
                  options={filtredCat}
                  isMultiple={false}
                  getSelectedData={getSelectedData}
                  identifier="cat"
                />
                <ReactSelect
                  options={filtredTags}
                  isMultiple={true}
                  getSelectedData={getSelectedData}
                  identifier="tag"
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
              <Field
                name="description"
                component={ChakraTextarea}
                label="Description"
                placeholder="Describe your collection, 1000 characters are allowed"
                desc={Detail?.desc}
              />
            </FormControl>
            <Button variant="success" type="submit" mt="1rem">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default CreateCollection;
