import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
})
export class SearchInput {
  placeholder = input('Buscar');
  value = output<string>();
  initialValue = input<string>();
  inputValue = linkedSignal<string>(() => this.initialValue() ?? '');

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();
    const timeOut = setTimeout(() => {
      this.value.emit(value);
    }, 500);

    onCleanup(() => {
      clearTimeout(timeOut);
    });
  });
}
