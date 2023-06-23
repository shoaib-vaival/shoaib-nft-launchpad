import React from 'react';
import { Textarea, Button, FormControl, FormLabel, FormErrorMessage, Text, TextareaProps } from '@chakra-ui/react';

  const ChakraTextarea: React.FC<TextareaProps> = ({ field, form, label, placeholder, descp,  ...rest }: any) => {
    return (
      <FormControl my='0' isInvalid={form.errors[field.name] && form.touched[field.name]}>
        <FormLabel htmlFor={field.name}>{label}</FormLabel>
        <Textarea {...field} {...rest} placeholder={placeholder} boxShadow='2px 2px 8px rgba(13, 13, 13, 0.1)' borderRadius='6px' border='1px solid #6F6BF366'/>
        {descp && <Text>{descp}</Text>}
        <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
      </FormControl>
    );
  };
  
  export default ChakraTextarea