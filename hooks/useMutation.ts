import axios from 'axios';
import { DELETE, POST, PUT } from './consts'
import { UseMutateFunction, useMutation as useRMutation } from '@tanstack/react-query';
import { useToast } from '@chakra-ui/react';

type UseMutationReturn<T, K> = {
  data?: K;
  isLoading: boolean;
  mutate: UseMutateFunction<ApiResult<K>, unknown, T, unknown>;
};

export type ApiResult<K> = {
  _metadata: {
    message: string;
    numOfRecords: number;
    outcome: string;
    outcomeCode: number;
  };
  records: K;
  errors: Array<string>;
};

type UseMutationProps<T, K> = {
  url: string;
  data?: T;
  method?: typeof POST | typeof DELETE | typeof PUT;
  token?: boolean;
  showToast?: boolean;
  successMessage?: string;
  onSuccess?: (data: ApiResult<K>) => void;
  onError?: (data: ApiResult<K>) => void;
  errorMessage?: string;
  isFormData?: boolean;
};

export const useMutation = <T, K = T>({
  url,
  data,
  method = POST,
  token = true,
  showToast = true,
  successMessage,
  onSuccess,
  onError,
  errorMessage,
  isFormData = false,
}: UseMutationProps<T, K>): UseMutationReturn<T, K> => {
  const toast = useToast();

  const headers = {
    Accept: 'multipart/form-data',
    'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
    Authorization: `Bearer tokenId`,
  };

  const config = {
    method,
    url: `https:abc/${url}`,
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
        if (newData?.errors.length === 0 && newData?._metadata.outcomeCode !== 2) {
          showToast &&
            toast({
              title: successMessage ?? newData._metadata.message,
              status: 'success',
              isClosable: true,
              position: 'top-right',
            });

          onSuccess && onSuccess(newData);
        } else {
          if (newData?.errors.length > 0) {
            newData?.errors.map((error) => {
              showToast &&
                toast({
                  title: errorMessage ?? error,
                  status: 'error',
                  isClosable: true,
                  position: 'top-right',
                });
            });
          } else {
            showToast &&
              toast({
                title: newData._metadata.message ?? 'Something went wrong',
                status: 'error',
                isClosable: true,
                position: 'top-right',
              });
          }
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
    },
  );

  return { ...fetchedData, isLoading, mutate };
};
