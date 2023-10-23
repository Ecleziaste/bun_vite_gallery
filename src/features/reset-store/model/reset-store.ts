import { applySnapshot } from 'mobx-state-tree';

import { store } from '../../../entities';
import { defaultSnapshot } from '../../../shared/common/constants.ts';

export const resetStore = () => applySnapshot(store, defaultSnapshot);
