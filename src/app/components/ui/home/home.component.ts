import { Component, inject } from '@angular/core';

import { AuthService } from '../../../services/auth.service';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { LandingComponent } from '../landing/landing.component';

@Component({
  selector: 'app-home',
  imports: [DashboardComponent, LandingComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  authService = inject(AuthService);
}
