import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { galleryMapRoutes } from '../app-modules/gallery-map/routes/gallery-map-routes.tsx';
import { pictureCollectionRoutes } from '../app-modules/picture-collection/routes/picture-collection-routes.ts';
import { AuthPage, HomePage, ProfilePage, WrongRoutePage } from '../pages';
import { RoutesNames } from '../shared/common/routes-names.ts';
import { RootLayout } from '../widgets';
import { AuthLayout } from '../widgets/layouts/auth-layout.tsx';

//TODO:
const LOADER = () => '...LOADING...';

const guestRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <AuthLayout />,
      loader: LOADER,
      children: [
        {
          path: '/',
          element: <Navigate to={RoutesNames.AUTH} replace />,
        },
        {
          index: true,
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
    path: '/',
    element: <RootLayout />,
    loader: LOADER,
    children: [
      {
        path: '/',
        element: <Navigate to={RoutesNames.HOME} replace />,
      },
      {
        index: true,
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

export const Navigator = () => {
  const accessToken = true;

  return <RouterProvider router={accessToken ? userRouter : guestRouter} fallbackElement={<p>...Loading...</p>} />;
};
