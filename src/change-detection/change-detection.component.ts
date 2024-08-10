import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.scss'
})
export class ChangeDetectionComponent {

  name = "Prajakta";
  username = {name: "hirenita"}

  change(){
    this.name = "Raha";
    this.username.name = "sanjana";
  }
}
