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
  return (
    <>
      <Container pl={{ base: "0", md: "54px" }} mt="24px" pr="0" pt="0">
        <Flex
          alignItems={{ base: "baseline", md: "center" }}
          flexDirection={{ base: "column", sm: "row" }}
        >
          <Flex alignItems="center">
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
              <InputField
                size="md"
                type="copy"
                placeholder="0X000000"
                formControlProps={{
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
                name="walletAddress"
                formLabelProps={{
                  fontWeight: "500!important",
                }}
                borderRadius="xl"
                p="7px 8px"
                _hover={{ bg: "transparent" }}
                m={{ base: "10px 0", md: "initial" }}
                fontSize="12px"
                height="initial"
                border="1px solid #6863F3"
                color="#393F59"
                maxLength={50}
                h="100%"
              />
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
                  <StatNumber>225,278 MATIC</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Floor Price</StatLabel>
                  <StatNumber>5.344 MATIC</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Items Listed</StatLabel>
                  <StatNumber>20%</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Owners</StatLabel>
                  <StatNumber>3,082</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Unique Owners</StatLabel>
                  <StatNumber>31%</StatNumber>
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
