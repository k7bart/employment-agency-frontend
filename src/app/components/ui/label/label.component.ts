import { Component, input } from '@angular/core';

@Component({
  selector: 'app-label',
  imports: [],
  template: '<label [for]="for()">{{text()}}</label>',
  styleUrl: './label.component.css',
})
export class LabelComponent {
  for = input.required<string>();
  text = input.required<string>();
}
