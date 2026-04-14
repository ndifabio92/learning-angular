import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact-page'),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about-page'),
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing-page'),
  },
  {
    path: '**',
    redirectTo: 'about',
  },
];
