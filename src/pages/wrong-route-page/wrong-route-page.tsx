import { Navigate } from 'react-router-dom';

export const WrongRoutePage = () => {
  return <Navigate to="/" replace />;
};
