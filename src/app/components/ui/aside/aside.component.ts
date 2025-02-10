import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  imports: [],
  template: '<aside><ng-content></ng-content></aside>',
  styleUrl: './aside.component.css',
})
export class AsideComponent {}
