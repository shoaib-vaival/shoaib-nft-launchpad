
import {Box, Accordion, AccordionItem, AccordionPanel, AccordionButton, Stack, Checkbox, RadioGroup, Radio, Input} from '@chakra-ui/react'
import { useState } from 'react';

type sidebarFilterProps = {
    filterGroups:{
        name:string;
        filters:filtersProps[]
        
    }[],
    onFilterChange?:()=>void
}
type filtersProps = {
    name: string; type: string 
}
export const SidebarFilter = ({filterGroups, onFilterChange}:sidebarFilterProps) =>{
     const [selectedFilters, setSelectedFilters] = useState<any>({});

  const handleFilterChange = (groupName: any, filterName:any, value:any) => {
    setSelectedFilters((prevFilters:any) => ({
      ...prevFilters,
      [groupName]: {
        ...(prevFilters[groupName] || {}),
        [filterName]: value,
      },
    }));
  };

    const renderFilterElement = (groupName:any, filter:any) => {
        switch (filter.type) {
          case 'checkbox':
            return (
              <Checkbox
                key={filter.name}
                onChange={event => handleFilterChange(groupName, filter.name, event.target.checked)}
              >
                {filter.name}
              </Checkbox>
            );
          case 'radio':
            return (
              <RadioGroup
                key={filter.name}
                onChange={value => handleFilterChange(groupName, filter.name, value)}
                value={selectedFilters[groupName]?.[filter.name] || ''}
              >
                <Stack spacing={1}>
                  {filter.options.map((option:any) => (
                    <Radio key={option} value={option}>
                      {option}
                    </Radio>
                  ))}
                </Stack>
              </RadioGroup>
            );
          case 'input':
            return (
              <Input
                key={filter.name}
                placeholder="Enter value"
                onChange={event => handleFilterChange(groupName, filter.name, event.target.value)}
              />
            );
          // Add more cases for different form elements if needed
          default:
            return null;
        }
      };
    return (
        <>
         <Box border="1px solid rgba(111, 107, 243, 0.40)" width="220px" borderRadius="16px" background="rgba(255, 255, 255, 0.40)" flexShrink="0" backdropFilter="blur(30px)">
             <Accordion allowToggle>
                  {filterGroups.map(group => (
        <AccordionItem key={group.name}>
          <h2>
            <AccordionButton>{group.name}</AccordionButton>
          </h2>
          <AccordionPanel>
            <Stack spacing={2}>
              {group.filters.map(filter => renderFilterElement(group.name, filter))}
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      ))}
             </Accordion>
         </Box>
        </>
    )
}