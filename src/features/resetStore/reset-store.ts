import { applySnapshot } from 'mobx-state-tree';

import { defaultSnapshot } from '../../shared/common/constants.ts';
import { store } from '../../shared/store/store.ts';

export const resetStore = () => applySnapshot(store, defaultSnapshot);
