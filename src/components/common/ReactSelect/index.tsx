import React, { useEffect, useState } from "react";
import {
  ReactSelectTypes as customTypes,
  ReactSelectPropsTypes,
} from "./types";
import Select, { components } from "react-select";
import { FormLabel, Flex } from "@chakra-ui/react";
// import CreatableSelect from "react-select/creatable";

const MultiValueRemove = (props: any) => {
  return (
    <components.MultiValueRemove {...props}>
      <p>X</p>
    </components.MultiValueRemove>
  );
};

const ReactSelect = ({
  options,
  isMultiple,
  getSelectedData,
  identifier,
  label,
  placeholder,
  nftName,
  setNftName,
  nftDesc,
  setNftDesc,
}: // defaultValue,
ReactSelectPropsTypes) => {
  const [value, setValue] = useState<customTypes | null | undefined>(null);

  const handleChangeCategory = (cat: any) => {
    getSelectedData(cat, identifier);
    setValue(cat);
    getSelectedData(cat, identifier);
    setValue(cat);
      nftName && setNftName(nftName);
      nftDesc && setNftDesc(nftDesc);
  };

  // useEffect(() => {
  //   setValue(defaultValue);
  // }, [defaultValue]);

  return (
    <>
      {label && (
        <Flex alignItems="center">
          <FormLabel>{label}</FormLabel>
        </Flex>
      )}
      <Select
        isClearable
        isMulti={isMultiple}
        onChange={(newValue) => handleChangeCategory(newValue)}
        options={options}
        value={value}
        placeholder={placeholder}
        // defaultValue={defaultValue}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "#6863F3" : "#6f6bf366",
            padding: "0.07rem",
            boxShadow: "none",
            width: "100%",
            borderRadius: "6px",
          }),
          indicatorSeparator: () => ({}),
          multiValue: (styles, { data }) => ({
            ...styles,
            backgroundColor: "rgba(104, 99, 243, 0.3)",
            borderRadius: "6px",
            border: "1px solid #6f6bf366",
            height: "40px",
            alignItems: "center",
          }),
          multiValueLabel: (styles, { data }) => ({
            ...styles,
            fontSize: "12px",
            color: "#393F59",
          }),
          multiValueRemove: (styles, { data }) => ({
            ...styles,
            color: "#756C99",
            ":hover": {
              backgroundColor: "transparent",
            },
          }),
        }}
        components={{ MultiValueRemove }}
      />
    </>
  );
};

export default ReactSelect;
