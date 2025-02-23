import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { H2TitleComponent } from '../../ui/h2-title/h2-title.component';
import { SubmitButtonComponent } from '../../ui/submit-button/submit-button.component';

import { Candidate } from '../../../models/candidate.model';
import { AreasService } from '../../../services/areas.service';
import { CandidatesService } from '../../../services/candidates.service';

import { getFlag } from '../../../utils';

@Component({
  selector: 'app-candidate-form',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    H2TitleComponent,
    SubmitButtonComponent,
  ],
  templateUrl: './candidate-form.component.html',
  styleUrl: './candidate-form.component.css',
})
export class CandidateFormComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private areasService = inject(AreasService);
  private candidatesService = inject(CandidatesService);

  areas$ = this.areasService.getAreas();

  readonly candidateForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    patronymic: ['', [Validators.minLength(1)]],
    area: ['', [Validators.required]],
    qualification: ['', [Validators.required]],
    salary: [undefined, [Validators.required, Validators.min(0)]],
    phone: ['', [Validators.required]],
    country: ['', [Validators.required]],
    city: ['', [Validators.required]],
  });

  onSubmit(): void {
    if (this.candidateForm.invalid) return;

    const {
      firstName,
      lastName,
      patronymic,
      area,
      qualification,
      salary,
      phone,
      country,
      city,
    } = this.candidateForm.value;

    const location = {
      country: country!,
      flag: getFlag(country!),
      city: city!,
    };

    const candidate = {
      firstName: firstName!,
      lastName: lastName!,
      patronymic: patronymic || undefined,
      area: area!,
      qualification: qualification!,
      salary: salary ?? 0,
      phone: phone!,
      location,
    };

    this.candidatesService
      .addCandidate(candidate)
      .subscribe(({ _id }: Candidate) =>
        this.router.navigate([`/candidates/candidate/${_id}`]),
      );
  }
}
