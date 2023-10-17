import { Spinner } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { galleryMapRoutes } from '../app-modules/gallery-map';
import { pictureCollectionRoutes } from '../app-modules/picture-collection';
import { AuthPage, HomePage, ProfilePage, WrongRoutePage } from '../pages';
import { RoutesNames } from '../shared/common/routes-names.ts';
import { store } from '../shared/store/store.ts';
import { RootLayout } from '../widgets';
import { AuthLayout } from '../widgets/layouts/auth-layout.tsx';

const LOADER = () => <Spinner />;

const guestRouter = createBrowserRouter(
  [
    {
      path: RoutesNames.ROOT,
      element: <AuthLayout />,
      loader: LOADER,
      children: [
        {
          index: true,
          path: RoutesNames.ROOT,
          element: <Navigate to={RoutesNames.AUTH} replace />,
        },
        {
          path: RoutesNames.AUTH,
          element: <AuthPage />,
          loader: LOADER,
        },
        {
          path: '*',
          element: <WrongRoutePage />,
          loader: LOADER,
        },
      ],
    },
  ],
  {},
);

const userRouter = createBrowserRouter([
  {
    path: RoutesNames.ROOT,
    element: <RootLayout />,
    loader: LOADER,
    children: [
      {
        index: true,
        path: RoutesNames.ROOT,
        element: <Navigate to={RoutesNames.HOME} replace />,
      },
      {
        path: RoutesNames.HOME,
        element: <HomePage />,
        loader: LOADER,
      },
      {
        path: RoutesNames.PROFILE,
        element: <ProfilePage />,
        loader: LOADER,
      },
      {
        path: '*',
        element: <WrongRoutePage />,
        loader: LOADER,
      },
      ...pictureCollectionRoutes,
      ...galleryMapRoutes,
    ],
  },
]);

export const Navigator = observer(() => {
  const accessTokenFromState = store.app.accessToken;

  return (
    <RouterProvider router={accessTokenFromState ? userRouter : guestRouter} fallbackElement={<Spinner size="xl" />} />
  );
});
