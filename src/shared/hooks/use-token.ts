// import { useSelector } from 'react-redux';
// import { UserEntity } from 'src/5_entities';

import { CookiesKeys } from '../common/constants.ts';
import { useCookies } from './use-cookies.ts';

export const useToken = () => {
  const { value: tokenFromCookies } = useCookies(CookiesKeys.accessToken);
  // const tokenFromState = useSelector(UserEntity.userSelectors.selectToken);

  // const accessToken = tokenFromCookies ?? tokenFromState;
  const accessToken = tokenFromCookies;

  return { accessToken };
};
