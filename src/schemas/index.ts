import { ethers } from "ethers";
import { yupToFormErrors } from "formik";
import * as Yup from "yup";
export const collectionSchema = Yup.object().shape({
  name: Yup.string()
    .required("Collection name is required")
    .matches(/[a-zA-Z]/, "Collection name must contain at least one letter")
    .max(50, "Collection name must not exceed 50 characters"),
  description: Yup.string()
    .nullable()
    .max(1000, "Collection detail must not exceed 1000 characters"),
  category: Yup.string().required("Category is required"),
  logoImageUrl: Yup.string().required("Logo image is required"),
  creatorFee: Yup.array().of(
    Yup.object().shape({
      walletAddress: Yup.string()
        .test("checksum-validation", "Invalid wallet address", (value) => {
          try {
            const isValidChecksum = ethers.utils.isAddress(`${value}`);
            return isValidChecksum;
          } catch (error) {
            return false;
          }
        })
        .required("Wallet Address is required"),
      percentage: Yup.number().nullable(),
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
    .matches(/[a-zA-Z]/, "NFT name must contain at least one letter")
    .max(50, "NFT name must not exceed 50 characters"),
  description: Yup.string()
    .nullable()
    .max(1000, "NFT detail must not exceed 1000 characters"),
  collectionId: Yup.string().required("Collection is required"),
});

export const propertiesSchema = Yup.object().shape({
  properties: Yup.array().of(
    Yup.object().shape({
      name: Yup.string()
        .required("Name field is required")
        .matches(/[a-zA-Z]/, "Name field must not be empty"),
      value: Yup.string()
        .required("Type field is required")
        .matches(/\S+/, "Type field must not be empty"),
    })
  ),
});

export const settingSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  userName: Yup.string().required("Username is required"),
  displayName: Yup.string().required("Display Name is required"),
  websiteUrl: Yup.string().nullable().url("Website Url must be a valid URL"),
  etherScanUrl: Yup.string()
    .nullable()
    .url("EtherScan Url must be a valid URL"),
  twitter: Yup.string().nullable().url("Twitter Url must be a valid URL"),
  instagram: Yup.string().nullable().url("Instagram Url must be a valid URL"),
  telegram: Yup.string().nullable().url("Telegram Url must be a valid URL"),
  discord: Yup.string().nullable().url("Discord Url must be a valid URL"),
});
