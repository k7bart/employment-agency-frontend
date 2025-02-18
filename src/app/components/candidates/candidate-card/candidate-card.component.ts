import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

import { Candidate } from '../../../models/candidate.model';

import { CardComponent } from '../../ui/card/card.component';
import { CardTitleComponent } from '../../ui/card-title/card-title.component';
import { DetailsComponent } from '../../ui/details/details.component';
import { TagComponent } from '../../ui/tag/tag.component';

@Component({
  selector: 'app-candidate-card',
  imports: [CardComponent, DetailsComponent, CardTitleComponent, TagComponent],
  templateUrl: './candidate-card.component.html',
})
export class CandidateCardComponent {
  private readonly router = inject(Router);

  candidate = input.required<Candidate>();

  goToCandidate(id: Candidate['_id']) {
    this.router.navigate(['/candidates/candidate/', id]);
  }
}
