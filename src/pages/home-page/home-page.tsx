import { Flex } from '@chakra-ui/react';

import { AppModulesAnimationContainer } from '../../widgets';

export const HomePage = () => {
  return (
    <Flex direction="column" gap="20px" fontSize="2rem" flex={1}>
      <AppModulesAnimationContainer />
    </Flex>
  );
};
