import { Flex, FormLabel, Switch, useColorMode } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import { store } from '../../../../shared/store/store.ts';

export const ThemeSwitcher = observer(() => {
  const { colorMode, toggleColorMode } = useColorMode();
  const {
    app: { toggleIsDarkMode },
  } = store;
  const isDark = colorMode === 'dark';

  return (
    <Flex w="200px" flexDirection="row" bg="transparent" transitionDuration="200ms">
      <FormLabel htmlFor="color-mode-switch" mb="0">
        Dark Mode
      </FormLabel>
      <Switch
        id="color-mode-switch"
        colorScheme="teal"
        isChecked={isDark}
        onChange={() => {
          toggleColorMode();
          toggleIsDarkMode();
        }}
      />
    </Flex>
  );
});
