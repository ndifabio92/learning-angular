import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { PokemonsService } from './pokemons/services/pokemons.service';
import { PokeAPIResponse } from './pokemons/interfaces';
import { firstValueFrom } from 'rxjs';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'pokemons/page/:page',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const pokemonService = inject(PokemonsService);
      const pokemons = await firstValueFrom(pokemonService.getAll());
      return pokemons.map((p) => ({ page: p.name }));
    },
  },
  {
    path: 'pokemons/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const pokemonService = inject(PokemonsService);
      const pokemons = await firstValueFrom(pokemonService.getAll());
      return pokemons.map((p) => ({ id: p.id }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
