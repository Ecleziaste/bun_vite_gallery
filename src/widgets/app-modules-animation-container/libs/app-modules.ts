import { RoutesNames } from '../../../shared/common/routes-names.ts';
import { AppModuleCardProps } from '../../../shared/UI/app-module-card/app-module-card.tsx';

export const APP_MODULES: AppModuleCardProps[] = [
  {
    name: 'Picture Gallery',
    linkTo: RoutesNames.MY_COLLECTION,
    color: 'purple.800',
  },
  {
    name: 'Gallery Map',
    linkTo: RoutesNames.MY_GALLERIES,
    color: 'orange.600',
  },
];
