import React, { useState } from "react";
import { validateFile } from "../../../utils";
import { FileType, UploadFileOnServer } from "./types";
import { useDropzone } from "react-dropzone";
import { useMutation } from "../../../hooks/useMutation";
import { POST } from "../../../hooks/consts";
import { ApiUrl } from "../../../apis/apiUrl";
import {
  Box,
  FormLabel,
  FormHelperText,
  Flex,
  Text,
  Image,
  IconButton,
} from "@chakra-ui/react";

const FileUpload = ({
  label,
  detail,
  imgFor,
  imgUrl,
  height,
  width,
  onlyIcon,
  editAbleUrl,
}: FileType) => {
  const [fileError, setFileError] = useState<string>("");
  const [preview, setPreview] = useState<any>(
    editAbleUrl ? [{ preview: editAbleUrl }] : []
  );
  const [showImgPreview, setShowImgPreview] = useState<boolean>(false);

  const { mutate: uploadFileOnServerFunc } = useMutation<UploadFileOnServer>({
    method: POST,
    url: ApiUrl?.UPLOAD_FILE_TO_SERVER,
    showSuccessToast: false,
    isFileData: true,
    onSuccess: (data) => {
      setShowImgPreview(true);
      imgUrl({
        imgFor,
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL_WITHOUT_PREFIX}/${data?.data?.url}`,
      });
    },
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      handleFileChange(acceptedFiles);
    },
  });

  const handleFileChange = async (acceptedFiles: any) => {
    const selectedFile = acceptedFiles?.[0];
    const isValidatedFile = await validateFile(selectedFile);
    if (isValidatedFile !== "ok") {
      setFileError(isValidatedFile);
    } else {
      setPreview(
        acceptedFiles.map((upFile: any) =>
          Object.assign(upFile, {
            preview: URL.createObjectURL(upFile),
          })
        )
      );
      if (imgFor !== "nft") {
        uploadFileOnServerFunc({ photo: selectedFile, label: imgFor });
      } else {
        imgUrl(selectedFile);
        setShowImgPreview(true);
        setPreview(
          acceptedFiles.map((upFile: any) =>
            Object.assign(upFile, {
              preview: URL.createObjectURL(upFile),
            })
          )
        );
      }
    }
  };
  
  return (
    <>
    <Box color='#756C99'>
    {label && <FormLabel marginBottom='16px'>{label}</FormLabel>}
    {detail && <FormHelperText marginBottom='16px'>{detail}</FormHelperText>}
      {preview && (showImgPreview || !!editAbleUrl) ? (
        <>

        <Box position='relative'>
          <Image
            src={preview[0]?.preview || editAbleUrl}
            w="100%"
            h="300px"
            objectFit="cover"
            borderRadius="16px"
          ></Image>
          <IconButton aria-label='close' position='absolute' top='10px' right='10px' bg='#8a8e8e5c' _hover={{bg:'#798c8c5c'}} icon={<i className='icon-close'></i>} />
          </Box>

          {preview.map((upFile: any, index: number) => {
            return (
              <Box position='relative'>
                <Image src={upFile.preview} key={index} w='100%' h='300px' objectFit='cover' borderRadius='16px'></Image>
                <IconButton aria-label='close' position='absolute' top='10px' right='10px' color='red' borderRadius='50px' bg='#fbffff69' _hover={{bg:'#798c8c5c'}} icon={<i className='icon-close'></i>} />
              </Box>
            );
          })}

        </>
      ) : (
        <Box color="#756C99">
          {label && <FormLabel marginBottom="16px">{label}</FormLabel>}
          {detail && (
            <FormHelperText marginBottom="16px">{detail}</FormHelperText>
          )}
          {
            <Flex
              {...getRootProps()}
              bg="red"
              maxH="300px"
              justifyContent="center"
              alignItems="center"
              h={height ? height : "300px"}
              maxW={width ? width : "952px"}
              border="1px solid rgba(111, 107, 243, 0.4)"
              background="rgba(255, 255, 255, 0.4)"
              boxShadow="2px 2px 8px rgba(13, 13, 13, 0.1)"
              backdrop-filter="blur(30px)"
              borderRadius="16px"
            >
              <input {...getInputProps()} />

              {preview && (showImgPreview || !!editAbleUrl) && (
                <Image
                  src={preview[0]?.preview || editAbleUrl}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  borderRadius="16px"
                ></Image>
              )}

              {isDragActive ? (
                <p>Drop Image Here</p>
              ) : (
                preview?.length === 0 && (
                  <>
                    <Flex
                      direction="column"
                      alignItems="center"
                      fontSize="48px"
                      width="200px"
                      textAlign="center"
                    >
                      <i className="icon-image"></i>
                      {!onlyIcon ? (
                        <Text fontSize="16px">
                          Drag and drop image or upload from device
                        </Text>
                      ) : (
                        ""
                      )}
                    </Flex>
                  </>
                )
              )}
            </Flex>
          }
          {fileError && <p>{fileError}</p>}
        </Box>
      )}
      </Box>
    </>
  );
};
export default FileUpload;
