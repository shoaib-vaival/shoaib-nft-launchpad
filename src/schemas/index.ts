import { ethers } from "ethers";
import { yupToFormErrors } from "formik";
import * as Yup from "yup";
export const collectionSchema = Yup.object().shape({
  name: Yup.string()
    .required("Collection name is required")
    .max(50, "Collection name must not exceed 50 characters"),
  description: Yup.string()
    .nullable()
    .max(1000, "Collection detail must not exceed 1000 characters"),
  category: Yup.string().required("Category is required"),
  logoImageUrl: Yup.string().required("Logo image is required"),
  creatorFee: Yup.array().of(
    Yup.object().shape({
      walletAddress: Yup.string().trim()
        .nullable()
        .test(
          "checksum-validation",
          "Invalid wallet address",
           (value) => {
            if (value === null || value === "") {
              return true; // Allow null or empty string
            }
            try {
              const isValidChecksum = ethers.utils.isAddress(`${value}`);
              return isValidChecksum;
            } catch (error) {
              return false;
            }
          }
        ),
      percentage: Yup.number().max(
        10,
        "Total Percentage should be less than 10"
      ),
    })
  ),

  website_url: Yup.string().url("Website URL must be a valid URL"),
  etherscan: Yup.string().url("EtherScan URL must be a valid URL"),
  twitter: Yup.string().url("Twitter URL must be a valid URL"),
  instagram: Yup.string().url("Instagram URL must be a valid URL"),
  telegram: Yup.string().url("Telegram URL must be a valid URL"),
  Discord_id: Yup.string().url("Discord URL must be a valid URL"),
});

export const nftSchema = Yup.object().shape({
  photo: Yup.string().required("NFT image is required"),
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

export const settingSchema = Yup.object().shape({
  email: Yup.string().email(),
  websiteUrl: Yup.string().url("Website Url must be a valid URL"),
  etherScanUrl: Yup.string().url("EtherScan Url must be a valid URL"),
  twitter: Yup.string().url("Twitter Url must be a valid URL"),
  instagram: Yup.string().url("Instagram Url must be a valid URL"),
  telegram: Yup.string().url("Telegram Url must be a valid URL"),
  discord: Yup.string().url("Discord Url must be a valid URL"),
});
