import { afterNextRender, Component, afterRenderEffect, effect, signal } from '@angular/core';
import { Title } from '../../components/title/title';

const log = (...messages: string[]) => {
  console.log(`${messages[0]} %c${messages.slice(1).join(', ')}`, 'color: #bada55');
};

@Component({
  selector: 'app-home-page',
  imports: [Title],
  templateUrl: './home-page.html',
})
export class HomePage {
  traditionalProperty = 'Nicolas';
  signalProperty = signal('Nicolas');

  constructor() {
    log('HomePage constructor');
  }

  changeTraditionalProperty() {
    this.traditionalProperty = 'John';
  }

  changeSignalProperty() {
    this.signalProperty.set('John');
  }

  basicEffect = effect((onCleanup) => {
    log('basicEffect', 'Runs after the component is initialized.');

    onCleanup(() => {
      log('basicEffect', 'Runs before the component is destroyed.');
    });
  });

  ngOnInit() {
    log('ngOnInit', "Runs once after Angular has initialized all the component's inputs.");
  }
  ngOnChanges() {
    log('ngOnChanges', "Runs every time the component's inputs have changed.");
  }
  ngDoCheck() {
    log('ngDoCheck', 'Runs every time this component is checked for changes.');
  }
  ngAfterContentInit() {
    log('ngAfterContentInit', "Runs once after the component's content has been initialized.");
  }
  ngAfterContentChecked() {
    log(
      'ngAfterContentChecked',
      'Runs every time this component content has been checked for changes.',
    );
  }
  ngAfterViewInit() {
    log('ngAfterViewInit', "Runs once after the component's view has been initialized.");
  }
  ngAfterViewChecked() {
    log('ngAfterViewChecked', "Runs every time the component's view has been checked for changes.");
  }
  ngOnDestroy() {
    log('ngOnDestroy', 'Runs before Angular destroys the component.');
  }
  afterNextRenderEffect = afterNextRender(() => {
    log('afterNextRender', 'Runs after the next render.');
  });

  afterRenderEffect = afterRenderEffect(() => {
    log('afterRenderEffect', 'Runs after the render.');
  });
}
