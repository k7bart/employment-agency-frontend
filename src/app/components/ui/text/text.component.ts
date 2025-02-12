import { Component } from '@angular/core';

@Component({
  selector: 'app-text',
  imports: [],
  template: '<p><ng-content></ng-content></p>',
  styleUrl: './text.component.css',
})
export class TextComponent {}
