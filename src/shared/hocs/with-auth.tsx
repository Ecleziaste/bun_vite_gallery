import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { RoutesNames } from '../common/routes-names.ts';
import { getCookie } from '../helpers/cookie-helper.ts';

export const WithAuth = (children: ReactNode) => {
  const accessToken = getCookie('accessToken');

  if (!accessToken) {
    return <Navigate to={RoutesNames.AUTH} replace />;
  }

  return children;
};
