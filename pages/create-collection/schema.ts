import * as Yup from 'yup';
export const collectionSchema = Yup.object().shape({
  name: Yup.string()
    .required('Collection name is required')
    .nullable()
    .max(50, 'Collection name must not exceed 50 characters'),
    description: Yup.string().nullable().max(1000, 'Collection detail must not exceed 1000 characters'),
    category: Yup.string()
    .required('Categorye is required'),
    logoImageUrl: Yup.string()
      .required('Logo image is required'),
      creatorFee: Yup.array().of(
        Yup.object().shape({
          walletAddress: Yup.string().required('Wallet address is required'),
          percentage: Yup
          .number()
          .max(10, 'Percentage should be less than 10')
          .required('Value is required'),
        })
      ),
});