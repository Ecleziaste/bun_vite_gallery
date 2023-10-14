import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { resetStore } from '../../features';
import { RoutesNames } from '../common/routes-names.ts';
import { getCookie } from '../helpers/cookie-helper.ts';

export const WithAuth = (children: ReactNode) => {
  const accessTokenFromCookies = getCookie('accessToken');

  if (!accessTokenFromCookies) {
    resetStore();
    return <Navigate to={RoutesNames.AUTH} replace />;
  }

  return children;
};
