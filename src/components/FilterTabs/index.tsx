import { Tab, TabList, Tabs, SimpleGrid, Flex, Box} from "@chakra-ui/react"
import CollectionCard from "../Cards/CollectionCard"

type FilterTabs = {
    tabsList?:string[],
    getTabIndex: (index:number) => void
}

export const FilterTabs = ({tabsList, getTabIndex}:FilterTabs) => {
    return(
        <>
        <Tabs onChange={(index)=>getTabIndex(index)} >
            <TabList pl='0' m={{base:'0',sm:'17px'}} flexWrap='wrap' borderBottom={{base:'0px solid rgba(53, 53, 53, 0.2)',sm:'1px solid rgba(53, 53, 53, 0.2)'}}>
        {tabsList && tabsList?.map((value, index)=> <Tab key = {index}>{value}</Tab>)}
         </TabList>
         {/* <SimpleGrid columns={[1, 2, 2, 4]} spacingX='40px' spacingY='20px'> */}
         <Flex flexWrap='wrap' rowGap='16px' pt='24px'>
         <Box width={{base:'100%',sm:'50%',md:'33%',xl:'25%'}}>
        <CollectionCard  type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
        </Box>
        <Box width={{base:'100%',sm:'50%',md:'33%',xl:'25%'}}>
        <CollectionCard  type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
        </Box>
        <Box width={{base:'100%',sm:'50%',md:'33%',xl:'25%'}}>
        <CollectionCard  type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
        </Box>
        <Box width={{base:'100%',sm:'50%',md:'33%',xl:'25%'}}>
        <CollectionCard  type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
        </Box>
        <Box width={{base:'100%',sm:'50%',md:'33%',xl:'25%'}}>
        <CollectionCard  type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
        </Box>
        <Box width={{base:'100%',sm:'50%',md:'33%',xl:'25%'}}>
        <CollectionCard  type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
        </Box>
        <Box width={{base:'100%',sm:'50%',md:'33%',xl:'25%'}}>
        <CollectionCard  type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
        </Box>
        <Box width={{base:'100%',sm:'50%',md:'33%',xl:'25%'}}>
        <CollectionCard  type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
        </Box>
       
        </Flex>
        {/* </SimpleGrid> */}
 </Tabs>
</>
    )
}