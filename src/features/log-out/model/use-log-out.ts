import { CookiesKeys } from '../../../shared/common/constants.ts';
import { removeCookie } from '../../../shared/helpers';
import { useResetStore } from '../../reset-store';

export const useLogOut = () => {
  const resetStore = useResetStore();

  const logOut = () => {
    removeCookie(CookiesKeys.accessToken);
    resetStore();
  };

  return logOut;
};
