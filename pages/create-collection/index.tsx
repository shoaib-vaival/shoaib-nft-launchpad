import React, { useState } from 'react';
import {
  FileUpload,
  ReactSelect,
  ImgUrlFunParam,
} from '../../src/components/common';
import { useQuery } from '../../src/hooks/useQuery';
import { ApiUrl } from '../../src/apis/apiUrl';
import { QUERY_KEYS } from '../../src/hooks/queryKeys';
import { Field, Form, Formik, FieldArray, ErrorMessage } from 'formik';
import InputField from '../../src/components/InputField';
import ChakraTextarea from '../../src/components/Textarea';
import { collectionDetail } from '../../src/constants'
import {
  Button,
  Container,
  FormControl,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { collectionSchema } from '../../src/schemas';
import { POST } from '../../src/hooks/consts';
import { useMutation } from '../../src/hooks/useMutation';
import { ReactSelectCatMap } from '../../src/components/common/ReactSelect/types'

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

  const { mutate } = useMutation<any>({
    method: POST,
    url: ApiUrl?.CREATE_COLLECTION,
    showSuccessToast: true
  });

  const filtredCat =
    categories &&
    categories?.map((cat: any) => ({ label: cat?.name, value: cat?._id }));
  const filtredTags =
    tags && tags?.map((cat: any) => ({ label: cat?.name, value: cat?._id }));

  const getImgUrl = (imgUrlProp: ImgUrlFunParam) => {
    if (imgUrlProp?.imgFor === 'logo') {
      setCollection({ ...collection, logoImageUrl: imgUrlProp?.url });
    } else if (imgUrlProp?.imgFor === 'featured') {
      setCollection({ ...collection, featureImageUrl: imgUrlProp?.url });
    }
    if (imgUrlProp?.imgFor === 'banner') {
      setCollection({ ...collection, bannerImageUrl: imgUrlProp?.url });
    }
  };

  const getSelectedData = (selectedValue: ReactSelectCatMap, identifier: string) => {
    if (identifier == 'cat') {
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
    logoImageUrl: collection?.logoImageUrl,
    bannerImageUrl: collection?.bannerImageUrl,
    featureImageUrl: collection?.featureImageUrl,
    name: '',
    description: '',
    category: collection?.category,
    tags: collection?.tags,
    website_url: '',
    etherscan: '',
    telegram: '',
    twitter: '',
    instagram: '',
    Discord_id: '',
    creatorFee: [{ walletAddress: '', percentage: 0 }],
  };

  return (
    <Container maxW='952px' p={0}>
      <Heading as='h1'>Create Collection</Heading>
      <Formik
        initialValues={initialValues}
        validationSchema={collectionSchema}
        enableReinitialize
        onSubmit={(values) => mutate(values)}
      >
        {({ errors, touched, values }) => (
          <Form>
            <FormControl>
              <Stack direction='column' spacing='40px'>
                <FileUpload
                  label='Logo Image *'
                  detail={collectionDetail?.logoDetail}
                  imgFor='logo'
                  imgUrl={getImgUrl}
                  width='220px'
                  height='220px'
                  onlyIcon={true}
                />
                {touched['logoImageUrl'] && errors['logoImageUrl'] && (
                  <Text>{errors['logoImageUrl'] as React.ReactNode}</Text>
                )}
                <FileUpload
                  label='Featured Image'
                  detail={collectionDetail?.featuredImg}
                  imgFor='featured'
                  imgUrl={getImgUrl}
                />
                <FileUpload
                  label='Banner Image'
                  detail={collectionDetail?.bannerImg}
                  imgFor='banner'
                  imgUrl={getImgUrl}
                />
                <ReactSelect
                  options={filtredCat}
                  isMultiple={false}
                  getSelectedData={getSelectedData}
                  identifier='cat'
                  label='Category'
                />
                {touched['category'] && errors['category'] && (
                  <Text>{errors['category'] as React.ReactNode}</Text>
                )}
                <ReactSelect
                  options={filtredTags}
                  isMultiple={true}
                  getSelectedData={getSelectedData}
                  identifier='tag'
                  label='Tags'
                />
              </Stack>

              <Field
                as={InputField}
                size='md'
                label='Name *'
                type='text'
                placeholder='Name your collection'
                name='name'
                errorText={
                  touched['name'] && errors['name'] ? errors['name'] : undefined
                }
                maxLength={50}
              />
              <Field
                as={InputField}
                size='md'
                label='Website URL'
                type='text'
                placeholder='https://'
                name='website_url'
                errorText={
                  touched['website_url'] && errors['website_url']
                    ? errors['website_url']
                    : undefined
                }
                maxLength={50}
              />
              <Field
                as={InputField}
                size='md'
                label='Etherscan'
                type='text'
                placeholder='https://'
                name='etherscan'
                errorText={
                  touched['etherscan'] && errors['etherscan']
                    ? errors['etherscan']
                    : undefined
                }
                maxLength={50}
              />
              <Field
                as={InputField}
                size='md'
                label='Telegram'
                type='text'
                placeholder='Telegram ID'
                name='telegram'
                errorText={
                  touched['telegram'] && errors['telegram']
                    ? errors['telegram']
                    : undefined
                }
                maxLength={50}
              />
              <Field
                as={InputField}
                size='md'
                label='Twitter'
                type='text'
                placeholder='https://'
                name='twitter'
                errorText={
                  touched['twitter'] && errors['twitter']
                    ? errors['twitter']
                    : undefined
                }
                maxLength={50}
              />
              <Field
                as={InputField}
                size='md'
                label='Instagram'
                type='text'
                placeholder='https://'
                name='instagram'
                errorText={
                  touched['instagram'] && errors['instagram']
                    ? errors['instagram']
                    : undefined
                }
                maxLength={50}
              />
              <Field
                as={InputField}
                size='md'
                label='Discord'
                type='text'
                placeholder='Discord ID'
                name='Discord_id'
                errorText={
                  touched['Discord_id'] && errors['Discord_id']
                    ? errors['Discord_id']
                    : undefined
                }
                maxLength={50}
              />
              <Field
                name='description'
                component={ChakraTextarea}
                label='Description'
                placeholder='Describe your collection, 1000 characters are allowed'
                desc={collectionDetail?.desc}
              />

              <FieldArray name='creatorFee'>
                {({ push, remove }) => (
                  <>
                    {values.creatorFee.map((field: any, index: number) => (
                      <div key={index}>
                        <div>
                          <Field
                            as={InputField}
                            size='md'
                            label='Wallet Address'
                            type='text'
                            maxLength={50}
                            name={`creatorFee.${[index]}.walletAddress`}
                          />
                          <ErrorMessage
                        name={`creatorFee.${[index]}.walletAddress`}
                        component='div'
                      />
                        </div>
                        <div>
                          <Field
                            as={InputField}
                            size='md'
                            label='Percentage'
                            type='number'
                            maxLength={50}
                            name={`creatorFee.${[index]}.percentage`}
                          />
                          <ErrorMessage
                        name={`creatorFee.${[index]}.percentage`}
                        component='div'
                      />
                        </div>
                        {index > 0 && <button type='button' onClick={() => remove(index)}>
                          Remove
                        </button>}
                      </div>
                    ))}
                    {values?.creatorFee?.length < 5 && <button
                      type='button'
                      onClick={() => push({ walletAddress: '', percentage: 0 })}
                    >
                      +Add Address
                    </button>}
                  </>
                )}
              </FieldArray>
            </FormControl>
            <Button type='submit' ml='3'>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default CreateCollection;