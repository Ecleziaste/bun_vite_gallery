import { Flex, useColorModeValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../index.ts';
import { Header } from '../index.ts';

export const RootLayout = () => {
  const bg = useColorModeValue('gray.50', 'gray.600');

  return (
    <Flex flexDirection="column" minW="320px" maxW="100%" h="100%" justifyContent="space-between" p={0} bg={bg}>
      <Header />
      <Flex flexDirection="column" flex={1} p={4}>
        <Outlet />
      </Flex>
      <Footer />
    </Flex>
  );
};
