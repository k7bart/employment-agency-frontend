import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  template: '<li><ng-content></ng-content></li>',
  styles: 'li { padding: 20px 0 }',
})
export class CardComponent {}
