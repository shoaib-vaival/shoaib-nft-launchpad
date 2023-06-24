import { Flex, Box } from "@chakra-ui/layout";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "../components/Loader";
import Link from "next/link";
import CollectionCard from "../components/Cards/CollectionCard";
import { nftType } from "../types";


type nftGridViewPropType = {
    data:nftType[],
    fetchNextPage:()=>void,
    hasNextPage:boolean
}
export const NftGridView = ({data, fetchNextPage, hasNextPage}:nftGridViewPropType) => {
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
                        <Link href={`/nft/detail/${nft?.id}`} key={index}>
                            <CollectionCard type='withBody' name={nft?.name}  featureImage={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}${nft?.ipfsImageUrl}`} price={nft?.price} isShowFeatureImage={true} isShowLogoImage={false}/>
                        </Link>
                          )
                      })} 
                      </Flex>
                  </InfiniteScroll>
        </>
    )
}

