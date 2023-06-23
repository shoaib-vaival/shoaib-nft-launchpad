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
  IconButton,
  Flex,
  Center,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik, FieldArray, ErrorMessage } from "formik";
import InputField from "../../components/InputField";
import { propertiesSchema } from "../../schemas";
import { ClassNames } from "@emotion/react";

const NftPropertiesModal = ({
  isOpen,
  onClose,
  properties,
  setProperties,
  nftName,
  setNftName,
}: any) => {
  const initialValues = {
    properties: properties?.length > 0 ? properties : [{ type: "", name: "" }],
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"700px"}>
          <ModalHeader>Add Properties</ModalHeader>
          <ModalCloseButton />
          <Formik
            initialValues={initialValues}
            validationSchema={propertiesSchema}
            enableReinitialize
            onSubmit={(values) => console.log(values)}
          >
            {({ values }) => (
              <Form>
                <FormControl>
                  <ModalBody pb={6}>
                    <Text color="#393F59" fontSize="16px" mt="16px">
                      Properties show up underneath your item, are clickable and
                      can be filtered in your collections sidebar.
                    </Text>
                    <Flex mt='16px'>
                      <Text mb='0' w='42%' fontWeight='700'>Type</Text>
                      <Text w='42%' alignItems='baseline' fontWeight='700'>Name</Text>
                    </Flex>
                    <FieldArray name="properties">
                      {({ push, remove }) => (
                        <>
                          {values?.properties?.map(
                            (field: any, index: number) => (
                              <div key={index}>
                                <Flex alignItems='baseline' flexDirection={{ base: 'column', sm: 'row' }} justifyContent={{ md: 'initial', xl: 'flex-start' }}>
                                  <div>
                                    <Field
                                      as={InputField}
                                      size="md"
                                      type="text"
                                      maxLength={50}
                                      placeholder="Enter proprty type"
                                      name={`properties.${[index]}.type`}
                                    />
                                    <ErrorMessage className=""
                                      name={`properties.${[index]}.type`}
                                      component="div"
                                    />
                                  </div>
                                  <div>
                                    <Flex flexDirection='column' alignItems={'baseline'} ml={{ base: '0', sm: '10px' }}>
                                      <Field
                                        as={InputField}
                                        size="md"
                                        type="name"
                                        maxLength={50}
                                        placeholder="Enter proprty name"
                                        name={`properties.${[index]}.name`}
                                      />
                                      <ErrorMessage
                                        name={`properties.${[index]}.name`}
                                        component="div"
                                      />
                                    </Flex>
                                  </div>
                                  {index > 0 && (
                                    <>
                                      <IconButton aria-label='close' bg='#6863F34D' mb={{ base: '10px', sm: '0' }} ml={{ base: '0', sm: '10px' }} type='button' color='#6863F3' border='1px solid #6863F3' onClick={() => remove(index)} icon={<i className='icon-remove'></i>} />
                                    </>

                                  )}
                                </Flex>
                              </div>
                            )
                          )}
                          {values?.properties?.length < 12 && (

                            <Button color='#6863F3' fontSize='14px' fontWeight='bold' bg='transparent' p='0' type='button' textDecoration='none' variant='link'
                              onClick={() => push({ type: '', name: '' })} >
                              +Add Property</Button>

                          )}
                        </>
                      )}
                    </FieldArray>
                  </ModalBody>

                  <ModalFooter justifyContent="Center">
                    <Button
                      // type="submit"
                      variant="primary"
                      width="full"
                      colorScheme="blue"
                      mr={3}
                      onClick={() => {
                        setProperties(values?.properties);
                        setNftName(nftName);
                        onClose();
                      }}
                    >
                      Save
                    </Button>
                  </ModalFooter>
                </FormControl>
              </Form>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NftPropertiesModal;
