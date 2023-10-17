import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Flex, FlexProps, IconButton, InputGroup, InputRightAddon, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { BaseInputProps } from '../base-input/base-input.tsx';
import { DefaultInput } from '../default-input/default-input.tsx';

type PasswordInputProps = { rootStyle?: FlexProps; error?: string } & BaseInputProps;

export const PasswordInput = ({ rootStyle, error, label, chakraInputProps, ...rest }: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <Flex direction="column" width="100%" position="relative" pb="20px" {...rootStyle}>
      {label && (
        <Text mb="2px" fontSize="16px">
          {label}
        </Text>
      )}

      <InputGroup variant="filled" borderColor="darkgrey" borderRadius="10px" borderWidth="1px" m={0}>
        <DefaultInput
          chakraInputProps={{
            borderLeftRadius: '10px',
            borderRightRadius: '0px',
            borderWidth: '1px',
            focusBorderColor: 'saddlebrown',
            type: isPasswordVisible ? 'text' : 'password',
            isInvalid: Boolean(error),
            ...chakraInputProps,
          }}
          {...rest}
        />
        <InputRightAddon
          borderRightRadius="10px"
          children={
            <IconButton
              height="92%"
              bg="transparent"
              aria-label="Toggle password visibility"
              icon={isPasswordVisible ? <ViewOffIcon /> : <ViewIcon />}
              onClick={() => setIsPasswordVisible((currentValue) => !currentValue)}
            />
          }
        />
      </InputGroup>

      {error && (
        <Text position="absolute" bottom="-2px" color="crimson" fontSize="14px">
          {error}
        </Text>
      )}
    </Flex>
  );
};
