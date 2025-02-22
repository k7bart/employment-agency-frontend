import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Agreement } from '../../../models/agreement.model';
import { Candidate } from '../../../models/candidate.model';
import { Vacancy } from '../../../models/vacancy.model';
import { AgreementsService } from '../../../services/agreements.service';
import { CandidatesService } from '../../../services/candidates.service';
import { EmployersService } from '../../../services/employers.service';
import { VacanciesService } from '../../../services/vacancies.service';

import { H2TitleComponent } from '../../ui/h2-title/h2-title.component';
import { SubmitButtonComponent } from '../../ui/submit-button/submit-button.component';

@Component({
  selector: 'app-agreement-form',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    H2TitleComponent,
    SubmitButtonComponent,
  ],
  templateUrl: './agreement-form.component.html',
  styleUrl: './agreement-form.component.css',
})
export class AgreementFormComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private agreementService = inject(AgreementsService);
  private candidatesService = inject(CandidatesService);
  private employersService = inject(EmployersService);
  private vacanciesService = inject(VacanciesService);

  employers$ = this.employersService.getEmployers();
  vacancies$: Observable<Vacancy[]> | undefined;

  constructor() {
    this.agreementForm.get('employer')?.valueChanges.subscribe((employerId) => {
      if (employerId) {
        this.vacancies$ =
          this.vacanciesService.getVacanciesByEmployerId(employerId);

        const vacancyControl = this.agreementForm.get('vacancy');
        vacancyControl?.enable();
      }
    });
  }

  readonly agreementForm = this.fb.group({
    employer: ['', [Validators.required]],
    vacancy: [{ value: '', disabled: true }, [Validators.required]],
    candidateFirstName: ['', [Validators.required]],
    candidateLastName: ['', [Validators.required]],
    commission: [undefined, [Validators.required, Validators.min(0)]],
  });

  onSubmit(): void {
    if (this.agreementForm.invalid) return;

    const { vacancy, candidateFirstName, candidateLastName, commission } =
      this.agreementForm.value;

    if (!vacancy || !candidateFirstName || !candidateLastName || !commission)
      return;

    this.candidatesService
      .getCandidateIdByFirstAndLastName(candidateFirstName, candidateLastName)
      .subscribe(({ _id }: Candidate) =>
        this.agreementService
          .addAgreement(vacancy, _id, commission)
          .subscribe(({ _id }: Agreement) =>
            this.router.navigate([`/agreements/agreement/${_id}`]),
          ),
      );
  }
}
