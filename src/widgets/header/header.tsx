import { Box, Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { RoutesNames } from '../../shared/common/routes-names.ts';

export const Header = () => {
  const navigate = useNavigate();

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
      <Button w="100px" h="40px" onClick={() => navigate(RoutesNames.PROFILE)}>
        Profile
      </Button>
      <Box>Profile menu</Box>
    </Flex>
  );
};
