import { Component, input } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { CardDetailsComponent } from '../../ui/card-details/card-details.component';
import { CardTitleComponent } from '../../../card-title/card-title.component';
import { Employee } from '../../../models/employee.model';
import { TagComponent } from '../../ui/tag/tag.component';

@Component({
  selector: 'candidate-card',
  imports: [
    CardComponent,
    CardDetailsComponent,
    CardTitleComponent,
    TagComponent,
  ],
  templateUrl: './candidate-card.component.html',
})
export class CandidateCardComponent {
  candidate = input.required<Employee>();
}
