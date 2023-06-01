import * as Yup from 'yup';
export const collectionSchema = Yup.object().shape({
  name: Yup.string()
    .required('NFT name is required')
    .nullable()
    .max(50, 'NFT name must not exceed 50 characters'),
    description: Yup.string().nullable().max(1000, 'NFT detail must not exceed 1000 characters'),
    collectionId: Yup.string()
    .required('Collection is required'),
});


export const propertiesSchema = Yup.object().shape({
  properties: Yup.array().of(
        Yup.object().shape({
          type: Yup.string().required('Type field is required'),
          name: Yup.string().required('Name field is required')
        })
      ),
});