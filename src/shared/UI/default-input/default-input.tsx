import { Input, InputProps } from '@chakra-ui/react';
import { ForwardRefRenderFunction } from 'react';

export type DefaultInputProps = {
  chakraInputProps?: InputProps;
};

const INPUT_MAX_LENGTH = 266;

export const DefaultInput: ForwardRefRenderFunction<HTMLInputElement, DefaultInputProps> = (
  { chakraInputProps, ...rest }: DefaultInputProps,
  ref,
) => {
  return <Input maxLength={INPUT_MAX_LENGTH} ref={ref} {...chakraInputProps} {...rest} />;
};
