import { Box, Flex } from '@chakra-ui/react';

import { HeaderMenu } from './components';

export const Header = () => {
  return (
    <Flex
      w="100%"
      h="70px"
      bg="purple.200"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      borderBottom="1px solid grey"
    >
      <Box>Header</Box>

      <HeaderMenu />
    </Flex>
  );
};
