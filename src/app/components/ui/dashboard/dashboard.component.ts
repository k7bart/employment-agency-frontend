import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { H2TitleComponent } from '../h2-title/h2-title.component';

import { AUTHED_NAV_ITEMS, FORMS_NAV_ITEMS } from '../../../consts/nav-items';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, H2TitleComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  readonly authedNavItems = AUTHED_NAV_ITEMS;
  readonly formsNavItems = FORMS_NAV_ITEMS;
}
