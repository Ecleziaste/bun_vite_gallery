import { Navigate } from 'react-router-dom';

import { ROUTES } from '../common/routes.ts';
import { useToken } from '../hooks/use-token.ts';

export const WithAuth = (children: JSX.Element) => {
  const { accessToken } = useToken();

  if (!accessToken) {
    return <Navigate to={ROUTES.ROOT} replace />;
  }

  return children;
};
