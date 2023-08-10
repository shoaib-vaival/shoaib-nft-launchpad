import { Container, Heading } from '@chakra-ui/react'
import React from 'react'
import Link from "next/link";
import { SlickSlider } from '../ReactSlick'
import { collectionType } from '../../types'
import CollectionCard from '../Cards/CollectionCard'
import CardWOBodyCollectionSkeleton from "../Seketons/Collection/WithOutBody";

const FeaturedCollections  = ({isLoading, data}: any) => {
    return(<><Container
        maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "8xl" }}
        mt={{ base: "40px", lg: "80px" }}
      >
        <Heading
          px={{ base: "0", md: "12px" }}
          fontSize={{ base: "24px", md: "36px", xl: "48px" }}
        >
          Featured Collections
        </Heading>
        {isLoading && data === undefined ? (
          <CardWOBodyCollectionSkeleton />
        ) : (
          <SlickSlider>
            {data &&
              data?.map((item: collectionType, index: number) => (
                <Link href={`collection/${item?.id}`} key={index}>
                  <CollectionCard
                    type="withoutBody"
                    featureImage={item?.logoImageUrl}
                    isShowFeatureImage={true}
                    isShowLogoImage={false}
                    name={item?.name}
                  />
                </Link>
              ))}
          </SlickSlider>
        )}
      </Container></>)
}

export default FeaturedCollections