export enum RoutesNames {
  ROOT = '/',

  //common routes
  AUTH = '/auth',
  HOME = '/home',
  PROFILE = '/profile',

  //picture collection module
  MY_COLLECTION = '/my-collection',
  CREATE_ALBUM = '/create-album',
  UPDATE_ALBUM = '/update-album',
  MY_ALBUM = '/my-album-:id',
  SHARED_ALBUMS = '/shared-albums',
  SHARED_ALBUM = '/shared-album-:id',

  //gallery map module
  MY_GALLERIES = '/my-galleries',
  CREATE_GALLERY = '/create-gallery',
  UPDATE_GALLERY = '/update-gallery',
  MY_GALLERY = '/my-gallery-:id',
  SHARED_GALLERIES = '/shared-galleries',
  SHARED_GALLERY = '/shared-gallery-:id',
}
