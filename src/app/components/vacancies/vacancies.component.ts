import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';

import { VacanciesService } from '../../services/vacancies.service';

import { AsideButtonComponent } from '../ui/aside-button/aside-button.component';
import { AsideComponent } from '../ui/aside/aside.component';
import { ChipsContainerComponent } from '../ui/chips-container/chips-container.component';
import { H2TitleComponent } from '../ui/h2-title/h2-title.component';
import { TagComponent } from '../ui/tag/tag.component';
import { TitleComponent } from '../ui/title/title.component';
import { VacancyCardComponent } from '../vacancies/vacancy-card/vacancy-card.component';
import { VacancyFormComponent } from './vacancy-form/vacancy-form.component';

@Component({
  selector: 'app-vacancies',
  imports: [
    AsyncPipe,

    MatDividerModule,

    AsideComponent,
    AsideButtonComponent,
    ChipsContainerComponent,
    H2TitleComponent,
    TagComponent,
    TitleComponent,
    VacancyCardComponent,
    VacancyFormComponent,
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
