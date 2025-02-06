import { Component, input } from '@angular/core';

@Component({
  selector: 'card-title',
  imports: [],
  templateUrl: './card-title.component.html',
  styleUrl: './card-title.component.css',
})
export class CardTitleComponent {
  maxSalary = input<number>();
  minSalary = input<number>();
  title = input.required<string>();
}
