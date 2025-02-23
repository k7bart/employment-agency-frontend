import { Component, inject } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { AsideButtonComponent } from '../aside-button/aside-button.component';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-home',
  imports: [AsideButtonComponent, DashboardComponent, TitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private router = inject(Router);
  authService = inject(AuthService);

  stats = [
    { label: 'agreements', value: 100 },
    { label: 'candidates', value: 100 },
    { label: 'vacancies', value: 100 },
    { label: 'revenue', value: 100 },
  ];

  onButtonClick() {
    this.router.navigate(['/login']);
  }
}
