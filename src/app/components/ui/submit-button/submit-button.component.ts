import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'submit-button',
  imports: [MatButtonModule],
  template: '<button mat-button type="submit">{{ text() }}</button>',
  styleUrl: './submit-button.component.css',
})
export class SubmitButtonComponent {
  text = input.required<string>();
}
