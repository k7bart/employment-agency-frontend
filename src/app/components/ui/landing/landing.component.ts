import { Component, inject } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { AsideButtonComponent } from '../aside-button/aside-button.component';
import { Router } from '@angular/router';

import { STATS } from '../../../consts';

@Component({
  selector: 'app-landing',
  imports: [AsideButtonComponent, TitleComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  private router = inject(Router);

  stats = STATS;

  onButtonClick() {
    this.router.navigate(['/login']);
  }
}
