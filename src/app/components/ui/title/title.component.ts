import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent {
  commission = input<number>();
  maxSalary = input<number>();
  minSalary = input<number>();
  mutedNum = input<number>();
  title = input.required<string>();
}
