import React, { useState } from "react";
import { validateFile } from "../../../utils";
import { FileType, UploadFileOnServer } from "./types";
import { useDropzone } from "react-dropzone";
import { useMutation } from "../../../hooks/useMutation";
import { POST } from "../../../hooks/consts";
import { ApiUrl } from "../../../apis/apiUrl";

const FileUpload = ({ label, detail, imgFor, imgUrl }: FileType) => {
  const [fileError, setFileError] = useState<string>("");
  const [preview, setPreview] = useState<any>([]);
  const [showImgPreview, setShowImgPreview] = useState<boolean>(false);

  const { mutate } = useMutation<UploadFileOnServer>({
    method: POST,
    url: ApiUrl?.UPLOAD_FILE_TO_SERVER,
    showSuccessToast: false,
    onSuccess: (data) => {
      setShowImgPreview(true)
      imgUrl({imgFor, url: `${process.env.NEXT_PUBLIC_API_BASE_URL_WITHOUT_PREFIX}/${data?.data?.url}`})
    }
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
      mutate({ photo: selectedFile, label: imgFor });
    }
  };

  return (
    <div className="App">
      <div className="mx-auto">
        {label && <label>{label}</label>}
        {detail && <h6>{detail}</h6>}
        {
          <div {...getRootProps()} className="inputDrop">
            <input {...getInputProps()} />

            {(preview && showImgPreview) &&
              preview.map((upFile: any, index: any) => {
                return (
                  <div className="previewImage" key={index}>
                    <img src={upFile.preview} alt="preview" />
                    <span className="removeImg" onClick={() => setPreview([])}>
                      X
                    </span>
                  </div>
                );
              })}

            {isDragActive ? (
              <p>Drop Image Here</p>
            ) : (
              preview?.length === 0 &&
              "Drag and drop image or upload from device"
            )}
          </div>
        }
        {fileError && <p>{fileError}</p>}
      </div>
    </div>
  );
};
export default FileUpload;
