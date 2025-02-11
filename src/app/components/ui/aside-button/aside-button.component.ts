import { Component, input } from '@angular/core';

@Component({
  selector: 'aside-button',
  imports: [],
  template: '<button>{{ text() }}</button>',
  styleUrl: './aside-button.component.css',
})
export class AsideButtonComponent {
  text = input.required<string>();
}
