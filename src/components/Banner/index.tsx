import { useState } from "react";
import {
  Container,
  Flex,
  Image,
  VStack,
  Heading,
  Text,
  Button,
  Box,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { getFromLocalStorage } from "../../utils";
import { useRouter } from "next/router";
import ConnectionModal from "../../Modals/nftProperties/connectionModal";
import Link from "next/link";

export const Banner = () => {
  const [isVisible, setIsVisible] = useState<boolean>();
  const {
    isOpen: isConnectionModalOpen,
    onOpen: onConnectionModalOpen,
    onClose: onConnectionModalClose,
  } = useDisclosure();
  const router = useRouter();

  const over = () => {
    setIsVisible(true);
  };
  const out = () => {
    setIsVisible(false);
  };
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const hoverStyle = {
    borderRadius: "16px",
    transform: isHover ? "scale(1.03)" : "scale(1)",
    transition: "all .4s ease ",
  };

  return (
    <Container variant="colorful" overflow="hidden" p="0">
      <Box
        padding={{ base: "25px", md: "25px 54px" }}
        style={{
          borderRadius: "16px",
          ...(isHover ? hoverStyle : {}),
        }}
      >
        <Box
          position="relative"
          padding={{ base: "25px", md: "25px 54px" }}
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
          as={Link}
          href={`/collection/create`}
        >
          <Box position="absolute" bottom="0px" left="0px" opacity="0.4">
            {/* <Image src="https://nft-launchpad.b-cdn.net/banner-lines.png" /> */}
          </Box>
          <Flex justifyContent="space-between" flexWrap="wrap">
            <VStack
              alignItems="start"
              width={{ base: "100%", xl: "60%" }}
              spacing={{ base: "4", lg: "6" }}
            >
              <Heading
                mt={{ md: "15px", xl: "28px" }}
                color="white"
                fontSize={{ base: "32px", md: "48px", xl: "64px" }}
                textShadow="10px 10px 20px rgba(13, 13, 13, 0.3)"
              >
                <span style={{ fontWeight: "500" }}>Mint</span> NFTs,
                Collections
              </Heading>
              <Text color="white" fontSize={{ md: "20px", xl: "24px" }}>
                We are an all-in-one innovative minting platform that provides
                you seamless and user-friendly blockchain experience.
              </Text>
              <Flex alignItems="center">
                <Button
                  mt={{ md: "0px", xl: "50px" }}
                  color="#6863F3"
                  fontWeight="600"
                  p={{ base: "18px 26px", md: "26px", lg: "32px" }}
                  textTransform="uppercase"
                  fontSize="16px"
                  transition=" all .2s ease-in-out "
                  onMouseOver={over}
                  onMouseOut={out}
                  onClick={() => {
                    if (getFromLocalStorage("accessToken")) {
                      router.push("/nft/create");
                    } else {
                      onConnectionModalOpen();
                    }
                  }}
                >
                  Start Minting{" "}
                  <Box
                    ml="8px"
                    color="#6863F3"
                    transition={isVisible ? " .1s ease-in" : "0s ease-out "}
                    position={isVisible ? "relative" : "absolute"}
                    right={isVisible ? "0px" : "2px"}
                    transform={
                      isVisible ? "translateX(0px)" : "translateX(-15px)"
                    }
                    visibility={isVisible ? "visible" : "hidden"}
                  >
                    <i className="icon-right"></i>
                  </Box>
                </Button>
                <ConnectionModal
                  isOpen={isConnectionModalOpen}
                  onOpen={onConnectionModalOpen}
                  onClose={onConnectionModalClose}
                />
              </Flex>
            </VStack>
            <Box w="40%">
              <Box
                maxW="373px"
                maxH="350px"
                display={{ base: "none", xl: "block" }}
                ml="auto"
                mr="20px"
              >
                {/* <Image
                  display={{ base: "none", xl: "block" }}
                  src="https://nft-launchpad.b-cdn.net/banner-block.png"
                  objectFit="cover"
                  w="100%"
                  h="100%"
                /> */}
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};
