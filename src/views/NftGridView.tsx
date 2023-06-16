import { Flex, Box} from "@chakra-ui/layout"
import InfiniteScroll from "react-infinite-scroll-component"
import { Loader } from "../components/Loader"
import Link from 'next/link'
import CollectionCard from "../components/Cards/CollectionCard"

type nftType = {
        collectionId: string,
        description: string,
        name: string,
        properties: any,
        ipfsJsonUrl: string,
        ipfsImageUrl: string,
        owner: string,
        price: string,
        minting_contract_address: string,
        id: string,
        insertedDate: string,
        updatedDate: string
    }
type nftGridViewPropType = {
    data:nftType[],
    fetchNextPage:()=>void,
    hasNextPage:boolean
}
export const NftGridView = ({data, fetchNextPage, hasNextPage}:nftGridViewPropType) => {
    console.log('data', data)
    return (
        <>
            <InfiniteScroll
              dataLength={data ? data?.length : 0}
              next={() => fetchNextPage()}
              hasMore={!!hasNextPage}
              loader={<Flex width="100%" height="100%" justifyContent='center' alignItems="center"><Loader /></Flex>}
            >
                <Flex flexWrap='wrap' rowGap='16px' pt='24px'>
                
                      {data?.map((nft:nftType, index:number)=>{
                          return (
                        <Link href={`/nft/detail/${nft?.id}`}>
                            <CollectionCard type='withBody' name={nft?.name} featureImage={nft?.ipfsImageUrl} price={nft?.price} isShowFeatureImage={true} isShowLogoImage={false}/>
                        </Link>
                          )
                      })} 
                      </Flex>
                  </InfiniteScroll>
        </>
    )
}