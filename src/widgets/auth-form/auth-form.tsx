import { Box, Grid, Stack } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

import { CookiesKeys } from '../../shared/common/constants.ts';
import { setCookie } from '../../shared/helpers';
import { store } from '../../shared/store/store.ts';
import { BaseButton, BaseInput } from '../../shared/UI';
import { PasswordInput } from '../../shared/UI/password-input/password-input.tsx';

type AuthFormValues = {
  email: string;
  password: string;
};

export const AuthForm = observer(() => {
  const {
    app: { setAccessToken },
    user: { setUser },
  } = store;
  const {
    handleSubmit,
    // control,
    // reset,
    formState: {
      isValid,
      // errors
    },
  } = useForm<AuthFormValues>({
    defaultValues: {},
    reValidateMode: 'onChange',
  });

  //TODO:
  const fetchAuth = async (email: string, password: string) => {
    console.log(email);
    return console.log(password);

    setCookie(CookiesKeys.accessToken, 'token', { expires: 7 });
    setAccessToken('token');
    setUser(uuid(), 'name', 'avatar');
  };

  // const { value, isLoading } = useAsync(fetchAuth);

  const onSubmit = (data?: AuthFormValues) => {
    if (data) {
      fetchAuth(data.email, data.password);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        w="400px"
        h="330px"
        bg="cyan.100"
        border="2px solid saddlebrown"
        alignItems="center"
        p={3}
        spacing={1}
        borderRadius="18px"
      >
        <Box mt={1} mb={2} fontSize="24px" children="Register or login" />

        <BaseInput label="Enter e-mail:" chakraInputProps={{ placeholder: 'E-mail' }} error={'WTF sadsad'} />
        <PasswordInput
          label="Enter password:"
          // rootStyle={{ marginBottom: '10px' }}
          chakraInputProps={{ placeholder: 'Password' }}
          error={'WTF sadsad'}
        />

        <Grid flexDirection="row" w="100%" gridTemplateColumns={'1fr 3fr'} gap={2}>
          <BaseButton
            text="Clear"
            chakraButtonProps={{
              // disabled: ,
              type: 'reset',
            }}
          />
          <BaseButton
            text="Continue"
            chakraButtonProps={{
              // isLoading: isLoading,
              disabled: !isValid,
              type: 'submit',
            }}
          />
        </Grid>
      </Stack>
    </form>
  );
});
