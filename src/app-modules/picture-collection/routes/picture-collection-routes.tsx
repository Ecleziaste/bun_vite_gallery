import { RoutesNames } from '../../../shared/common/routes-names.ts';
import { WithAuth } from '../../../shared/hocs';
import {
  CreateAlbumPage,
  MyAlbumPage,
  MyCollectionPage,
  SharedAlbumPage,
  SharedAlbumsPage,
  UpdateAlbumPage,
} from '../pages';

const pictureCollectionRoutesLoader = () => '...Picture Collection Loading ...';

export const pictureCollectionRoutes = [
  {
    path: RoutesNames.MY_COLLECTION,
    element: WithAuth(<MyCollectionPage />),
    loader: pictureCollectionRoutesLoader,
  },
  {
    path: RoutesNames.CREATE_ALBUM,
    element: WithAuth(CreateAlbumPage()),
    loader: pictureCollectionRoutesLoader,
  },
  {
    path: RoutesNames.UPDATE_ALBUM,
    element: WithAuth(UpdateAlbumPage()),
    loader: pictureCollectionRoutesLoader,
  },

  {
    path: RoutesNames.MY_ALBUM,
    element: WithAuth(MyAlbumPage()),
    loader: pictureCollectionRoutesLoader,
  },
  {
    path: RoutesNames.SHARED_ALBUMS,
    element: WithAuth(SharedAlbumsPage()),
    loader: pictureCollectionRoutesLoader,
  },
  {
    path: RoutesNames.SHARED_ALBUM,
    element: WithAuth(SharedAlbumPage()),
    loader: pictureCollectionRoutesLoader,
  },
];
