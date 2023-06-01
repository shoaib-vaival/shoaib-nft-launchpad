import type { NextPage } from 'next'
import { Box, Tabs, TabList, Tab} from '@chakra-ui/react'


const FilterBar: NextPage = () => {


    return (
        <div>
         <Box>
              <Tabs >
                <TabList fontWeight='bold'>
                  <Tab _selected={{ color: '#6863F3', borderBottom: '2px solid #6863F3', fontWeight: 'bold' }}>Collected</Tab>
                  <Tab _selected={{ color: '#6863F3', borderBottom: '2px solid #6863F3', fontWeight: 'bold' }}>Created</Tab>
                  <Tab _selected={{ color: '#6863F3', borderBottom: '2px solid #6863F3', fontWeight: 'bold' }}>Activity</Tab>
                </TabList>
              </Tabs>
            </Box>
        </div>
    )
}

export default FilterBar