import type { NextPage } from 'next'
import { Box, Flex, IconButton, InputGroup, Input, InputLeftElement, Menu, MenuButton, MenuList, MenuItem, Button} from '@chakra-ui/react'


const FilterBar = () => {


    return (
        <div>
         <Flex justifyContent={'end'}>
              <IconButton
                variant='outline'
                colorScheme='primary'
                aria-label='Send email'
                icon={<i className='icon-funnel'></i>}
              />
              <Box pl={{ base: '0', sm: '0', md: '20px' }} pt={{ base: '20px', md: '0', xl: '0' }} >
                <InputGroup variant='custom' colorScheme='purple' w={{ base: 'full', sm: 'md', xl: 'sm' }} marginBottom={{ base: '3', md: 'initial', xl: 'initial' }} >
                  <Input placeholder='Search...' />
                  <InputLeftElement>
                    <img src='/assets/images/search-icon.svg' />
                  </InputLeftElement>
                </InputGroup>
              </Box>
              <Box  px={'8px'} >
              
                <Menu>
                  <MenuButton as={Button} iconSpacing={'30px'} rightIcon={<i className='icon-Chevron'></i>} p={'15px'} border={'1px solid #6863F3'}>
                    Actions 
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box>
              <IconButton
                variant='outline'
                colorScheme='primary'
                aria-label='Send email'
                icon={<i className='icon-list'></i>}
              />
              </Box>
              <Box>
              <IconButton
                variant='outline'
                colorScheme='primary'
                aria-label='Send email'
                icon={<i className='icon-grid'></i>}
              />
              </Box>
            </Flex>
        </div>
    )
}

export default FilterBar