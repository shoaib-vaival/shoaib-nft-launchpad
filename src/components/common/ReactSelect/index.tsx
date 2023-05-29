import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { ReactSelectTypes } from './types'

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
    />
  );
};


export default ReactSelect