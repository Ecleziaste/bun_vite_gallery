export const DEFAULT_PAGE_LIMIT = 9;

export enum FrontendModule {
  pictureGallery = 'pictureGallery',
  galleryMap = 'galleryMap',
}

export enum CookiesKeys {
  accessToken = 'accessToken',
  breadcrumbs = 'breadcrumbs',
}

export enum SortType {
  ASC = 'ASCENDING',
  DESC = 'DESCENDING',
}

export enum HttpMethods {
  post = 'POST',
  get = 'GET',
  put = 'PUT',
  patch = 'PATCH',
  delete = 'DELETE',
  request = 'REQUEST',
}

export const defaultSnapshot = {
  app: { accessToken: undefined, isModalOpened: false, isDarkMode: true },
  user: {
    id: undefined,
    name: undefined,
    email: undefined,
    avatarUrl: undefined,
  },
};
