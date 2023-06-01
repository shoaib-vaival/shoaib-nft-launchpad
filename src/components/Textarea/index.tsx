import React from 'react';
import { Textarea, Button, FormControl, FormLabel, FormErrorMessage, Text, TextareaProps } from '@chakra-ui/react';

  const ChakraTextarea: React.FC<TextareaProps> = ({ field, form, label, placeholder, descp,  ...rest }: any) => {
    return (
      <FormControl isInvalid={form.errors[field.name] && form.touched[field.name]}>
        <FormLabel htmlFor={field.name}>{label}</FormLabel>
        <Textarea {...field} {...rest} placeholder={placeholder}/>
        {descp && <Text>{descp}</Text>}
        <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
      </FormControl>
    );
  };
  
  export default ChakraTextarea