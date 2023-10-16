import { Input, InputProps } from '@chakra-ui/react';
import { ControllerProps } from 'react-hook-form';

export type DefaultInputProps<T extends object> = {
  controllerProps?: Pick<ControllerProps<T>, 'name' | 'rules'>;
  chakraInputProps?: InputProps;
};

const INPUT_MAX_LENGTH = 266;

export const DefaultInput = <T extends object>({ chakraInputProps, ...rest }: DefaultInputProps<T>) => {
  return <Input maxLength={INPUT_MAX_LENGTH} {...chakraInputProps} {...rest} />;
};
