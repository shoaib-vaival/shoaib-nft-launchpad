import React, { ChangeEvent, useState } from "react";
import { handleUpload } from "../../../utils";

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const getImgUrl = async () => {
    const res = await handleUpload(file);
    console.log("resresres", res);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={getImgUrl} disabled={!file}>
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
