import { CookiesKeys } from '../../shared/common/constants.ts';
import { removeCookie } from '../../shared/helpers/cookie-helper.ts';
import { useResetStore } from '../resetStore/use-reset-store.ts';

export const useLogOut = () => {
  const resetStore = useResetStore();

  const logOut = () => {
    removeCookie(CookiesKeys.accessToken);
    resetStore();
  };

  return logOut;
};
