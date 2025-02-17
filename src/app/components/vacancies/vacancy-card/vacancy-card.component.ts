import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

import { Vacancy } from '../../../models/vacancy.model';

import { CardComponent } from '../../ui/card/card.component';
import { CardTitleComponent } from '../../ui/card-title/card-title.component';
import { DetailsComponent } from '../../ui/details/details.component';
import { TagComponent } from '../../ui/tag/tag.component';

@Component({
  selector: 'app-vacancy-card',
  imports: [CardComponent, DetailsComponent, CardTitleComponent, TagComponent],
  templateUrl: './vacancy-card.component.html',
})
export class VacancyCardComponent {
  private readonly router = inject(Router);

  vacancy = input.required<Vacancy>();

  goToVacancy(id: Vacancy['_id']) {
    this.router.navigate(['/vacancies', id]);
  }
}
