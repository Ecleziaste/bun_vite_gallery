import { types } from 'mobx-state-tree';

export const App = types
  .model('App', {
    accessToken: types.optional(types.string, ''),
    isModalOpened: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    setAccessToken(accessToken: string) {
      self.accessToken = accessToken;
    },
    setIsModalOpened(isModalOpened: boolean) {
      self.isModalOpened = isModalOpened;
    },
    toggleIsModalOpened() {
      self.isModalOpened = !self.isModalOpened;
    },
  }));
