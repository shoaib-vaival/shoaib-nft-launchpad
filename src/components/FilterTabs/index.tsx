
import { Tab, TabList, Tabs, SimpleGrid, Flex, Box, Menu, MenuButton, MenuList, MenuItem, Text} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { ApiUrl } from "../../apis/apiUrl"
import { QUERY_KEYS } from "../../hooks/queryKeys"
import { useQuery } from "../../hooks/useQuery"
import { categoriesType } from "../../types"
import CollectionCard from "../Cards/CollectionCard"
import { color } from "framer-motion"
import { Loader } from "../Loader"

type FilterTabs = {
    tabsList?:categoriesType[] | undefined,
    getTabIndex: (index:number) => void
}

export const FilterTabs = ({tabsList, getTabIndex}:FilterTabs) => {
    const [catId, setCatId] = useState<{categoryId:any}>()
    const filterUsingTabs = (index: string)=>{
       setCatId({categoryId:index})
    }

    const {data, isLoading} = useQuery<any>({
        queryKey:[QUERY_KEYS.GET_COLLECTION_BY_CAT_ID, catId],
        url:ApiUrl.GET_COLLECTION_BY_CAT_ID,
        params:catId ? catId : {categoryId: tabsList && tabsList[0]?.id}
    })


    return(
        <>
        <Tabs >
        <Menu>
            <TabList pl='0' overflowX={{base:'auto',md:'initial'}} maxH={{base:'52px',md:'initial'}} mx='17px' borderBottom={{base:'0px solid rgba(53, 53, 53, 0.2)',sm:'1px solid rgba(53, 53, 53, 0.2)'}}>
        {tabsList && tabsList?.slice(0,5).map((category, index)=> <Tab onClick={()=>filterUsingTabs(category?.id)} key = {index}>{category?.name}</Tab>)}
        {tabsList && tabsList?.length >= 5?<Tab as={MenuButton}>More</Tab>:''}
         </TabList>
         <MenuList >
        {tabsList && tabsList?.slice(5,tabsList.length).map((category, index)=> {return(
                <MenuItem key={index} onClick={()=>filterUsingTabs(category?.id)}>{category?.name}</MenuItem>
                )})}
                </MenuList>
        </Menu>
         <Flex flexWrap='wrap' rowGap='16px' pt='24px'>
             {isLoading && <Flex width="100%" height="100%" justifyContent='center' alignItems="center"><Loader /></Flex>}
             {data?.length <= 0 ?      
             <Text textAlign="center" w="100%">Data Not Found</Text>:
             data?.map((collection:any, index:number)=>{
                 return (
             <Box width={{base:'100%',sm:'50%',md:'33%',xl:'25%'}} key={index}>
                 <CollectionCard   type="withBody" featureImage={collection?.logoImageUrl} isShowFeatureImage = {true} isShowLogoImage={false} name={collection?.name}/>
                 </Box>
                 )
             })
            }
       
        </Flex>
 </Tabs>
</>

    )
}