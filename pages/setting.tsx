import { Container, Flex, Box, Heading, Text } from "@chakra-ui/layout";
import { Button, Select, Stack, Switch, FormControl, FormLabel, Input, Textarea, Checkbox } from '@chakra-ui/react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { NextPage } from "next";
import { useState } from "react";
import ProfileHeader from "../src/components/Profile/ProfileHeader";



const Setting: NextPage = () => {
  const [isGroupMode, setIsGroupMode] = useState<boolean>(true)
  const changeViewMode = (mode: string) => {
    if (mode === 'group') {
      setIsGroupMode(true)
    }
    if (mode === 'list') {
      setIsGroupMode(false)
    }
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
                  <ProfileHeader showSocialIcons={false} />
                </Box>
                <Container maxW={{ sm: '2xl', md: '3xl', lg: '4xl', xl: '5xl' }} p={{ base: '0', md: '16px' }}>
                  <Box>
                    <FormControl>
                      <Flex mb='24px' gap={"10"}
                        display={{ base: "block", sm: "flex" }}
                        justifyContent={{
                          base: "initial",
                          sm: "space-between",
                          xl: "space-between",
                        }}>

                        <Box w='100%' mb={{ base: '24px', md: '0' }}>
                          <FormLabel fontSize='16px' fontWeight='700' mb='16px!important'>Display Name</FormLabel>
                          <Input boxShadow='2px 2px 8px rgba(13, 13, 13, 0.1)' borderRadius='6px' border='1px solid #6F6BF366' placeholder='Enter your display name' />
                        </Box>

                        <Box w='100%'>
                          <FormLabel fontSize='16px' fontWeight='500' mb='16px!important'>Display Name</FormLabel>
                          <Input boxShadow='2px 2px 8px rgba(13, 13, 13, 0.1)' borderRadius='6px' border='1px solid #6F6BF366' placeholder='Enter your username' />
                        </Box>
                      </Flex>
                      <Box mb='24px'>
                        <Text fontSize='16px' fontWeight='500!important' mb='16px!important'>Short Bio</Text>
                        <Textarea boxShadow='2px 2px 8px rgba(13, 13, 13, 0.1)' borderRadius='6px' border='1px solid #6F6BF366'
                          value=''
                          placeholder='Tel about your self in few words'
                          size='md'
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
                          <FormLabel fontSize='16px' fontWeight='500' mb='16px!important'>Email</FormLabel>
                          <Input boxShadow='2px 2px 8px rgba(13, 13, 13, 0.1)' borderRadius='6px' border='1px solid #6F6BF366' placeholder='Enter your email' />
                        </Box>

                        <Box w='100%'>
                          <FormLabel fontSize='16px' fontWeight='500' mb='16px!important'>Email</FormLabel>
                          <Input boxShadow='2px 2px 8px rgba(13, 13, 13, 0.1)' borderRadius='6px' border='1px solid #6F6BF366' placeholder='Email' />
                        </Box>
                      </Flex>
                      <Flex mb='24px' display={{ base: 'block', sm: 'flex' }} justifyContent={{ base: 'initial', sm: 'space-between', xl: 'space-between' }}>

                      <Box w={{ base: '100%', md: '47%', lg: '48%' }}>
                          <FormLabel fontSize='16px' fontWeight='500' mb='16px!important'>Etherscan</FormLabel>
                          <Input boxShadow='2px 2px 8px rgba(13, 13, 13, 0.1)' borderRadius='6px' border='1px solid #6F6BF366' placeholder='https://' />
                        </Box>
                      </Flex>

                      <Box mb='24px'>
                        <Heading fontSize={'24px'}>Social Links</Heading>
                        <Text fontSize={'16px'} m='16px 0 20px'>Add your existing social links to build a stronger reputation.</Text>
                        <Box>
                          <Flex mb='24px' columnGap={'10'} flexDirection={{ base: 'column', md: 'row' }} justifyContent={{ base: 'initial', sm: 'space-between' }}>
                            <Box w='100%' display='flex' p={{ base: '22px', md: '24px 32px' }} justifyContent='space-between' alignItems='center' bg='rgba(104, 99, 243, 0.1)' boxShadow='2px 2px 8px rgba(13, 13, 13, 0.1)' borderRadius='lg' border='1px solid rgba(111, 107, 243, 0.4)' mb={{ base: '24px', md: '0' }}>
                              <Flex display='flex' alignItems='center'>
                                <Box color=' #6863F3' fontSize='20px' mr={{ base: '8px', md: '16px' }}>
                                  <i className='icon-instagram'></i>
                                </Box>
                                <Text fontSize='18px' color='#6863F3'>Twitter</Text>
                              </Flex>
                              <FormLabel htmlFor='label' border='1px solid #6863F3' borderRadius='8px' bg='purple.500' color='white' p={{ base: '12px 16px', md: '14px 32px' }} mb='0!important'>
                                <Checkbox id='label' color='white' display='none'></Checkbox>
                                Disconnect
                              </FormLabel>
                            </Box>
                            <Box w='100%' display='flex' p={{ base: ' 22px', md: '24px 32px' }} justifyContent='space-between' alignItems='center' bg='#fff' boxShadow='2px 2px 8px rgba(13, 13, 13, 0.1)' borderRadius='lg' border='1px solid rgba(111, 107, 243, 0.4)' mb={{ base: '24px', md: '0' }}>
                              <Flex display='flex' alignItems='center'>
                                <Box color=' #393F59' fontSize='20px' mr={{ base: '8px', md: '16px' }}>
                                  <i className='icon-instagram'></i>
                                </Box>
                                <Text fontSize='18px' color='#393F59'>Twitter</Text>
                              </Flex>
                              <FormLabel htmlFor='label' border='1px solid #6863F3' borderRadius='8px' bg='purple.500' color='white' p={{ base: '12px 16px', md: '14px 32px' }} mb='0!important'>
                                <Checkbox id='label' color='white' display='none'></Checkbox>
                                Disconnect
                              </FormLabel>
                            </Box>
                          </Flex>
                          <Flex mb='24px' columnGap={'10'} display={{ base: 'block', md: 'flex' }} justifyContent={{ base: 'initial', sm: 'space-between' }}>
                            <Box w='100%' display='flex' p={{ base: '22px', md: '24px 32px' }} justifyContent='space-between' alignItems='center' bg='rgba(104, 99, 243, 0.1)' boxShadow='2px 2px 8px rgba(13, 13, 13, 0.1)' borderRadius='lg' border='1px solid rgba(111, 107, 243, 0.4)' mb={{ base: '24px', md: '0' }}>
                              <Flex display='flex' alignItems='center'>
                                <Box color=' #6863F3' fontSize='20px' mr={{ base: '8px', md: '16px' }}>
                                  <i className='icon-instagram'></i>
                                </Box>
                                <Text fontSize='18px' color='#6863F3'>Twitter</Text>
                              </Flex>
                              <FormLabel htmlFor='label' border='1px solid #6863F3' borderRadius='8px' bg='purple.500' color='white' p={{ base: '12px 16px', md: '14px 32px' }} mb='0!important'>
                                <Checkbox id='label' color='white' display='none'></Checkbox>
                                Disconnect
                              </FormLabel>
                            </Box>


                            <Box w='100%' display='flex' p={{ base: ' 22px', md: '24px 32px' }} justifyContent='space-between' alignItems='center' bg='#fff' boxShadow='2px 2px 8px rgba(13, 13, 13, 0.1)' borderRadius='lg' border='1px solid rgba(111, 107, 243, 0.4)' mb={{ base: '24px', md: '0' }}>
                              <Flex display='flex' alignItems='center'>
                                <Box color=' #393F59' fontSize='20px' mr={{ base: '8px', md: '16px' }}>
                                  <i className='icon-instagram'></i>
                                </Box>
                                <Text fontSize='18px' color='#393F59'>Twitter</Text>
                              </Flex>
                              <FormLabel htmlFor='label' border='1px solid #6863F3' borderRadius='8px' bg='purple.500' color='white' p={{ base: '12px 16px', md: '14px 32px' }} mb='0!important'>
                                <Checkbox id='label' color='white' display='none'></Checkbox>
                                Disconnect
                              </FormLabel>
                            </Box>
                          </Flex>

                        </Box>
                      </Box>
                      <Flex gap={{ base: '0', sm: '2', md: '6' }} display={{ base: 'block', sm: 'flex' }} justifyContent={{ base: 'initial', sm: 'space-between', xl: 'space-between' }}>
                        {/* 
                        <Stack w={{ base: '100%', md: 'md' }}>
                          <FormLabel fontSize='16px' fontWeight='500' mb='16px'>Select Currency</FormLabel>
                          <Select placeholder='Select option' boxShadow='2px 2px 8px rgba(13, 13, 13, 0.1)' borderRadius='6px' border='1px solid #6F6BF366'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                          </Select>
                        </Stack> */}
                        <Stack w={{ base: '100%', md: '47%', lg: '48%' }}>
                          <FormLabel fontSize='16px' fontWeight='500' mb='16px'>Wallet Address</FormLabel>
                          <Button bg='rgba(104, 99, 243, 0.2);' boxShadow='2px 2px 8px rgba(13, 13, 13, 0.1)' color='#393F59' borderRadius='6px' p='14px 16px' fontSize='12px' height='initial' border='1px solid #6863F3'>
                            <Text mr='auto'>0x797970 … 8080</Text> <i className='icon-copy'></i>
                          </Button>
                        </Stack>
                      </Flex>
                    </FormControl>
                    <Button mt='30px' textTransform='uppercase' type='submit' variant='primary'>
                      Save Setting
                    </Button>
                  </Box>
                </Container>
              </TabPanel>
              <TabPanel>
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
                  <FormControl p={{ base: '0px', md: '16px' }}>
                    <Flex alignItems='center' justifyContent='space-between' p='24px' borderRadius='6px' border='1px solid #6F6BF366' bg='#fff'>
                      <Box>
                        <FormLabel fontSize='20px' mb='12px' htmlFor='isRequired'>iBanera Newsletter</FormLabel>
                        <Text fontSize={{ base: '14px', md: '16px' }} color='#393F59'>Occasional updates from the iBanera</Text>
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