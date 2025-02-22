import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { Vacancy } from '../../../models/vacancy.model';
import { AreasService } from '../../../services/areas.service';
import { EmployersService } from '../../../services/employers.service';
import { VacanciesService } from '../../../services/vacancies.service';

import { H2TitleComponent } from '../../ui/h2-title/h2-title.component';
import { SubmitButtonComponent } from '../../ui/submit-button/submit-button.component';

import { getFlag } from '../../../utils';

@Component({
  selector: 'vacancy-form',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    H2TitleComponent,
    SubmitButtonComponent,
  ],
  templateUrl: './vacancy-form.component.html',
  styleUrl: './vacancy-form.component.css',
})
export class VacancyFormComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private vacanciesService = inject(VacanciesService);
  private areasService = inject(AreasService);
  private employersService = inject(EmployersService);

  areas$ = this.areasService.getAreas();
  employers$ = this.employersService.getEmployers();

  readonly vacancyForm: FormGroup = this.fb.group(
    {
      title: ['', [Validators.required]],
      employer: ['', [Validators.required]],
      area: ['', [Validators.required]],
      maxSalary: [''],
      minSalary: [''],
      country: [''],
      city: [''],
    },
    {
      validators: this.minSalaryGreaterThanMaxSalary,
    },
  );

  minSalaryGreaterThanMaxSalary(
    control: AbstractControl,
  ): ValidationErrors | null {
    const { minSalary, maxSalary } = control.value;
    return minSalary && maxSalary && minSalary > maxSalary
      ? { minSalaryGreaterThanMaxSalary: true }
      : null;
  }

  onSubmit(): void {
    if (this.vacancyForm.invalid) return;

    const { title, employer, area, maxSalary, minSalary, country, city } =
      this.vacancyForm.value;

    const location = country && {
      country,
      flag: getFlag(country),
      ...(city && { city }),
    };

    this.vacanciesService
      .addVacancy({
        title,
        employer,
        area,
        ...(minSalary && { minSalary }),
        ...(maxSalary && { maxSalary }),
        location,
      })
      .subscribe(({ _id }: Vacancy) =>
        this.router.navigate([`/vacancies/vacancy/${_id}`]),
      );
  }
}
