import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  template: '<form novalidate><ng-content></ng-content></form>',
  styleUrl: './form.component.css',
})
export class FormComponent {}
