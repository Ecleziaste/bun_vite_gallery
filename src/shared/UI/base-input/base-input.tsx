import { Flex, InputProps, Text } from '@chakra-ui/react';
import { ControllerProps } from 'react-hook-form';

import { DefaultInput } from '../default-input/default-input.tsx';

export type BaseInputProps<T extends object> = {
  error?: string;
  label?: string;
  controllerProps?: Pick<ControllerProps<T>, 'name' | 'rules'>;
  chakraInputProps?: InputProps;
};

export const BaseInput = <T extends object>({ error, label, chakraInputProps, ...rest }: BaseInputProps<T>) => {
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
