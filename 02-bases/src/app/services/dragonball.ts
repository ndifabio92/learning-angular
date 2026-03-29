import { computed, effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character';

const loadFromLocalStorage = (): Character[] => {
  const data = localStorage.getItem('characters');
  return data ? (JSON.parse(data) as Character[]) : [];
};

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

  saveTolocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    };
  });

  addCharacter(newCharacter: Character) {
    this.characters.update((characters) => [...characters, newCharacter]);
  }
}
