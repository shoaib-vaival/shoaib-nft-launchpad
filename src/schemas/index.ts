import { ethers } from "ethers";
import * as Yup from "yup";
export const collectionSchema = Yup.object().shape({
  name: Yup.string()
    .required("Collection name is required")
    .nullable()
    .max(50, "Collection name must not exceed 50 characters"),
  description: Yup.string()
    .nullable()
    .max(1000, "Collection detail must not exceed 1000 characters"),
  category: Yup.string().required("Category is required"),
  logoImageUrl: Yup.string().required("Logo image is required"),
  creatorFee: Yup.array().of(
    Yup.object().shape({
      walletAddress: Yup.string()
        .required("Wallet address is required")
        .test(
          "checksum-validation",
          "Invalid Address Checksum",
           (value) => {
            try {
              const isValidChecksum = ethers.utils.isAddress(value);
              return isValidChecksum;
            } catch (error) {
              return false;
            }
          }
        ),
      percentage: Yup.number()
        .required("Percentage is required")
        .max(10, "Total percentage should be less than 10"),
    })
  ),
});

export const nftSchema = Yup.object().shape({
  nftImgUrl: Yup.string().required("NFT image is required"),
  name: Yup.string()
    .required("NFT name is required")
    .nullable()
    .max(50, "NFT name must not exceed 50 characters"),
  description: Yup.string()
    .nullable()
    .max(1000, "NFT detail must not exceed 1000 characters"),
  collectionId: Yup.string().required("Collection is required"),
});

export const propertiesSchema = Yup.object().shape({
  properties: Yup.array().of(
    Yup.object().shape({
      type: Yup.string().required("Type field is required"),
      name: Yup.string().required("Name field is required"),
    })
  ),
});
