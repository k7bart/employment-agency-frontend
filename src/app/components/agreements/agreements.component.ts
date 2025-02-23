import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';

import { AgreementsService } from '../../services/agreements.service';

import { AgreementCardComponent } from './agreement-card/agreement-card.component';
import { AsideButtonComponent } from '../ui/aside-button/aside-button.component';
import { AsideComponent } from '../ui/aside/aside.component';
import { H2TitleComponent } from '../ui/h2-title/h2-title.component';
import { TitleComponent } from '../ui/title/title.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agreements',
  imports: [
    AsyncPipe,

    MatDividerModule,

    AgreementCardComponent,
    AsideComponent,
    AsideButtonComponent,
    H2TitleComponent,
    TitleComponent,
  ],
  templateUrl: './agreements.component.html',
  styleUrl: './agreements.component.css',
})
export class AgreementsComponent {
  private router = inject(Router);
  private agreementsService = inject(AgreementsService);

  agreements$ = this.agreementsService.getAgreements();

  goToAgreementForm() {
    this.router.navigate(['/new-agreement']);
  }
}
