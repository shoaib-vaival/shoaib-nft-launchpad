import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { ReactSelectTypes } from './types'
import {components} from 'react-select'

const MultiValueRemove = (props:any) =>{
  return (
    <components.MultiValueRemove {...props}>
      <p>X</p>
    </components.MultiValueRemove>
  )
}

const ReactSelect = ({options, isMultiple, getSelectedData, identifier}:any) => {
  const [value, setValue] = useState<ReactSelectTypes | null | undefined>(null);

  const handleChangeCategory = (cat:any) => {
    if(!isMultiple){
        getSelectedData(cat, identifier)
    }
    else{
        getSelectedData(cat, identifier)
    }
    setValue(cat)
  }
  

  return (
    <CreatableSelect
      isClearable
      isMulti={isMultiple}
      onChange={(newValue) => handleChangeCategory(newValue as ReactSelectTypes)}
      options={options}
      value={value}
      styles={{
        control:(baseStyles, state)=>({
          ...baseStyles,
          borderColor: state.isFocused ? '#6863F3': '#6863F3',
           boxShadow: 'none',
          width:'100%',
          borderRadius:'6px'
        }),
        indicatorSeparator:()=>({}),
         multiValue: (styles, { data }) => ({
           ...styles,
           backgroundColor:'rgba(104, 99, 243, 0.3)',
           borderRadius:'6px',
           border:'1px solid #6863F3',
           height:'32px',
           alignItems:'center'
         }),
         multiValueLabel: (styles, { data }) => ({
            ...styles,
            fontSize:'12px',
            color:'#393F59',
          }),
          multiValueRemove: (styles, { data }) => ({
            ...styles,
            color: '#756C99',
            ':hover': {
              backgroundColor: 'transparent',
            },
          }),
      }}
      components={{MultiValueRemove}}
    />
  );
};


export default ReactSelect