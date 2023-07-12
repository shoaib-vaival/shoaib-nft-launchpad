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

const ProfileHeader = ({
  socialIcons,
  showSocialIcons,
  coverPhoto,
  profilePhoto,
  showAddToWatchList,
  showReport,
  id,
}: {
  socialIcons?: { icon?: string; url?: string }[];
  showSocialIcons?: boolean;
  coverPhoto?: string;
  profilePhoto?: string;
  showAddToWatchList?: boolean;
  showReport?: boolean;
  id?: string;
}) => {
  const { mutate } = useMutation<any>({
    method: POST,
    url: ApiUrl.ADD_TO_WATCHLIST,
    showSuccessToast: true,
    token: true,
  });
  return (
    <>
      <Container
        pl={{ base: "24px", md: "54px" }}
        zIndex="-1"
        variant="colorful"
        position="relative"
        bgSize="cover"
        bgImage={coverPhoto}
        h={{ base: "220px", md: "400px" }}
      >
        <Image
          src={profilePhoto}
          w={{ base: "100px", md: "200px" }}
          h={{ base: "100px", md: "200px" }}
          borderRadius="16px"
          border="2px solid white"
          position="absolute"
          bottom="-35%"
          transform="translateY(-50%)"
          objectFit="cover"
        />
      </Container>
      <Container maxW="8xl" mt={{ base: "50px", md: "8px" }} px="0">
        {showSocialIcons && (
          <Flex
            justifyContent={{ base: "flex-start", sm: "end" }}
            w="full"
            wrap="wrap"
          >
            {socialIcons?.map((icon, index) => {
              return (
                <IconButton
                  color=" #756C99"
                  ml={{ base: "5px", sm: "8px" }}
                  mb={{ base: "8px", sm: "0" }}
                  key={index}
                  as="a"
                  target="_blank"
                  href={icon.url}
                  variant="outline"
                  colorScheme="#6863F3"
                  aria-label="Send"
                  fontSize="20px"
                  icon={<i className={icon.icon}></i>}
                />
              );
            })}

            <Box
              borderLeft={{ base: "none", sm: "1px solid #A6A6A6" }}
              paddingLeft={{ base: "0", sm: "2" }}
              ml={{ base: "0", sm: "2" }}
            >
              {showAddToWatchList && showAddToWatchList ? (
                <IconButton
                  as={Button}
                  color=" #756C99"
                  mb={{ base: "8px", sm: "0" }}
                  variant="outline"
                  colorScheme="#6863F3"
                  aria-label="Send"
                  fontSize="20px"
                  icon={<i className="icon-watch"></i>}
                  onClick={() => mutate({ collectionId: id })}
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
                  icon={<i className="icon-menu"></i>}
                ></MenuButton>
                <MenuList w="191px" minW="191px" p="16px 8px">
                  <MenuItem>
                    {" "}
                    <Box color="#0D0D0D">Report</Box>
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
