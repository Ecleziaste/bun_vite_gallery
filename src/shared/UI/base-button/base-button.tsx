import { Button, ButtonProps } from '@chakra-ui/react';

type BaseButtonProps = {
  text: string;
  chakraButtonProps?: ButtonProps;
};

export const BaseButton = ({ text, chakraButtonProps }: BaseButtonProps) => {
  return (
    <Button bg="purple.300" w="100%" h="40px" {...chakraButtonProps}>
      {text}
    </Button>
  );
};
