import { Flex, useMediaQuery } from '@chakra-ui/react';

import { AppModuleCard } from '../../shared/UI';
import { APP_MODULES } from './libs/app-modules.ts';

export const AppModulesAnimationContainer = () => {
  const [isLargerThan460] = useMediaQuery('(min-width: 460px)');

  return (
    <Flex direction={isLargerThan460 ? 'row' : 'column'} alignItems="center" gap="20px">
      {APP_MODULES.map(({ name, linkTo, color }) => (
        <AppModuleCard name={name} linkTo={linkTo} color={color} />
      ))}
    </Flex>
  );
};
