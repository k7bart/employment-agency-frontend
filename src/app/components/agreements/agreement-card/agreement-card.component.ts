import { Component, input } from '@angular/core';

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
  styleUrl: './agreement-card.component.css',
})
export class AgreementCardComponent {
  agreement = input.required<Agreement>();
}
