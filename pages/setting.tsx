import { Container, Flex, Box, Heading, Text } from "@chakra-ui/layout";
import { Button, Select, Stack, Switch, FormControl, FormLabel, Input, Textarea, Checkbox } from '@chakra-ui/react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { Field, Form, Formik } from "formik";
import { NextPage } from "next";
import { useState } from "react";
import { ApiUrl } from "../src/apis/apiUrl";
import InputField from "../src/components/InputField";
import ProfileHeader from "../src/components/Profile/ProfileHeader";
import ChakraTextarea from "../src/components/Textarea";
import { PATCH } from "../src/hooks/consts";
import { QUERY_KEYS } from "../src/hooks/queryKeys";
import { useMutation } from "../src/hooks/useMutation";
import { useQuery } from "../src/hooks/useQuery";



const Setting: NextPage = () => {

  const {data:profile} = useQuery<any>({
    queryKey:[QUERY_KEYS.GET_PROFILE],
    url:`${ApiUrl.GET_PROFILE_BY_ID}/${1}`
  })
  
   const { mutate } = useMutation<any>({
    method: PATCH,
    url: `${ApiUrl.UPDATE_PROFILE}/${1}`,
    showSuccessToast: true,
  });

  const initialValues = {
    displayName:profile?.displayName,
    userName:profile?.userName,
    bio:profile?.bio,
    email:profile?.email,
    websiteUrl:profile?.websiteUrl,
    etherScanUrl:profile?.etherScanUrl,
    walletAddress:profile?.walletAddress,
    telegram: profile?.telegram,
    twitter: profile?.twitter,
    instagram: profile?.instagram,
    discord: profile?.discord,

  }

  return (
    <>
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }}>
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
      <Container maxW={{ sm: 'xl', md: '3xl', lg: '5xl', xl: '7xl' }}>
        <Box mt='24px'>
          <Tabs>
            <TabList ml='12px' pl='0'>
              <Tab>Account</Tab>
              <Tab>Notifications</Tab>
            </TabList>

            <TabPanels>
              <TabPanel p={0}>
                <Box mt='15px' px={{ base: '0', md: '17px' }} mb={{ base: '40px', md: '85px' }}>
                  <ProfileHeader showSocialIcons={false} coverPhoto={profile?.profileCoverURL}  profilePhoto={profile?.profileUrl} />
                </Box>
                <Container maxW={{ sm: '2xl', md: '3xl', lg: '4xl', xl: '5xl' }} p={{ base: '0', md: '16px' }}>
                  <Box>
                    <Formik
                     initialValues={initialValues}
                    //  validationSchema={{}}
                     enableReinitialize
                     onSubmit={(values) => {
                       mutate(values)
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
                               name="displayName"
                               formControlProps={{marginTop:'0px', marginBottom:'0px'}}
                               maxLength={50}/>
                        </Box>

                        <Box w='100%'>
                            <Field
                               as={InputField}
                               size="md"
                               label="UserName"
                               type="text"
                               placeholder="Enter your username"
                               formControlProps={{marginTop:'0px', marginBottom:'0px'}}
                               name="userName"
                               maxLength={50}/>
                          {/* <FormLabel fontSize='16px' fontWeight='500' mb='16px!important'>Display Name</FormLabel>
                          <Input boxShadow='2px 2px 8px rgba(13, 13, 13, 0.1)' borderRadius='6px' border='1px solid #6F6BF366' placeholder='Enter your username' /> */}
                        </Box>
                      </Flex>
                      <Box mb='24px'>
                         <Field
                name="bio"
                component={ChakraTextarea}
                formControlProps={{marginTop:'0px', marginBottom:'0px'}}
                label="Short Bio"
                placeholder="Tel about your self in few words"
                desc=''
              />
                        {/* <Text fontSize='16px' fontWeight='500!important' mb='16px!important'>Short Bio</Text>
                        <Textarea boxShadow='2px 2px 8px rgba(13, 13, 13, 0.1)' borderRadius='6px' border='1px solid #6F6BF366'
                          value=''
                          placeholder='Tel about your self in few words'
                          size='md'
                        /> */}
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
                               placeholder="Enter your email"
                               formControlProps={{marginTop:'0px', marginBottom:'0px'}}
                               name="email"
                               maxLength={50}/>
                          {/* <FormLabel fontSize='16px' fontWeight='500' mb='16px!important'>Email</FormLabel>
                          <Input boxShadow='2px 2px 8px rgba(13, 13, 13, 0.1)' borderRadius='6px' border='1px solid #6F6BF366' placeholder='Enter your email' /> */}
                        </Box>

                        <Box w='100%'>
                           <Field
                               as={InputField}
                               size="md"
                               label="Website URL"
                               type="text"
                               placeholder="https://"
                               formControlProps={{marginTop:'0px', marginBottom:'0px'}}
                               name="websiteUrl"
                               maxLength={50}/>
                         
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
                               formControlProps={{marginTop:'0px', marginBottom:'0px'}} 
                               name="etherScanUrl"
                               maxLength={50}/>
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
                    name="discord"
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
                               formControlProps={{marginTop:'0px', marginBottom:'0px'}} 
                               name="walletAddress"
                               fontSize='12px'
                               bg='rgba(104, 99, 243, 0.2)'
                                color='#393F59'
                               maxLength={50}/>
                        </Stack>
                      </Flex>
                    </FormControl>
                    <Button mt='30px' textTransform='uppercase' type='submit' variant='primary'>
                      Save Setting
                    </Button>
                      </Form>
                      )}
                    </Formik>
                  </Box>
                </Container>
              </TabPanel>
              <TabPanel p={0}>
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
                  <FormControl py={{ base: '0px', md: '16px' }}>
                    <Flex alignItems='center' justifyContent='space-between' p='24px' borderRadius='6px' border='1px solid #6F6BF366' bg='#fff'>
                      <Box>
                        <FormLabel fontSize='20px' mb='12px' htmlFor='isRequired'>iBanera Newsletter</FormLabel>
                        <Text fontSize={{ base: '14px', md: '16px' }} mr='18px' color='#393F59'>Occasional updates from the iBanera</Text>
                      </Box>
                      <Switch colorScheme='purple' id='isRequired' isRequired />
                    </Flex>
                  </FormControl>
                  <Button mt='30px' textTransform='uppercase' type='submit' variant='primary'>
                    Save Setting
                  </Button>
                </Container>
              </TabPanel>
            </TabPanels>
          </Tabs></Box></Container >
    </>
  )
}
export default Setting