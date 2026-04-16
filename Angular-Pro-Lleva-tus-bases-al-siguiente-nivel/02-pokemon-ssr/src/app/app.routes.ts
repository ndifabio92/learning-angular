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
  // {
  //   path: 'pokemons',
  //   loadComponent: () => import('./pages/pokemons/pokemons-page'),
  // },
  {
    path: 'pokemons/page/:page',
    loadComponent: () => import('./pages/pokemons/pokemons-page'),
  },
  {
    path: 'pokemons/:id',
    loadComponent: () => import('./pages/pokemon-page/pokemon-page'),
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
