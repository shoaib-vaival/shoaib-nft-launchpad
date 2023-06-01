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
} from "@chakra-ui/react";
import { Field, Form, Formik, FieldArray, ErrorMessage } from "formik";
import InputField from "../../components/InputField";
import { propertiesSchema } from "../../../pages/create-nft/schema";

const NftPropertiesModal = ({ isOpen, onClose, properties, setProperties }: any) => {
  const initialValues = {
    properties: properties?.length > 0 ? properties : [{ type: "", name: "" }],
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
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
                    <FieldArray name="properties">
                      {({ push, remove }) => (
                        <>
                          {values?.properties?.map(
                            (field: any, index: number) => (
                              <div key={index}>
                                <div>
                                  <Field
                                    as={InputField}
                                    size="md"
                                    label="Type"
                                    type="text"
                                    maxLength={50}
                                    placeholder="Enter proprty type"
                                    name={`properties.${[index]}.type`}
                                  />
                                  <ErrorMessage
                                    name={`properties.${[index]}.type`}
                                    component="div"
                                  />
                                </div>
                                <div>
                                  <Field
                                    as={InputField}
                                    size="md"
                                    label="Name"
                                    type="name"
                                    maxLength={50}
                                    placeholder="Enter proprty name"
                                    name={`properties.${[index]}.name`}
                                  />
                                  <ErrorMessage
                                    name={`properties.${[index]}.name`}
                                    component="div"
                                  />
                                </div>
                                {index > 0 && (
                                  <button
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    Delete icon
                                  </button>
                                )}
                              </div>
                            )
                          )}
                          {values?.properties?.length < 12 && (
                            <button
                              type="button"
                              onClick={() => push({ type: "", name: "" })}
                            >
                              +Add Property
                            </button>
                          )}
                        </>
                      )}
                    </FieldArray>
                  </ModalBody>

                  <ModalFooter>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="submit" colorScheme="blue" mr={3}>
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
