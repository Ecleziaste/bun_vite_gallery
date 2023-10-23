import { applySnapshot } from 'mobx-state-tree';

import { store } from '../../../entities';
import { defaultSnapshot } from '../../../shared/common/constants.ts';

export const useResetStore = () => {
  const resetStore = () => applySnapshot(store, defaultSnapshot);

  return resetStore;
};
