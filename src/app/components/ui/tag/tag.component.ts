import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tag',
  imports: [],
  template: '<div class="tag">{{ text() }}</div>',
  styleUrl: './tag.component.css',
})
export class TagComponent {
  text = input.required<string>();
}
