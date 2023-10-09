import { Box, Flex } from '@chakra-ui/react';

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
      <Box>Profile menu</Box>
    </Flex>
  );
};
