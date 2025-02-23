import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-submit-button',
  imports: [MatButtonModule],
  template:
    '<button mat-stroked-button [disabled]="disabled()" type="submit">{{ text() }}</button>',
  styleUrl: './submit-button.component.css',
})
export class SubmitButtonComponent {
  text = input<string>('Submit');
  disabled = input<boolean>(false);
}
