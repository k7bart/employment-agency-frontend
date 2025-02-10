import { Component } from '@angular/core';
import { NavItemComponent } from '../nav-item/nav-item.component';

const NAV_ITEMS = [
  { name: 'Vacancies', href: '/vacancies' },
  { name: 'Candidates', href: '/candidates' },
  { name: 'Agreements', href: '/agreements' },
];

@Component({
  selector: 'app-nav',
  imports: [NavItemComponent],
  templateUrl: './nav.component.html',
})
export class NavComponent {
  navItems = NAV_ITEMS;
}
