import { types } from 'mobx-state-tree';

export const User = types
  .model('User', {
    // id: types.identifier,
    id: types.optional(types.string, ''),
    name: types.optional(types.string, ''),
    avatarUrl: types.optional(types.string, ''),
  })
  .actions((self) => ({
    setId(id: string) {
      self.id = id;
    },
    setName(name: string) {
      self.name = name;
    },
    setAvatarUrl(avatarUrl: string) {
      self.avatarUrl = avatarUrl;
    },
    setUser(id: string, name: string, avatarUrl: string) {
      self.id = id;
      self.name = name;
      self.avatarUrl = avatarUrl;
    },
  }));
