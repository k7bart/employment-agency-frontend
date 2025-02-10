import { Component } from '@angular/core';
import { NavItemComponent } from '../nav-item/nav-item.component';

const NAV_ITEMS = [
  { name: 'Vacancies', href: '/vacancies' },
  { name: 'Candidates', href: '/candidates' },
  { name: 'Agreements', href: '/agreements' },
];

@Component({
  selector: 'desctop-nav',
  imports: [NavItemComponent],
  templateUrl: './desktop-nav.component.html',
})
export class DesctopNavComponent {
  navItems = NAV_ITEMS;
}
