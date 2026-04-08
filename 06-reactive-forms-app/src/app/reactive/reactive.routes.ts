import { Routes } from '@angular/router';
import { BasicPage } from './pages/basic-page/basic-page';
import { DynamicPage } from './pages/dynamic-page/dynamic-page';
import { SwitchesPages } from './pages/switches-pages/switches-pages';

export const reactiveRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'Basicos',
        component: BasicPage,
      },
      {
        path: 'dynamic',
        title: 'Dinamicos',
        component: DynamicPage,
      },
      {
        path: 'switches',
        title: 'Switches',
        component: SwitchesPages,
      },
      {
        path: '**',
        redirectTo: 'basic',
      },
    ],
  },
];
