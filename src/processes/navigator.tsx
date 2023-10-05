import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { galleryMapRoutes } from '../frontend-modules/gallery-map/routes/gallery-map-routes.tsx';
import { pictureCollectionRoutes } from '../frontend-modules/picture-collection/routes/picture-collection-routes.ts';
import { AuthPage, HomePage, ProfilePage, WrongRoutePage } from '../pages';
import { RoutesNames } from '../shared/common/routes-names.ts';
import { RootLayout } from '../widgets';

//TODO:
const LOADER = () => '...LOADING...';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    loader: LOADER,
    children: [
      {
        path: RoutesNames.AUTH,
        element: <AuthPage />,
        loader: LOADER,
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

export const Navigator = () => {
  return <RouterProvider router={router} fallbackElement={<p>...Loading...</p>} />;
};
