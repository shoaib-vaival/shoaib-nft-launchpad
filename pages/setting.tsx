import { Container, Flex, Box, Heading, Text } from "@chakra-ui/layout";
import { Button, Select, Stack, Switch, FormControl, FormLabel, Input, Textarea, Checkbox, Image } from '@chakra-ui/react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { ApiUrl } from "../src/apis/apiUrl";
import InputField from "../src/components/InputField";
import ProfileHeader from "../src/components/Profile/ProfileHeader";
import ChakraTextarea from "../src/components/Textarea";
import { PATCH, POST } from "../src/hooks/consts";
import { QUERY_KEYS } from "../src/hooks/queryKeys";
import { useMutation } from "../src/hooks/useMutation";
import { useQuery } from "../src/hooks/useQuery";
import { EditUploadFile } from "../src/components/common/EditUploadFile";
import { UploadFileOnServer } from "../src/components/common/UploadFile/types";
import { profileType } from "../src/types";


type imagesType = {
  imageUrl: string,
  label: string
}

const Setting: NextPage = () => {
  const [coverImage, setCoverImage] = useState<imagesType>()
  const [profileImage, setProfileImage] = useState<imagesType>()

  const { data: profile } = useQuery<profileType>({
    queryKey: [QUERY_KEYS.GET_PROFILE],
    url: ApiUrl.GET_PROFILE_BY_ID,
    token: true
  })

  const { mutate } = useMutation<profileType>({
    method: PATCH,
    url: ApiUrl.UPDATE_PROFILE,
    showSuccessToast: true,
    token: true
  });
  const { mutate: save } = useMutation<any>({
    method: POST,
    url: ApiUrl.CREATE_NOTIFICATION,
    showSuccessToast: true,
    token: true
  })
  const { mutate: uploadFileOnServerFunc, isLoading: imgUploadLoading } =
    useMutation<UploadFileOnServer>({
      method: POST,
      url: ApiUrl?.UPLOAD_FILE_TO_SERVER,
      showSuccessToast: false,
      isFileData: true,
      onSuccess: (data) => {
        if (data?.data?.label === 'userCoverPhoto') {
          setCoverImage({ imageUrl: data?.data?.path, label: data?.data?.label })
        }
        if (data?.data?.label === "userProfilePhoto") {
          setProfileImage({ imageUrl: data?.data?.path, label: data?.data?.label })
        }
      }
    })

  const initialValues = {
    displayName: profile?.displayName,
    userName: profile?.userName,
    bio: profile?.bio,
    email: profile?.email,
    websiteUrl: profile?.websiteUrl,
    etherScanUrl: profile?.etherScanUrl,
    walletAddress: profile?.walletAddress,
    telegram: profile?.telegram,
    twitter: profile?.twitter,
    instagram: profile?.instagram,
    discord: profile?.discord,

  }

  const initialSettings = {
    status: false // Initialize the switch field value
  };

  return (
    <>
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '8xl' }}>
        <Flex
          p={{ base: '0', md: '0 17px' }}
          alignItems='initial'
          textAlign={{ base: 'initial', md: 'initial' }}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box pr={{ base: '0', md: '50px' }}>
            <Heading
              as='h1'
              fontSize={{
                base: '26px',
                sm: '36px',
                lg: '42px',
                xl: '56px',
              }}
              mb={{ base: '10px', lg: '24px' }}>
              Settings
            </Heading>
            <Text fontSize={{ base: '18px', md: '24px' }}>
              Profile and Notification Settings
            </Text>
          </Box>
        </Flex>

      </Container>
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '8xl' }}>
        <Box mt='24px'>
          <Tabs>
            <TabList ml='12px' pl='0'>
              <Tab>Account</Tab>
              {/* <Tab>Notifications</Tab> */}
            </TabList>

            <TabPanels>
              <TabPanel p={0}>
                <Box mt='15px' px={{ base: '0', md: '17px' }} mb={{ base: '55px', md: '85px' }} position="relative">
                  <Box h={{ base: '250px', md: '358px' }}>
                    <EditUploadFile image={profile?.profileCoverURL ? profile?.profileCoverURL : ''} id="coverPhoto" onChange={(e) => uploadFileOnServerFunc({ photo: e.target.files[0], label: 'userCoverPhoto' })} isShowLabel={true} />
                  </Box>
                  <Box w={{ base: '100px', sm: '150px', md: '200px' }} h={{ base: '100px', sm: '150px', md: '200px' }} borderRadius="16px" border="2px solid white" position="absolute" left='5%' bottom={{ base: '-30%', sm: '-43%', md: '-45%' }} transform="translateY(-50%)">
                    <EditUploadFile image={profile?.profileUrl ? profile?.profileUrl : ''} id="profilePhoto" onChange={(e) => uploadFileOnServerFunc({ photo: e.target.files[0], label: 'userProfilePhoto' })} isShowLabel={false} />
                  </Box>
                  
                </Box>
                <Container maxW={{ sm: '2xl', md: '3xl', lg: '4xl', xl: '5xl' }} p={{ base: '0', md: '16px' }}>
                  <Box>
                    <Formik
                      initialValues={initialValues}
                      enableReinitialize
                      onSubmit={(values) => {
                        mutate({ ...values, profileUrl: profileImage?.imageUrl, profileCoverURL: coverImage?.imageUrl })
                      }}
                    >
                      {({ errors, touched, values }) => (
                        <Form>
                          <FormControl>
                            <Flex mb='24px' gap={"10"}
                              display={{ base: "block", sm: "flex" }}
                              justifyContent={{
                                base: "initial",
                                sm: "space-between",
                                xl: "space-between",
                              }}>

                              <Box w='100%' mb={{ base: '24px', md: '0' }}>
                                <Field
                                  as={InputField}
                                  size="md"
                                  label="Display Name"
                                  type="text"
                                  placeholder="Enter your display name"
                                  _placeholder={{ fontWeight: '400' }}
                                  name="displayName"
                                  formLabelProps={{ fontWeight: '500!important' }}
                                  formControlProps={{ marginTop: '0px', marginBottom: '0px', fontWeight: '500!important' }}
                                  maxLength={50} />
                              </Box>

                              <Box w='100%'>
                                <Field
                                  as={InputField}
                                  size="md"
                                  label="Username"
                                  type="text"
                                  placeholder="Enter your username"
                                  _placeholder={{fontWeight:'400'}}
                                  formLabelProps={{ fontWeight: '500!important' }}
                                  formControlProps={{ marginTop: '0px', marginBottom: '0px'}}
                                  name="userName"
                                  maxLength={50} />
                              </Box>
                            </Flex>
                            <Box mb='24px'>
                              <FormControl my='0' fontWeight='500'>Short bio</FormControl>
                              <Field
                                name="bio"
                                component={ChakraTextarea}
                                formControlProps={{ marginTop: '0px', marginBottom: '0px' }}
                                placeholder="Tel about your self in few words"
                                desc=''
                              />
                            </Box>
                            <Flex mb='24px' gap={"10"}
                              display={{ base: "block", sm: "flex" }}
                              justifyContent={{
                                base: "initial",
                                sm: "space-between",
                                xl: "space-between",
                              }}>

                              <Box w='100%' mb={{ base: '24px', md: '0' }}>
                                <Field
                                  as={InputField}
                                  size="md"
                                  label="Email"
                                  type="text"
                                  _placeholder={{fontWeight:'400'}}
                                  placeholder="Enter your email"
                                  formControlProps={{ marginTop: '0px', marginBottom: '0px' }}
                                  formLabelProps={{ fontWeight: '500!important' }}
                                  name="email"
                                  maxLength={50} />
                              </Box>

                              <Box w='100%'>
                                <Field
                                  as={InputField}
                                  size="md"
                                  label="Website URL"
                                  type="text"
                                  placeholder="https://"
                                  _placeholder={{fontWeight:'400'}}
                                  formControlProps={{ marginTop: '0px', marginBottom: '0px' }}
                                  formLabelProps={{ fontWeight: '500!important' }}
                                  name="websiteUrl"
                                  maxLength={50} />

                              </Box>
                            </Flex>
                            <Flex mb='24px' display={{ base: 'block', sm: 'flex' }} justifyContent={{ base: 'initial', sm: 'space-between', xl: 'space-between' }}>

                              <Box w={{ base: '100%', md: '47%', lg: '48%' }}>
                                <Field
                                  as={InputField}
                                  size="md"
                                  label="Etherscan"
                                  type="text"
                                  placeholder="https://"
                                  _placeholder={{fontWeight:'400'}}
                                  formControlProps={{ marginTop: '0px', marginBottom: '0px' }}
                                  formLabelProps={{ fontWeight: '500!important' }}
                                  name="etherScanUrl"
                                  maxLength={50} />
                              </Box>
                            </Flex>

                            <Box mb='24px'>
                              <Heading fontSize={'24px'}>Social Links</Heading>
                              <Text fontSize={'16px'} m='16px 0 20px'>Add your existing social links to build a stronger reputation.</Text>
                              <Flex
                                gap={"10"}
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
                                  placeholder="https://"
                                  _placeholder={{fontWeight:'400'}}
                                  formLabelProps={{ fontWeight: '500!important' }}
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
                                  _placeholder={{fontWeight:'400'}}
                                  formLabelProps={{ fontWeight: '500!important' }}
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
                                gap={"10"}
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
                                  _placeholder={{fontWeight:'400'}}
                                  formLabelProps={{ fontWeight: '500!important' }}
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
                                  placeholder="https://"
                                  name="discord"
                                  _placeholder={{fontWeight:'400'}}
                                  formLabelProps={{ fontWeight: '500!important' }}
                                  errorText={
                                    touched["discord"] && errors["discord"]
                                      ? errors["discord"]
                                      : undefined
                                  }
                                  maxLength={50}
                                />
                              </Flex>

                            </Box>
                            <Flex gap={{ base: '0', sm: '2', md: '6' }} display={{ base: 'block', sm: 'flex' }} justifyContent={{ base: 'initial', sm: 'space-between', xl: 'space-between' }}>
                              <Stack w={{ base: '100%', md: '47%', lg: '48%' }}>
                                <Field
                                  as={InputField}
                                  size="md"
                                  label="Wallet Address"
                                  type="copy"
                                  placeholder="0X000000"
                                  formControlProps={{ marginTop: '0px', marginBottom: '0px' }}
                                  name="walletAddress"
                                  formLabelProps={{ fontWeight: '500!important' }}
                                  fontSize='12px'
                                  bg='rgba(104, 99, 243, 0.2)'
                                  color='#393F59'
                                  maxLength={50} />
                              </Stack>
                            </Flex>
                          </FormControl>
                          <Button mt='30px' textTransform='uppercase' type='submit' variant='primary'>
                            Save Settings
                          </Button>
                        </Form>
                      )}
                    </Formik>
                  </Box>
                </Container>
              </TabPanel>
              {/* <TabPanel p={0}>
                <Container maxW={{ sm: '2xl', md: '3xl', lg: '4xl', xl: '5xl' }} px={{ base: '0', md: '30px' }}>
                  <Flex flexDirection='row' mt='15px' >
                    <Box mb='10px'>
                      <Heading
                        as='h3'
                        fontSize={{
                          base: '20px',
                          sm: '24px',
                        }}
                        mb={{ base: '10px', lg: '16px' }}>
                        Notification Settings
                      </Heading>
                      <Text fontSize={{ base: '14px', md: '16px' }} color='#393F59'>
                        Select the kinds of notifications you’d like receive to your email and in-app notifications center.
                      </Text>
                    </Box>
                  </Flex>
                  <Formik initialValues={initialSettings} onSubmit={(values) => {
                    save(values)
                  }}>
                    <Form>
                      <FormControl py={{ base: '0px', md: '16px' }}>
                        <Flex alignItems='center' justifyContent='space-between' p='24px' borderRadius='6px' border='1px solid #6F6BF366' bg='#fff'>
                          <Box>
                            <FormLabel fontSize='20px' mb='12px' htmlFor='isRequired'>iBanera Newsletter</FormLabel>
                            <Text fontSize={{ base: '14px', md: '16px' }} mr='18px' color='#393F59'>Occasional updates from the iBanera</Text>
                          </Box>
                          <Field name="switchField">
                            {({ field }: { field: any }) => (
                              <Switch
                                id="status"
                                isChecked={field.value}
                                onChange={field.onChange}
                              />
                            )}
                          </Field>
                          <ErrorMessage name="status" component="div" />
                        </Flex>
                      </FormControl>
                      <Button mt='30px' textTransform='uppercase' type='submit' variant='primary'>
                        Save Setting
                      </Button>
                    </Form>
                  </Formik>
                </Container>
              </TabPanel> */}
            </TabPanels>
          </Tabs></Box></Container >
    </>
  )
}
export default Setting