import { Component, Input } from '@angular/core';

import { Candidate } from '../../../models/candidate.model';
import { Vacancy } from '../../../models/vacancy.model';
import { CandidatesService } from '../../../services/candidates.service';
import { VacanciesService } from '../../../services/vacancies.service';

import { MatDivider } from '@angular/material/divider';

import { CandidateCardComponent } from '../../candidates/candidate-card/candidate-card.component';
import { DetailsComponent } from '../../ui/details/details.component';
import { TagComponent } from '../../ui/tag/tag.component';
import { TextComponent } from '../../ui/text/text.component';
import { TitleComponent } from '../../ui/title/title.component';

@Component({
  selector: 'app-vacancy-page',
  imports: [
    MatDivider,

    CandidateCardComponent,
    DetailsComponent,
    TagComponent,
    TextComponent,
    TitleComponent,
  ],
  templateUrl: './vacancy-page.component.html',
  styleUrl: './vacancy-page.component.css',
})
export class VacancyPageComponent {
  vacancy: Vacancy | undefined;
  candidates: Candidate[] = [];

  constructor(
    public vacanciesService: VacanciesService,
    public candidatesService: CandidatesService
  ) {}

  @Input()
  set id(vacancyId: Vacancy['id']) {
    this.vacancy = this.vacanciesService.getVacancyById(vacancyId);
  }

  ngOnInit() {
    this.candidates = this.candidatesService.getCandidates();
  }
}
