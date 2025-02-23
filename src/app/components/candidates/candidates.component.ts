import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';

import { CandidatesService } from '../../services/candidates.service';

import { AsideComponent } from '../ui/aside/aside.component';
import { AsideButtonComponent } from '../ui/aside-button/aside-button.component';
import { CandidateCardComponent } from './candidate-card/candidate-card.component';
import { H2TitleComponent } from '../ui/h2-title/h2-title.component';
import { TitleComponent } from '../ui/title/title.component';
import { Router } from '@angular/router';

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
export class CandidatesComponent {
  private router = inject(Router);
  private candidatesService = inject(CandidatesService);

  candidates$ = this.candidatesService.getCandidates();

  goToCandidateForm() {
    this.router.navigate(['/new-candidate']);
  }
}
