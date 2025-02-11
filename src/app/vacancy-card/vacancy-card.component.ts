import { Component, input } from '@angular/core';
import { CardComponent } from '../components/ui/card/card.component';
import { CardDetailsComponent } from '../components/ui/card-details/card-details.component';
import { CardTitleComponent } from '../card-title/card-title.component';
import { TagComponent } from '../components/ui/tag/tag.component';
import { Vacancy } from '../models/vacancy.model';

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
