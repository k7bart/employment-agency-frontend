import { Component, inject, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { Candidate } from '../../../models/candidate.model';
import { Vacancy } from '../../../models/vacancy.model';
import { CandidatesService } from '../../../services/candidates.service';
import { VacanciesService } from '../../../services/vacancies.service';

import { MatDivider } from '@angular/material/divider';

import { CandidateCardComponent } from '../../candidates/candidate-card/candidate-card.component';
import { DetailsComponent } from '../../ui/details/details.component';
import { H2TitleComponent } from '../../ui/h2-title/h2-title.component';
import { TagComponent } from '../../ui/tag/tag.component';
import { TextComponent } from '../../ui/text/text.component';
import { TitleComponent } from '../../ui/title/title.component';

@Component({
  selector: 'app-vacancy-page',
  imports: [
    AsyncPipe,

    MatDivider,

    CandidateCardComponent,
    DetailsComponent,
    H2TitleComponent,
    TagComponent,
    TextComponent,
    TitleComponent,
  ],
  templateUrl: './vacancy-page.component.html',
  styleUrl: './vacancy-page.component.css',
})
export class VacancyPageComponent {
  private candidatesService = inject(CandidatesService);
  private vacanciesService = inject(VacanciesService);

  vacancy$!: Observable<Vacancy>;
  suitableCandidates$!: Observable<Candidate[]>;

  @Input()
  set id(vacancyId: Vacancy['_id']) {
    this.vacancy$ = this.vacanciesService.getVacancyById(vacancyId);
  }

  ngOnInit() {
    this.vacancy$.subscribe((vacancy) => {
      this.suitableCandidates$ = this.candidatesService.getSuitableCandidates(
        vacancy.area._id,
        vacancy.location?.country,
        vacancy.location?.city,
        vacancy.minSalary,
        vacancy.maxSalary,
      );
    });
  }
}
