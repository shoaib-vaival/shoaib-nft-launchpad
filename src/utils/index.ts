//Upload img on pinata cloud to get img url

export const handleUpload = async (file: any) => {
  if (file) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PINATA_BASE_URL}/pinning/pinFileToIPFS`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_IPFS_JWT}`,
        },
        body: formData,
      }
    );
    
    if (response.ok) {
      const result = await response.json();
      let ImgUrl = `https://ipfs.io/ipfs/${result.IpfsHash}`;
      return ImgUrl;
    } else {
      console.error("Error uploading file to Pinata:", response.statusText);
    }
  }
};
