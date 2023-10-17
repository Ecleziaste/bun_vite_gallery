import { useToast } from '@chakra-ui/react';

export const useToasts = () => {
  const toast = useToast();

  const showSuccessToast = (title?: string, description?: string) =>
    toast({
      title: title || 'Success!',
      description: description || 'You are doing well!',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

  const showFailToast = (title?: string, description?: string) =>
    toast({
      title: title || 'Something went wrong.',
      description: description || 'Unknown error.',
      status: 'error',
      duration: 4000,
      isClosable: true,
    });

  return { showSuccessToast, showFailToast };
};
