import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { MatDividerModule } from '@angular/material/divider';

import { Agreement } from '../../models/agreement.model';
import { AgreementsService } from '../../services/agreements.service';

import { AgreementCardComponent } from './agreement-card/agreement-card.component';
import { AsideButtonComponent } from '../ui/aside-button/aside-button.component';
import { AsideComponent } from '../ui/aside/aside.component';
import { H2TitleComponent } from '../ui/h2-title/h2-title.component';
import { TitleComponent } from '../ui/title/title.component';

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
export class AgreementsComponent implements OnInit {
  agreements$!: Observable<Agreement[]>;

  constructor(public agreementsService: AgreementsService) {}

  ngOnInit() {
    this.agreements$ = this.agreementsService.getAgreements();
  }
}
