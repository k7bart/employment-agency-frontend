import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';

import { VacanciesService } from '../../services/vacancies.service';

import { AsideButtonComponent } from '../ui/aside-button/aside-button.component';
import { AsideComponent } from '../ui/aside/aside.component';
import { H2TitleComponent } from '../ui/h2-title/h2-title.component';
import { TitleComponent } from '../ui/title/title.component';
import { VacancyCardComponent } from '../vacancies/vacancy-card/vacancy-card.component';

@Component({
  selector: 'app-vacancies',
  imports: [
    AsyncPipe,

    MatDividerModule,

    AsideComponent,
    AsideButtonComponent,
    H2TitleComponent,
    TitleComponent,
    VacancyCardComponent,
  ],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.css',
})
export class VacanciesComponent {
  private router = inject(Router);
  private vacanciesService = inject(VacanciesService);

  vacancies$ = this.vacanciesService.getVacancies();

  goToVacancyForm() {
    this.router.navigate(['/new-vacancy']);
  }
}
