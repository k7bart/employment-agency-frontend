import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { Agreement } from '../../models/agreement.model';
import { AgreementsService } from '../../services/agreements.service';

import { AgreementCardComponent } from './agreement-card/agreement-card.component';
import { AsideButtonComponent } from '../ui/aside-button/aside-button.component';
import { AsideComponent } from '../ui/aside/aside.component';
import { TitleComponent } from '../ui/title/title.component';

@Component({
  selector: 'app-agreements',
  imports: [
    MatDividerModule,

    AgreementCardComponent,
    AsideComponent,
    AsideButtonComponent,
    TitleComponent,
  ],
  templateUrl: './agreements.component.html',
  styleUrl: './agreements.component.css',
})
export class AgreementsComponent {
  @Input() agreements: Agreement[] = [];

  constructor(public agreementsService: AgreementsService) {}

  ngOnInit() {
    this.agreements = this.agreementsService.getAgreements();
  }
}
