
import { Tab, TabList, Tabs, Icon,SimpleGrid, Flex, Box, Menu, MenuButton, MenuList, MenuItem, Text, Heading, IconButton} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { ApiUrl } from "../../apis/apiUrl"
import { QUERY_KEYS } from "../../hooks/queryKeys"
import { useQuery } from "../../hooks/useQuery"
import { categoriesType } from "../../types"
import CollectionCard from "../Cards/CollectionCard"
import { color } from "framer-motion"
import { Loader } from "../Loader"
import { useRouter } from "next/router"

type FilterTabs = {
    tabsList?:categoriesType[] | undefined,
    getTabIndex: (index:number) => void
}

export const FilterTabs = ({tabsList, getTabIndex}:FilterTabs) => {
    const [catId, setCatId] = useState<{categoryId:any}>()
    const filterUsingTabs = (index: string)=>{
       setCatId({categoryId:index})
    }
    const router = useRouter()

    const {data, isLoading} = useQuery<any>({
        queryKey:[QUERY_KEYS.GET_COLLECTION_BY_CAT_ID, catId],
        url:ApiUrl.GET_COLLECTION_BY_CAT_ID,
        params:catId ? catId : {categoryId: tabsList && tabsList[0]?.id}
    })


    return(
        <>
        <Tabs>
        <Menu>
            <TabList pl='0' overflowX={{base:'auto',md:'initial'}} mx='17px' borderBottom={{base:'0px solid rgba(53, 53, 53, 0.2)',sm:'1px solid rgba(53, 53, 53, 0.2)'}} gap={{base:'15px',md:'22px'}}>
        {tabsList && tabsList?.slice(0,5).map((category, index)=> <Tab p='17px 8px 8px'  mb='0' _selected={{mb:'0', borderBottom:'2px solid #6863F3',color:'#6863F3',p:{base:'17px 8px'}}} onClick={()=>filterUsingTabs(category?.id)} key = {index}>{category?.name}</Tab>)}
        {tabsList && tabsList?.length >= 5?<Tab _active={{bg:'transparent'}} as={MenuButton}>More <IconButton _active={{color:'#6863F3'}} aria-label="" minW='20px' fontSize='7px' ml='6px' bg='transparent' icon={<i className="icon-ChevronDown"></i>}/></Tab>:''}
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
             <Heading p='75px 0' fontSize='20px' textAlign="center" w="100%" color='#0d0d0d'>Record Not Found</Heading>:
             data?.map((collection:any, index:number)=>{
                 return (
             <Box cursor="pointer" width={{base:'100%',sm:'50%',md:'33%',xl:'25%'}} key={index} onClick={()=>router.push(`/collection/${collection?.id}`)}>
                 <CollectionCard type="withBody" featureImage={collection?.logoImageUrl} isShowFeatureImage = {true} isShowLogoImage={false} name={collection?.name}/>
                 </Box>
                 )
             })
            }
       
        </Flex>
 </Tabs>
</>

    )
}