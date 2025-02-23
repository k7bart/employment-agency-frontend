import { Component, inject } from '@angular/core';

import { AuthService } from '../../../services/auth.service';

import { NavItemComponent } from '../nav-item/nav-item.component';
import {
  AUTHED_NAV_ITEMS,
  NOT_AUTHED_NAV_ITEMS,
} from '../../../consts/nav-items';

@Component({
  selector: 'app-desktop-nav',
  imports: [NavItemComponent],
  templateUrl: './desktop-nav.component.html',
  styleUrl: './desktop-nav.component.css',
})
export class DesktopNavComponent {
  readonly authedNavItems = AUTHED_NAV_ITEMS;
  readonly notAuthedNavItems = NOT_AUTHED_NAV_ITEMS;

  authService = inject(AuthService);
}
