import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { MatDividerModule } from '@angular/material/divider';

import { CandidatesService } from '../../services/candidates.service';
import { Candidate } from '../../models/candidate.model';

import { AsideComponent } from '../ui/aside/aside.component';
import { AsideButtonComponent } from '../ui/aside-button/aside-button.component';
import { CandidateCardComponent } from './candidate-card/candidate-card.component';
import { H2TitleComponent } from '../ui/h2-title/h2-title.component';
import { TitleComponent } from '../ui/title/title.component';

@Component({
  selector: 'app-candidates',
  imports: [
    AsyncPipe,

    MatDividerModule,

    AsideComponent,
    AsideButtonComponent,
    CandidateCardComponent,
    H2TitleComponent,
    TitleComponent,
  ],
  templateUrl: './candidates.component.html',
  styleUrl: './candidates.component.css',
})
export class CandidatesComponent implements OnInit {
  candidates$!: Observable<Candidate[]>;

  constructor(public candidatesService: CandidatesService) {}

  ngOnInit() {
    this.candidates$ = this.candidatesService.getCandidates();
  }
}
