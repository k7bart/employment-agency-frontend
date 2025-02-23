import { Component, inject, Input, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { Vacancy } from '../../../models/vacancy.model';
import { VacanciesService } from '../../../services/vacancies.service';

import { MatDivider } from '@angular/material/divider';

import { DetailsComponent } from '../../ui/details/details.component';
import { H2TitleComponent } from '../../ui/h2-title/h2-title.component';
import { TagComponent } from '../../ui/tag/tag.component';
import { TextComponent } from '../../ui/text/text.component';
import { TitleComponent } from '../../ui/title/title.component';
import { VacancyCardComponent } from '../../vacancies/vacancy-card/vacancy-card.component';
import { Agreement } from '../../../models/agreement.model';
import { AgreementsService } from '../../../services/agreements.service';

@Component({
  selector: 'app-agreement-page',
  imports: [
    AsyncPipe,

    MatDivider,

    DetailsComponent,
    H2TitleComponent,
    TagComponent,
    TextComponent,
    TitleComponent,
    VacancyCardComponent,
  ],
  templateUrl: './agreement-page.component.html',
  styleUrl: './agreement-page.component.css',
})
export class AgreementPageComponent implements OnInit {
  private agreementsService = inject(AgreementsService);
  private vacanciesService = inject(VacanciesService);

  agreement$!: Observable<Agreement>;
  openVacancies$!: Observable<Vacancy[]>;

  @Input()
  set id(agreementId: Agreement['_id']) {
    this.agreement$ = this.agreementsService.getAgreementById(agreementId);
  }

  ngOnInit() {
    this.agreement$.subscribe((agreement) => {
      this.openVacancies$ = this.vacanciesService.getVacanciesByEmployerId(
        agreement.vacancy.employer._id,
      );
    });
  }
}
