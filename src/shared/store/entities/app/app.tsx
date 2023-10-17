import { types } from 'mobx-state-tree';

export const App = types
  .model('App', {
    accessToken: types.maybe(types.string),
    isModalOpened: types.optional(types.boolean, false),
    isDarkMode: types.optional(types.boolean, true),
  })
  .actions((self) => ({
    setAccessToken(accessToken?: string) {
      self.accessToken = accessToken;
    },
    setIsModalOpened(isModalOpened: boolean) {
      self.isModalOpened = isModalOpened;
    },
    toggleIsModalOpened() {
      self.isModalOpened = !self.isModalOpened;
    },
    setIsDarkMode(isDarkMode: boolean) {
      self.isDarkMode = isDarkMode;
    },
    toggleIsDarkMode() {
      self.isDarkMode = !self.isDarkMode;
    },
  }));
