import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

import { Agreement } from '../../../models/agreement.model';

import { CardComponent } from '../../ui/card/card.component';
import { CardTitleComponent } from '../../ui/card-title/card-title.component';
import { DetailsComponent } from '../../ui/details/details.component';
import { TagComponent } from '../../ui/tag/tag.component';

@Component({
  selector: 'agreement-card',
  imports: [CardComponent, DetailsComponent, CardTitleComponent, TagComponent],
  templateUrl: './agreement-card.component.html',
})
export class AgreementCardComponent {
  private readonly router = inject(Router);

  agreement = input.required<Agreement>();

  goToAgreement(id: Agreement['id']) {
    this.router.navigate(['/agreements', id]);
  }
}
