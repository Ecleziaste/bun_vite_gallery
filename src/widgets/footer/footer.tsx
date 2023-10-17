import { Flex, useColorModeValue } from '@chakra-ui/react';

export const Footer = () => {
  const bg = useColorModeValue('cyan.100', 'teal.900');

  return (
    <Flex w="100%" h="60px" bg={bg} alignItems="center" p={2} borderTop="1px solid grey">
      Footer
    </Flex>
  );
};
