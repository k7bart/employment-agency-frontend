import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../../../models/employee.model';

import { CardComponent } from '../../ui/card/card.component';
import { CardDetailsComponent } from '../../ui/card-details/card-details.component';
import { CardTitleComponent } from '../../ui/card-title/card-title.component';
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
  private readonly router = inject(Router);

  candidate = input.required<Employee>();

  goToCandidate(id: Employee['id']) {
    this.router.navigate(['/candidates', id]);
  }
}
