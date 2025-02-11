import { Component, input } from '@angular/core';

import { Vacancy } from '../../../models/vacancy.model';

import { CardComponent } from '../../ui/card/card.component';
import { CardDetailsComponent } from '../../ui/card-details/card-details.component';
import { CardTitleComponent } from '../../ui/card-title/card-title.component';
import { TagComponent } from '../../ui/tag/tag.component';

@Component({
  selector: 'vacancy-card',
  imports: [
    CardComponent,
    CardDetailsComponent,
    CardTitleComponent,
    TagComponent,
  ],
  templateUrl: './vacancy-card.component.html',
})
export class VacancyCardComponent {
  vacancy = input.required<Vacancy>();
}
