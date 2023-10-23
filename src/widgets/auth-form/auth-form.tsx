import { Box, Grid, Stack, useColorModeValue } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

import { store } from '../../entities';
import { CookiesKeys } from '../../shared/common/constants.ts';
import { setCookie } from '../../shared/helpers';
import { useToasts } from '../../shared/hooks';
import { BaseButton, BaseInput, PasswordInput } from '../../shared/UI';
import { regExp } from '../../shared/utils/regExp.ts';

type AuthFormValues = {
  email: string;
  password: string;
};

const DEFAULT_VALUES: AuthFormValues = {
  email: '',
  password: '',
};

export const AuthForm = observer(() => {
  const bg = useColorModeValue('cyan.100', 'gray.900');
  const { showSuccessToast, showFailToast } = useToasts();
  const [isLoading, setIsLoading] = useState(false);
  const {
    app: { setAccessToken },
    user: { setUser },
  } = store;
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { isValid, errors, isSubmitted },
  } = useForm<AuthFormValues>({
    defaultValues: DEFAULT_VALUES,
    reValidateMode: 'onChange',
    mode: 'onSubmit',
  });
  const watchedValues = watch();

  const fetchAuth = async (email: string, password: string) => {
    //TODO: awaiting backend
    const accessToken = `token${password}`;

    setCookie(CookiesKeys.accessToken, accessToken, { expires: 7 });
    setAccessToken(accessToken);
    setUser({ id: uuid(), email });
  };

  const onSubmit = async (data: AuthFormValues) => {
    if (!isValid) return;

    try {
      setIsLoading(true);
      await fetchAuth(data.email, data.password);
      showSuccessToast('Welcome to app!');
    } catch (err) {
      showFailToast(err as string);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        maxW="400px"
        minW="320px"
        h="330px"
        bg={bg}
        border="2px solid saddlebrown"
        alignItems="center"
        p={3}
        spacing={1}
        borderRadius="18px"
      >
        <Box mt={1} mb={2} fontSize="24px" children="Register or login" />

        <Controller
          name="email"
          control={control}
          rules={{ required: true, pattern: { value: regExp.email, message: `Valid format is 'example@email.com'` } }}
          render={({ field }) => {
            return (
              <BaseInput
                label="Enter e-mail:"
                chakraInputProps={{ placeholder: 'example@email.com', ...field }}
                error={errors?.email?.message}
              />
            );
          }}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: true, minLength: { value: 8, message: 'Password minimum length is 8' } }}
          render={({ field }) => {
            return (
              <PasswordInput
                label="Enter password:"
                chakraInputProps={{ placeholder: 'Eight characters password', ...field }}
                error={errors?.password?.message}
              />
            );
          }}
        />

        <Grid flexDirection="row" w="100%" gridTemplateColumns={'1fr 3fr'} gap={2}>
          <BaseButton
            text="Clear"
            chakraButtonProps={{
              isDisabled: watchedValues?.email?.length < 1 && watchedValues?.password?.length < 1,
              type: 'reset',
              onClick: () => reset(),
            }}
          />
          <BaseButton
            text="Continue"
            chakraButtonProps={{
              isLoading,
              isDisabled: isSubmitted && !isValid,
              type: 'submit',
            }}
          />
        </Grid>
      </Stack>
    </form>
  );
});
