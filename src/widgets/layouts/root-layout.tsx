import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../index.ts';
import { Header } from '../index.ts';

export const RootLayout: React.FC = () => {
  return (
    <Flex flexDirection="column" minW="320px" maxW="100%" h="100%" justifyContent="space-between" p={0}>
      <Header />
      <Flex flexDirection="column" flex={1} pr={[3, 1]} pl={[3, 1]} bg="whitesmoke">
        <Outlet />
      </Flex>
      <Footer />
    </Flex>
  );
};
