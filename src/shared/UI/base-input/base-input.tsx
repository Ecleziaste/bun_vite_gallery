import { Flex, InputProps, Text } from '@chakra-ui/react';

import { DefaultInput } from '../default-input/default-input.tsx';

export type BaseInputProps = {
  error?: string;
  label?: string;
  chakraInputProps?: InputProps;
};

export const BaseInput = ({ error, label, chakraInputProps, ...rest }: BaseInputProps) => {
  return (
    <Flex direction="column" w="100%" position="relative" pb="20px">
      {label && (
        <Text mb="2px" fontSize="16px">
          {label}
        </Text>
      )}

      <DefaultInput
        chakraInputProps={{
          variant: 'filled',
          size: 'md',
          borderColor: 'darkgrey',
          borderRadius: '10px',
          borderWidth: '1px',
          focusBorderColor: 'saddlebrown',
          isInvalid: Boolean(error),
          ...chakraInputProps,
        }}
        {...rest}
      />

      {error && (
        <Text position="absolute" bottom="-2px" color="crimson" fontSize="14px">
          {error}
        </Text>
      )}
    </Flex>
  );
};
