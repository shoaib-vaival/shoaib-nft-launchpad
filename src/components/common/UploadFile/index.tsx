import React, { ChangeEvent, useState } from 'react';

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`${process.env.NEXT_PUBLIC_PINATA_BASE_URL}/pinning/pinFileToIPFS`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_IPFS_JWT}`,
        },
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        let ImgUrl = `https://ipfs.io/${result.IpfsHash}`
        console.log('File uploaded to Pinata with IPFS hash:', ImgUrl);
      } else {
        console.error('Error uploading file to Pinata:', response.statusText);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file}>
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
