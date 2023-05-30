import * as Yup from 'yup';
export const collectionSchema = Yup.object().shape({
  name: Yup.string()
    .required('Collection name is required')
    .nullable()
    .max(50, 'Collection name must not exceed 50 characters'),
    description: Yup.string().nullable().max(1000, 'Collection detail must not exceed 1000 characters'),
    logoImageUrl: Yup.string()
      .required('Logo image is required')
});