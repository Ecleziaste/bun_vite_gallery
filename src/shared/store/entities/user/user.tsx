import { types } from 'mobx-state-tree';

import { User as UserType } from '../../../types/common-types.ts';

export const User = types
  .model('User', {
    id: types.maybe(types.string),
    name: types.maybe(types.string),
    email: types.maybe(types.string),
    avatarUrl: types.maybe(types.string),
  })
  .actions((self) => ({
    setId(id?: string) {
      self.id = id;
    },
    setName(name?: string) {
      self.name = name;
    },
    setEmail(email?: string) {
      self.email = email;
    },
    setAvatarUrl(avatarUrl?: string) {
      self.avatarUrl = avatarUrl;
    },
    setUser({ id, name, email, avatarUrl }: UserType) {
      self.id = id;
      self.name = name;
      self.email = email;
      self.avatarUrl = avatarUrl;
    },
  }));
