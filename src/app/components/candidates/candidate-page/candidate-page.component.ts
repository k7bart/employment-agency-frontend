import { Component, inject, Input } from '@angular/core';
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
  private candidatesService = inject(CandidatesService);
  private vacanciesService = inject(VacanciesService);
  candidate$!: Observable<Candidate>;
  suitableVacancies$!: Observable<Vacancy[]>;

  @Input()
  set id(candidateId: Candidate['_id']) {
    this.candidate$ = this.candidatesService.getCandidateById(candidateId);
  }

  ngOnInit() {
    this.candidate$.subscribe((candidate) => {
      this.suitableVacancies$ = this.vacanciesService.getSuitableVacancies(
        candidate.area._id,
        candidate.location.country,
        candidate.location.city,
        candidate.salary,
      );
    });
  }
}
