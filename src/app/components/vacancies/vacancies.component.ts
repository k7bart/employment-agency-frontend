import { Component, Input, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { VacanciesService } from '../../services/vacancies.service';
import { Vacancy } from '../../models/vacancy.model';

import { AsideButtonComponent } from '../ui/aside-button/aside-button.component';
import { AsideComponent } from '../ui/aside/aside.component';
import { ChipsContainerComponent } from '../ui/chips-container/chips-container.component';
import { TagComponent } from '../ui/tag/tag.component';
import { TitleComponent } from '../ui/title/title.component';
import { VacancyCardComponent } from '../vacancies/vacancy-card/vacancy-card.component';

@Component({
  selector: 'app-vacancies',
  imports: [
    MatDividerModule,

    AsideComponent,
    AsideButtonComponent,
    ChipsContainerComponent,
    TagComponent,
    TitleComponent,
    VacancyCardComponent,
  ],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.css',
})
export class VacanciesComponent implements OnInit {
  @Input() vacancies: Vacancy[] = [];

  constructor(public vacanciesService: VacanciesService) {}

  ngOnInit() {
    this.vacancies = this.vacanciesService.getVacancies();
  }
}
