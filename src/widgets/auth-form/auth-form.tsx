import { Button, Flex } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import { CookiesKeys } from '../../shared/common/constants.ts';
import { setCookie } from '../../shared/helpers/cookie-helper.ts';
import { store } from '../../shared/store/store.ts';

export const AuthForm = observer(() => {
  const {
    app: { setAccessToken },
    user: { setUser },
  } = store;

  return (
    <Flex w="400px" h="300px" bg="white" flexDirection="column" alignItems="center" p={2} borderRadius="12px">
      Зарегистрироваться или войти
      <Button
        w="100px"
        h="40px"
        onClick={() => {
          setCookie(CookiesKeys.accessToken, 'token', { expires: 7 });
          setAccessToken('token');
          setUser('id', 'name', 'avatar');
        }}
      >
        Log in
      </Button>
    </Flex>
  );
});
