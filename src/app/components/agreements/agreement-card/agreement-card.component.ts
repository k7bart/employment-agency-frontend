import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

import { Agreement } from '../../../models/agreement.model';

import { CardComponent } from '../../ui/card/card.component';
import { CardDetailsComponent } from '../../ui/card-details/card-details.component';
import { CardTitleComponent } from '../../ui/card-title/card-title.component';
import { TagComponent } from '../../ui/tag/tag.component';

@Component({
  selector: 'agreement-card',
  imports: [
    CardComponent,
    CardDetailsComponent,
    CardTitleComponent,
    TagComponent,
  ],
  templateUrl: './agreement-card.component.html',
})
export class AgreementCardComponent {
  private readonly router = inject(Router);

  agreement = input.required<Agreement>();

  goToAgreement(id: Agreement['id']) {
    this.router.navigate(['/agreements', id]);
  }
}
