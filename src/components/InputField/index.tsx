
import React, { useRef, useState } from 'react';

import {
  FormControl,
  Input,
  Button,
  InputRightElement,
  InputGroup,
  InputProps as ChakraUIInputProps,
  FormControlProps,
  Text,
  Flex,
  FormLabelProps,
  FormLabel,
  useClipboard
} from '@chakra-ui/react';
import { SearchIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';


export type InputProps = ChakraUIInputProps & {
  label?: string;
  fontSize?: string;
  formControlProps?: FormControlProps;
  formLabelProps?: FormLabelProps;
  type?: React.HTMLInputTypeAttribute | "search";
  errorText?: string;
  icon?: JSX.Element;
  ref?:string
};

const InputField = ({
  label,
  type,
  placeholder,
  name,
  onChange,
  formControlProps,
  formLabelProps,
  icon,
  size,
  errorText,
  width,
  maxLength,
  fontSize = '16px!important',
  ref,
  minLength,
  ...restProps
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const { onCopy, value, setValue, hasCopied } = useClipboard("");
  const inputRef = useRef();
  return (
    <FormControl width={width} {...formControlProps}>
      {label && (
        <Flex alignItems="center">
          <FormLabel mb='16px' fontSize={fontSize} {...formLabelProps}>
            {label}
          </FormLabel>
        </Flex>
      )}
      <InputGroup size={size ?? "lg"}>
        <Input
          isInvalid={!!errorText}
          errorBorderColor="red.700!important"
          type={!showPassword ? type : "text"}
          color="red.700!important"
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          fontSize={fontSize ?? "1rem"}
          fontWeight="medium"
          maxLength={maxLength}
          minLength={minLength}
          ref = {ref ?? inputRef}
          variant='custom'

          _placeholder={
            type === "password"
              ? {
                  color: "gray.500",
                  position: "absolute",
                  top: "12px",
                  fontWeight:'500',
                }
              : {
                  color: "gray.500",
                }
          }
          {...restProps}
          autoComplete="off"
        />
        {type==='copy' && (
          <InputRightElement color="#6863F3" cursor="pointer" onClick={()=>setValue('shoaib')}>
          <i  className='icon-copy'></i>
          </InputRightElement>
        )}
        {type === 'password' && (
          <InputRightElement >
            <Button
              display={!!errorText ? "none" : "block"}
              variant={"ghost"}
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            >
              {showPassword ? (
                <ViewIcon color="black" />
              ) : (
                <ViewOffIcon color="black" />
              )}
            </Button>
          </InputRightElement>
        )}
        {type === "search" && (
          <InputRightElement>
            <SearchIcon color="gray.500" />
          </InputRightElement>
        )}

        {icon && <InputRightElement>{icon}</InputRightElement>}
      </InputGroup>
      {!!errorText && (
        <Text
          color="red.700!important"
          mt="8px"
          fontSize={fontSize ?? "14px"}
          fontWeight="medium"
        >
          {errorText}
        </Text>
      )}
    </FormControl>
  );
};

export default InputField;
