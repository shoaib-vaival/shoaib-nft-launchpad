import { Image } from "@chakra-ui/image"
import { Flex, Heading, Text, VStack } from "@chakra-ui/layout"
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table"
import { nftType } from "./NftGridView"

type nftListProp = {
  data: nftType[],
  fetchNextPage: () => void,
  hasNextPage: boolean
}
export const NftListView = ({ data, fetchNextPage, hasNextPage }: nftListProp) => {
  return (
    <>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th textAlign="center">ITEM</Th>
              <Th>RARITY</Th>
              <Th >LAST Transfer</Th>
              <Th >OWNER</Th>
              <Th >TIME</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((nft: any, index: number) => {
              return (
                <Tr key={index}>
                  <Td p={{ base: '12px', md: '17px 25px' }}>
                    <Flex gap="2" alignItems="center" mr='48px'>
                    <Box color='#6863F3'>
                        <i className='icon-transfer'></i>
                      </Box>
                      <Text fontWeight='700'>Transfer</Text>
                      <Image src={nft?.ipfsImageUrl} boxSize='100px' objectFit='cover' border="1px solid white" borderRadius="16px" w={{ base: '50px', md: '96px' }} h={{ base: '50px', md: '96px' }} />
                      <VStack spacing="0.5">
                        <Heading fontSize="18px">{nft?.name}</Heading>
                        <Text color="rgba(57, 63, 89, 1)" fontSize="14px">{nft?.collection?.name}</Text>
                      </VStack>
                    </Flex>
                  </Td>
                  <Td p={{ base: '12px', md: '17px 25px' }} >{nft?.rarity}</Td>
                  <Td p={{ base: '12px', md: '17px 25px' }} >{nft?.lastTransfer}</Td>
                  <Td p={{ base: '12px', md: '17px 25px' }} >{nft?.owner}</Td>
                  <Td p={{ base: '12px', md: '17px 25px' }} >3m ago</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}