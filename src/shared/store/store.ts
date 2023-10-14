import { types } from 'mobx-state-tree';
import persist from 'mst-persist';

import { App, User } from '../../entities';
import { defaultSnapshot } from '../common/constants.ts';

export const RootStore = types.model({
  app: App,
  user: User,
});
// .actions((self) => ({
// }));

export const store = RootStore.create(defaultSnapshot);

persist('store', store, {
  storage: localStorage,
  whitelist: ['app', 'user'], // only these keys will be persisted
}).then(() => console.log('store has been hydrated'));
