import { Button, Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Link from "next/link";
import { SlickSlider } from '../ReactSlick'
import { collectionType } from '../../types'
import CollectionCard from '../Cards/CollectionCard'
import CardCollectionSkeleton from "../Seketons/Collection";

const DashboardCollections = ({isLoading, data, headingTxt}: any) => {
    return(<><Container
        maxW={{ sm: "xl", md: "3xl", lg: "5xl", xl: "8xl" }}
        mt={{ base: "40px", lg: "80px" }}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          mb={{ base: "20px", lg: "40px" }}
          px={{ base: "0", md: "12px" }}
        >
          <Heading fontSize={{ base: "24px", md: "36px", xl: "48px" }}>
            {headingTxt}
          </Heading>
          <Button
            p={{ base: "15px", md: "20px 32px" }}
            as={Link}
            href="/categories"
            variant="primary"
            textTransform="uppercase"
          >
            View All
          </Button>
        </Flex>
        
        {isLoading && data === undefined ? (
          <CardCollectionSkeleton />
        ) : (
          <SlickSlider>
            {data?.map((item: collectionType, index: number) => {
              return (
                <Link href={`collection/${item?.id}`} key={index}>
                  <CollectionCard
                    type="withBody"
                    featureImage={item?.logoImageUrl}
                    isShowFeatureImage={true}
                    isShowLogoImage={false}
                    name={item.name}
                  />
                </Link>
              );
            })}
          </SlickSlider>
        )}
      </Container></>)
}

export default DashboardCollections