import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { CandidatesService } from '../../services/candidates.service';
import { Employee } from '../../models/employee.model';

import { AsideComponent } from '../ui/aside/aside.component';
import { AsideButtonComponent } from '../ui/aside-button/aside-button.component';
import { CandidateCardComponent } from './candidate-card/candidate-card.component';
import { TitleComponent } from '../ui/title/title.component';

@Component({
  selector: 'app-candidates',
  imports: [
    MatDividerModule,

    AsideComponent,
    AsideButtonComponent,
    CandidateCardComponent,
    TitleComponent,
  ],
  templateUrl: './candidates.component.html',
  styleUrl: './candidates.component.css',
})
export class CandidatesComponent {
  @Input() candidates: Employee[] = [];

  constructor(public candidatesService: CandidatesService) {}

  ngOnInit() {
    this.candidates = this.candidatesService.getCandidates();
  }
}
