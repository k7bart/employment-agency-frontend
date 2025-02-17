import { Component, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { Candidate } from '../../../models/candidate.model';
import { Vacancy } from '../../../models/vacancy.model';
import { CandidatesService } from '../../../services/candidates.service';
import { VacanciesService } from '../../../services/vacancies.service';

import { MatDivider } from '@angular/material/divider';

import { DetailsComponent } from '../../ui/details/details.component';
import { H2TitleComponent } from '../../ui/h2-title/h2-title.component';
import { TagComponent } from '../../ui/tag/tag.component';
import { TextComponent } from '../../ui/text/text.component';
import { TitleComponent } from '../../ui/title/title.component';
import { VacancyCardComponent } from '../../vacancies/vacancy-card/vacancy-card.component';

@Component({
  selector: 'app-candidate-page',
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
  templateUrl: './candidate-page.component.html',
  styleUrl: './candidate-page.component.css',
})
export class CandidatePageComponent {
  candidate$!: Observable<Candidate>;
  vacancies$!: Observable<Vacancy[]>;

  constructor(public candidatesService: CandidatesService, public vacanciesService: VacanciesService) {}

  @Input()
  set id(candidateId: Candidate['_id']) {
    this.candidate$ = this.candidatesService.getCandidateById(candidateId);
  }

  // get suitable vacancies
  ngOnInit() {
    this.vacancies$ = this.vacanciesService.getVacancies();
  }
}
