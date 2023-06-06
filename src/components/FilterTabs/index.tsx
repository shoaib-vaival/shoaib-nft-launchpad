import { Tab, TabList, Tabs, SimpleGrid} from "@chakra-ui/react"
import CollectionCard from "../Cards/CollectionCard"

type FilterTabs = {
    tabsList?:string[],
    getTabIndex: (index:number) => void
}

export const FilterTabs = ({tabsList, getTabIndex}:FilterTabs) => {
    return(
        <>
        <Tabs onChange={(index)=>getTabIndex(index)}>
            <TabList pl='0' flexWrap='wrap' borderBottom={{base:'0px solid rgba(53, 53, 53, 0.2)',sm:'1px solid rgba(53, 53, 53, 0.2)'}}>
        {tabsList && tabsList?.map((value, index)=> <Tab key = {index}>{value}</Tab>)}
         </TabList>
         <SimpleGrid columns={[1, 2, 2, 4]} spacingX='40px' spacingY='20px'>
        <CollectionCard  type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
        <CollectionCard  type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
        <CollectionCard  type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
        <CollectionCard  type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
        <CollectionCard  type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
        <CollectionCard  type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
        <CollectionCard  type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
        <CollectionCard  type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage = {true} isShowLogoImage={false} name="Peppy Road"/>
        
        </SimpleGrid>
 </Tabs>
</>
    )
}