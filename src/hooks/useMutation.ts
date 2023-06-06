import axios from 'axios';
import { DELETE, POST, PUT } from './consts';
import {
  UseMutateFunction,
  useMutation as useRMutation,
} from '@tanstack/react-query';
import { useToast } from '@chakra-ui/react';

type UseMutationReturn<T, K> = {
  data?: K;
  isLoading: boolean;
  mutate: UseMutateFunction<ApiResult<K>, unknown, T, unknown>;
};

export type ApiResult<K> = {
  data?: any;
  _metadata: {
    message: string;
    numOfRecords: number;
    outcome: string;
    outcomeCode: number;
    Message?: string;
  };
  records: K;
  errors?: Array<string>;
  status?: number;
  Message?: string;
};

type UseMutationProps<T, K> = {
  url: string;
  data?: T;
  method?: typeof POST | typeof DELETE | typeof PUT;
  token?: boolean;
  showToast?: boolean;
  showSuccessToast?: boolean;
  successMessage?: string;
  onSuccess?: (data: ApiResult<K>) => void;
  onError?: (data: ApiResult<K>) => void;
  errorMessage?: string;
  isFileData?: boolean;
};

export const useMutation = <T, K = T>({
  url,
  data,
  method = POST,
  token = true,
  showToast,
  successMessage,
  onSuccess,
  onError,
  errorMessage,
  isFileData,
  showSuccessToast,
}: UseMutationProps<T, K>): UseMutationReturn<T, K> => {
  const toast = useToast();

  const headers = {
    Accept: isFileData && 'multipart/form-data',
    'Content-Type': isFileData && 'multipart/form-data',
    // Authorization: `Bearer tokenId`,
  };

  const config = {
    method,
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/${url}`,
    data,
    headers,
  };

  const {
    data: fetchedData,
    isLoading,
    mutate,
  } = useRMutation<ApiResult<K>, unknown, T>(
    async (data: T) => {
      if (method === DELETE) {
        config.url = `${config.url}/${data}`;
      }

      const res = await axios({ ...config, data });
      return res.data;
    },
    {
      onSuccess: (newData) => {
        if (newData?.status == 200) {
          showSuccessToast &&
            toast({
              title: successMessage ?? newData?.Message,
              status: 'success',
              position: 'top-right',
              duration: 3000,
              isClosable: true,
            });

          onSuccess && onSuccess(newData);
        }
        onError && onError(newData);
      },
      onError: () => {
        showToast &&
          toast({
            title: 'Something went wrong',
            status: 'error',
            isClosable: true,
            position: 'top-right',
          });
      },
    }
  );

  return { ...fetchedData, isLoading, mutate };
};
