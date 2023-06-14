import { Tab, TabList, Tabs, SimpleGrid, Flex, Box } from "@chakra-ui/react"
import CollectionCard from "../Cards/CollectionCard"
import { color } from "framer-motion"

type FilterTabs = {
    tabsList?: string[],
    getTabIndex: (index: number) => void
}

export const FilterTabs = ({ tabsList, getTabIndex }: FilterTabs) => {
    return (
        <>
            <Tabs onChange={(index) => getTabIndex(index)}>
                <TabList pl='0' mx={{ base: '0', md: '17px' }} flexWrap='wrap' borderBottom={{ base: '0px solid rgba(53, 53, 53, 0.2)', sm: '1px solid rgba(53, 53, 53, 0.2)' }}>
                    {tabsList && tabsList?.map((value, index) => <Tab  _selected={{ p:{ base: '5px 8px', md: '8px 16px' }, color:'#6863F3', borderColor:'#6863F3'}} p={{ base: '5px 8px', md: '8px 16px' }} key={index}>{value}</Tab>)}
                </TabList>
                <Flex flexWrap='wrap' rowGap='16px' pt='24px'>
                    <Box width={{ base: '100%', sm: '50%', md: '33%', xl: '25%' }}>
                        <CollectionCard type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage={true} isShowLogoImage={false} name="Peppy Road" />
                    </Box>
                    <Box width={{ base: '100%', sm: '50%', md: '33%', xl: '25%' }}>
                        <CollectionCard type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage={true} isShowLogoImage={false} name="Peppy Road" />
                    </Box>
                    <Box width={{ base: '100%', sm: '50%', md: '33%', xl: '25%' }}>
                        <CollectionCard type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage={true} isShowLogoImage={false} name="Peppy Road" />
                    </Box>
                    <Box width={{ base: '100%', sm: '50%', md: '33%', xl: '25%' }}>
                        <CollectionCard type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage={true} isShowLogoImage={false} name="Peppy Road" />
                    </Box>
                    <Box width={{ base: '100%', sm: '50%', md: '33%', xl: '25%' }}>
                        <CollectionCard type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage={true} isShowLogoImage={false} name="Peppy Road" />
                    </Box>
                    <Box width={{ base: '100%', sm: '50%', md: '33%', xl: '25%' }}>
                        <CollectionCard type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage={true} isShowLogoImage={false} name="Peppy Road" />
                    </Box>
                    <Box width={{ base: '100%', sm: '50%', md: '33%', xl: '25%' }}>
                        <CollectionCard type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage={true} isShowLogoImage={false} name="Peppy Road" />
                    </Box>
                    <Box width={{ base: '100%', sm: '50%', md: '33%', xl: '25%' }}>
                        <CollectionCard type="withBody" featureImage="/assets/images/nft1.png" isShowFeatureImage={true} isShowLogoImage={false} name="Peppy Road" />
                    </Box>
                </Flex>
            </Tabs>
        </>
    )
}