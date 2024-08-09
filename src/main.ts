import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { SingleSlotComponent } from './single-slot/single-slot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SingleSlotComponent],
  template: `
    <h1>Let's learn angular's content projection</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <app-single-slot>
      This is the single slot content being projected from the single slot component !
    </app-single-slot>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
