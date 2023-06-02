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
            <TabList>
        {tabsList && tabsList?.map((value, index)=> <Tab key = {index}>{value}</Tab>)}
         </TabList>
         <SimpleGrid columns={[1, 2, 4]} mt={6} spacing={3}>
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