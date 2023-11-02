import { Flex, Grid, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';

import { AppModuleCard } from '../../shared/UI';
import { APP_MODULES } from './libs/app-modules.ts';
import { useAnimateContainer } from './libs/useAnimateContainer.ts';

export const AppModulesAnimationContainer = () => {
  const [isLargerThan460] = useMediaQuery('(min-width: 460px)');
  const ref = useRef<HTMLDivElement>(null);
  const divElement = ref.current;
  const { animateContainer } = useAnimateContainer(divElement, 4000);

  useEffect(() => {
    if (!isLargerThan460) {
      return;
    }
    animateContainer();
    // TODO: repair animation twitching
    // eslint-disable-next-line react-hooks/exhaustive-deps
    //
  }, [animateContainer]);

  return (
    <Flex position="relative" flex={1}>
      <Grid
        ref={ref}
        templateColumns={isLargerThan460 ? 'repeat(4, 2fr)' : 'max-content(100%)'}
        templateRows={isLargerThan460 ? 'repeat(3, 1fr)' : undefined}
        h="100%"
        w="100%"
        gap={6}
        position={isLargerThan460 ? 'absolute' : 'unset'}
        top={0}
        left={`${divElement?.offsetWidth || 0}px`}
      >
        {APP_MODULES.map(({ name, linkTo, color }) => (
          <AppModuleCard key={uuid()} name={name} linkTo={linkTo} color={color} />
        ))}
      </Grid>
    </Flex>
  );
};
