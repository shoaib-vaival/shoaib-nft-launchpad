import { Container } from "@chakra-ui/layout";
import {
  Button,
  Image,
  Flex,
  IconButton,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import { ApiUrl } from "../../apis/apiUrl";
import { POST } from "../../hooks/consts";
import { useMutation } from "../../hooks/useMutation";
import SocialShare from "../SocialShare";
import CollectionInfoHeaderSkeleton from "../Seketons/infoHeader/Collection";
import NextImage from "next/image";
import { useState } from "react";
import { after } from "node:test";
import { bg } from "date-fns/locale";

const ProfileHeader = ({
  socialIcons,
  showSocialIcons,
  coverPhoto,
  profilePhoto,
  showAddToWatchList,
  showReport,
  isLoading,
  id,
}: {
  socialIcons?: { icon?: string; url?: string }[];
  showSocialIcons?: boolean;
  coverPhoto?: string;
  profilePhoto?: string;
  showAddToWatchList?: boolean;
  showReport?: boolean;
  isLoading?: boolean;
  id?: string;
}) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
    // alert("test")
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const { mutate } = useMutation<any>({
    method: POST,
    url: ApiUrl.ADD_TO_WATCHLIST,
    showSuccessToast: true,
    successMessage: "Added to watchlist",
    token: true,
  });

  const hoverStyle = {
    borderRadius: '16px',
    transform: isHover ? 'scale(1.02)' : 'scale(1)',
    transition: 'all .1s ease ',
  };
  return (
    <>
      {isLoading ? (
        <CollectionInfoHeaderSkeleton />
      ) : (
        <Container
          p="0px"
          zIndex="-1"
          variant="colorful"
          bgSize="cover"
          h={{ base: "220px", md: "400px" }}
        >
          <Box w={{ base: "100%", md: "100%" }}
            h={{ base: "100%", md: "100%" }}
            position="relative"

          >
            <Box w={{ base: "100%", md: "100%" }}
              h={{ base: "100%", md: "100%" }}
              position="relative"
              overflow='hidden'
              borderRadius='16px'
            >
              <NextImage
                src={coverPhoto ? coverPhoto : ""}
                alt="Profile Photo"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"

                style={hoverStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </Box>
            <Box
              w={{ base: "100px", md: "200px" }}
              h={{ base: "100px", md: "200px" }}
              position="absolute"
              bottom="-13%"
              left='5%'>
              <NextImage
                src={profilePhoto ? profilePhoto : ""}
                alt="Profile Photo"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                style={{
                  borderRadius: "16px",
                  border: "2px solid white",

                }}

              />
            </Box>
          </Box>
          {/* <Image
            src={profilePhoto}
            w={{ base: "100px", md: "200px" }}
            h={{ base: "100px", md: "200px" }}
            borderRadius="16px"
            border="2px solid white"
            position="absolute"
            bottom="-35%"
            loading="lazy"
            transform="translateY(-50%)"
            objectFit="cover"
          /> */}
        </Container>
      )}
      <Container maxW="8xl" mt={{ base: "50px", md: "8px" }} px="0">
        {showSocialIcons && (
          <Flex
            justifyContent={{ base: "flex-start", sm: "end" }}
            w="full"
            wrap="wrap"
          >
            {socialIcons?.map((icon, index) => {
              if (icon?.url !== "") {
                return (
                  <IconButton
                    color=" #756C99"
                    borderColor=" #c4c3f9"
                    marginRight={"5px"}
                    mb={{ base: "8px", sm: "0" }}
                    as="a"
                    target="_blank"
                    key={index}
                    href={icon.url}
                    variant="outline"
                    colorScheme="#6863F3"
                    aria-label="Send"
                    fontSize="20px"
                    transform= 'rotateY(0deg)'
                    _hover={{
                      transition: '0.5s',transform: 'rotateY(180deg)',bg:'transparent'
                    }}
                    icon={<i className={icon.icon}></i>}
                  />
                );
              } else {
                return <></>;
              }
            })}

            <Box
              ml={{ base: "0", sm: "2" }}
              paddingLeft={{ base: "0", sm: "2" }}
              borderLeft={{ base: "none", sm: "1px solid #a6a6a691" }}
            >
              {showAddToWatchList && showAddToWatchList ? (
                <IconButton
                  as={Button}
                  color=" #756C99"
                  mb={{ base: "8px", sm: "0" }}
                  ml={{ base: "5px", sm: "4px" }}
                  mr={{ base: "5px", sm: "0px" }}
                  variant="outline"
                  colorScheme="#6863F3"
                  borderColor=" #c4c3f9"
                  aria-label="Send"
                  fontSize="20px"
                  icon={<i className="icon-watch"></i>}
                  onClick={() => mutate({ collectionId: id })}
                  transform= 'rotateY(0deg)'
                  _hover={{
                    transition: '0.5s',transform: 'rotateY(180deg)',bg:'transparent'
                  }}
                />
              ) : (
                ""
              )}

              <SocialShare
                title="Check this link"
                url={`https://ibanera-launchpad.bloxbytes.com/collection/${id}`}
              />
            </Box>
            {showReport && showReport ? (
              <Menu>
                <MenuButton
                  as={IconButton}
                  color="#756C99"
                  ml={{ base: "5px", sm: "8px" }}
                  mb={{ base: "8px", sm: "0" }}
                  variant="outline"
                  colorScheme="#6863F3"
                  aria-label="Send"
                  fontSize="20px"
                  transform= 'rotateY(0deg)'
                  _hover={{
                    transition: '0.5s',transform: 'translateY(-3px) scale(1.01) translateZ(0px)',bg:'transparent'
                  }}
                 className="share_menu"
                  icon={<i className="icon-menu"></i>}
                ></MenuButton>
                <MenuList w="191px" minW="191px" p="16px 8px">
                  <MenuItem>
                    {" "}
                    <Box w="100%" color="#0D0D0D">
                      Report
                    </Box>
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              ""
            )}
          </Flex>
        )}
      </Container>
    </>
  );
};

export default ProfileHeader;
