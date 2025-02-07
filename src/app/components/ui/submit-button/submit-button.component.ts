import { Component, input } from '@angular/core';

@Component({
  selector: 'submit-button',
  imports: [],
  template: '<button type="submit">{{ text() }}</button>',
  styleUrl: './submit-button.component.css',
})
export class SubmitButtonComponent {
  text = input.required<string>();
}
