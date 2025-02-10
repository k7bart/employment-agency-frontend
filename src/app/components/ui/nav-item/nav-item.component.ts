import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  imports: [RouterModule],
  template: '<a [routerLink]="href()">{{ name() }}</a>',
  styleUrl: './nav-item.component.css',
})
export class NavItemComponent {
  name = input.required<string>();
  href = input.required<string>();
}
