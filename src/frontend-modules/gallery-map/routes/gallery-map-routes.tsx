import { RoutesNames } from '../../../shared/common/routes-names.ts';
import { WithAuth } from '../../../shared/hocs';

const galleryMapRoutesLoader = () => '...Gallery Map Loading ...';

export const galleryMapRoutes = [
  {
    path: RoutesNames.MY_GALLERIES,
    element: WithAuth(<div></div>),
    loader: galleryMapRoutesLoader,
  },
  {
    path: RoutesNames.CREATE_GALLERY,
    element: WithAuth(<div></div>),
    loader: galleryMapRoutesLoader,
  },
  {
    path: RoutesNames.UPDATE_GALLERY,
    element: WithAuth(<div></div>),
    loader: galleryMapRoutesLoader,
  },
  {
    path: RoutesNames.MY_GALLERY,
    element: WithAuth(<div></div>),
    loader: galleryMapRoutesLoader,
  },
  {
    path: RoutesNames.SHARED_GALLERIES,
    element: WithAuth(<div></div>),
    loader: galleryMapRoutesLoader,
  },
  {
    path: RoutesNames.SHARED_GALLERY,
    element: WithAuth(<div></div>),
    loader: galleryMapRoutesLoader,
  },
];
