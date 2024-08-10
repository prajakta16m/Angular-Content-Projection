import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { SingleSlotComponent } from './single-slot/single-slot.component';
import { MultiSlotComponent } from './multi-slot/multi-slot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SingleSlotComponent, MultiSlotComponent],
  template: `
    <h1>Let's learn angular's content projection</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <app-single-slot>
      This is the single slot content being projected from the single slot component !
    </app-single-slot>
    <app-multi-slot>
      <div header>This is the header</div>
      <div body>Lorem ipsum de color blue</div>
    </app-multi-slot>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
