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
  Text
} from '@chakra-ui/react';
import { Field, Form, Formik, FieldArray, ErrorMessage } from 'formik';
import InputField from '../../components/InputField';
import { propertiesSchema } from '../../schemas';
import { ClassNames } from '@emotion/react';

const NftPropertiesModal = ({ isOpen, onClose, properties, setProperties }: any) => {
  const initialValues = {
    properties: properties?.length > 0 ? properties : [{ type: '', name: '' }],
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={'700px'}>
          <ModalHeader>Add Properties</ModalHeader>
          <ModalCloseButton />
          <Formik
            initialValues={initialValues}
            validationSchema={propertiesSchema}
            enableReinitialize
            onSubmit={(values) => {
              setProperties(values?.properties)
              onClose()
            }}
          >
            {({ values }) => (
              <Form>
                <FormControl>
                  <ModalBody pb={6}>
                    <Text color='#393F59' fontSize='16px' mt='16px'>Properties show up underneath your item, are clickable and can be filtered in your collections sidebar.</Text>
                    <FieldArray name='properties'>
                      {({ push, remove }) => (
                        <>
                          {values?.properties?.map(
                            (field: any, index: number) => (
                              <div key={index}>
                                <Flex flexDirection={{base:'column',md:'row'}} justifyContent={{md:'initial',xl:'flex-start'}}>
                                  <div>
                                    <Field
                                      as={InputField}
                                      size='md'
                                      label='Type'
                                      type='text'
                                      maxLength={50}
                                      placeholder='Enter proprty type'
                                      name={`properties.${[index]}.type`}
                                    />
                                    <ErrorMessage
                                      name={`properties.${[index]}.type`}
                                      component='div'
                                    />
                                  </div>
                                  <div>
                                    <Flex alignItems={'center'} ml={{base:'0',md:'20px'}}>
                                      <Field
                                        as={InputField}
                                        size='md'
                                        label='Name'
                                        type='name'
                                        maxLength={50}
                                        placeholder='Enter proprty name'
                                        name={`properties.${[index]}.name`}
                                      />
                                      <ErrorMessage
                                        name={`properties.${[index]}.name`}
                                        component='div'
                                      />

                                      {index > 0 && (
                                        <>
                                          <IconButton aria-label='close' mt='35px' ml={'10px'} type='button' borderColor={'red'} onClick={() => remove(index)} icon={<i className='icon-remove'></i>} />
                                        </>

                                      )}
                                    </Flex>
                                  </div>
                                </Flex>
                              </div>
                            )
                          )}
                          {values?.properties?.length < 12 && (

                            <Button type='button' textDecoration='none' variant='link'
                              onClick={() => push({ type: '', name: '' })} >
                              +Add Property</Button>
                          )}
                        </>
                      )}
                    </FieldArray>
                  </ModalBody>

                  <ModalFooter justifyContent='Center'>
                    <Button type='submit' variant='primary' width='full' colorScheme='blue' mr={3}>
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
