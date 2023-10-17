import { Flex, useColorModeValue } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import { HeaderMenu, ThemeSwitcher } from './components';

export const Header = observer(() => {
  const bg = useColorModeValue('cyan.100', 'teal.900');

  return (
    <Flex
      w="100%"
      h="70px"
      bg={bg}
      justifyContent="space-between"
      alignItems="center"
      px={10}
      py={2}
      borderBottom="1px solid grey"
    >
      <ThemeSwitcher />
      <HeaderMenu />
    </Flex>
  );
});
