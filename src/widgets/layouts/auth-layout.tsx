import { Flex, Image } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { ZIndexLevels } from '../../shared/styles/z-index-levels.ts';

export const AuthLayout = () => {
  return (
    <Flex
      position="relative"
      flexDirection="column"
      minW="320px"
      maxW="100vw"
      h="100%"
      justifyContent="center"
      alignItems="center"
      p={1}
      zIndex={ZIndexLevels.MIN}
    >
      <Image
        boxSize="100%"
        src={'/iam_os-hermitage-unsplash-2400x1600.jpg?url'}
        alt="Hermitage picture gallery"
        position="absolute"
        objectFit="cover"
        zIndex={ZIndexLevels.MIN}
      />
      <Flex zIndex={ZIndexLevels.LEVEL_1} position="absolute" flexDirection="column">
        <Outlet />
      </Flex>
    </Flex>
  );
};
