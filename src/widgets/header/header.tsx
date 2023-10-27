import { Flex, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import { HeaderMenu, ThemeSwitcher } from './components';

export const Header = observer(() => {
  const bg = useColorModeValue('cyan.100', 'teal.900');
  const [isLargerThan460] = useMediaQuery('(min-width: 460px)');

  return (
    <Flex
      w="100%"
      h="70px"
      bg={bg}
      justifyContent="space-between"
      alignItems="center"
      px={isLargerThan460 ? 10 : 2}
      py={2}
      borderBottom="1px solid grey"
    >
      <ThemeSwitcher />
      <HeaderMenu />
    </Flex>
  );
});
