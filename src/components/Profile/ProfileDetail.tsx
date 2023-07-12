import {
  Container,
  Heading,
  Flex,
  Box,
  Button,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  Grid,
} from "@chakra-ui/react";
import InputField from "../InputField";
import CopyWalletAddress from "../CopyWalletAddress";

type profileDetailProps = {
  showStats: boolean;
  data: any;
  isCollection: boolean;
  isVerified?: boolean;
  description?: string;
};
const ProfileDetail = ({
  showStats,
  data,
  isVerified,
  isCollection,
  description,
}: profileDetailProps) => {
  console.log("dataaaaaaaaaaaaaa", data?.walletAddress)
  return (
    <>
      <Container pl={{ base: "0", md: "54px" }} mt="24px" pr="0" pt="0">
        <Flex
          alignItems={{ base: "baseline", md: "center" }}
          flexDirection={{ base: "column", sm: "row" }}
        >
          <Flex alignItems="center"  mr='50px'>
            <Heading as="h4" fontSize={{ base: "26px", md: "32px" }}>
              {data?.displayName || data?.name}
            </Heading>
            {isVerified ? (
              <Box mx="12px" color="#6863F3">
                <i className="icon-tick"></i>
              </Box>
            ) : (
              ""
            )}
          </Flex>
          <Box>
            {!isCollection ? (
              
            <CopyWalletAddress value={data?.walletAddress}/>
            ) : (
              ""
            )}
          </Box>
        </Flex>
        <Flex
          flexDirection={{ base: "column", md: "column", lg: "row", xl: "row" }}
        >
          <Box
            w={{ base: "100%", lg: "50%" }}
            mb={{ base: "20px", lg: "initial" }}
          >
            <Box>
              <Flex flexWrap="wrap" mb={{ base: "4px", md: "initial" }}>
                {isCollection ? (
                  <>
                    <Box
                      display="flex"
                      alignItems="center"
                      fontSize="14px"
                      mr={{ base: "10px", md: "24px" }}
                      pt={{ base: "10px", md: "20px" }}
                      pb={{ base: "5px", md: "24px" }}
                    >
                      <Text>By:</Text>
                      <Text fontWeight="bold" color="#6F6BF3" ml="5px">
                        {" "}
                        {data?.name}
                      </Text>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      fontSize="14px"
                      mr={{ base: "10px", md: "24px" }}
                      pt={{ base: "10px", md: "20px" }}
                      pb={{ base: "5px", md: "24px" }}
                    >
                      <Text>Creator Fee:</Text>
                      <Text fontWeight="bold" color="#090C3D" ml="5px">
                        {" "}
                        {data?.creatorFee[0].percentage}
                      </Text>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      fontSize="14px"
                      mr={{ base: "10px", md: "24px" }}
                      pt={{ base: "10px", md: "20px" }}
                      pb={{ base: "5px", md: "24px" }}
                    >
                      <Text>Chain:</Text>
                      <Text fontWeight="bold" color="#090C3D" ml="5px">
                        {data?.chain}{" "}
                      </Text>
                    </Box>
                  </>
                ) : (
                  <>
                    <Box
                      display="flex"
                      alignItems="center"
                      fontSize="14px"
                      mr={{ base: "10px", md: "24px" }}
                      pt={{ base: "10px", md: "20px" }}
                      pb={{ base: "5px", md: "24px" }}
                    >
                      <Text>Joined:</Text>
                      <Text fontWeight="bold" color="#090C3D" ml="5px">
                        {" "}
                        Dec 2021
                      </Text>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      fontSize="14px"
                      mr={{ base: "10px", md: "24px" }}
                      pt={{ base: "10px", md: "20px" }}
                      pb={{ base: "5px", md: "24px" }}
                    >
                      <Text>Creator Fee:</Text>
                      <Text fontWeight="bold" color="#090C3D" ml="5px">
                        {" "}
                        Dec 2021
                      </Text>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      fontSize="14px"
                      mr={{ base: "10px", md: "24px" }}
                      pt={{ base: "10px", md: "20px" }}
                      pb={{ base: "5px", md: "24px" }}
                    >
                      <Text>Chain:</Text>
                      <Text fontWeight="bold" color="#090C3D" ml="5px">
                        {" "}
                        Dec 2021
                      </Text>
                    </Box>
                  </>
                )}
              </Flex>
            </Box>
            <Box>
              <Text maxW={{ sm: "100%", xl: "90%" }}>
                {data?.description || data?.bio}
              </Text>
            </Box>
          </Box>
          {showStats && (
            <Box
              w={{ base: "100%", lg: "50%" }}
              mb={{ base: "20px", lg: "initial" }}
            >
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                }}
                gap="3"
              >
                <Stat>
                  <StatLabel>Total Volume</StatLabel>
                  <StatNumber fontSize="18px">{data?.volume} MATIC</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Floor Price</StatLabel>
                  <StatNumber fontSize="18px">
                    {data?.floor_price} MATIC
                  </StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Items Listed</StatLabel>
                  <StatNumber fontSize="18px">
                    {data?.itemListedCount}%
                  </StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Owners</StatLabel>
                  <StatNumber fontSize="18px">{data?.owner}0</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Unique Owners</StatLabel>
                  <StatNumber fontSize="18px">{data?.uniqueOwner}%</StatNumber>
                </Stat>
              </Grid>
            </Box>
          )}
        </Flex>
      </Container>
    </>
  );
};

export default ProfileDetail;
