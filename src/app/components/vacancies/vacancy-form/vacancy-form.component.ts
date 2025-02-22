import { Component, inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { Area } from '../../../models/area.model';
import { Employer } from '../../../models/employer.model';
import { Vacancy } from '../../../models/vacancy.model';
import { AreasService } from '../../../services/areas.service';
import { EmployersService } from '../../../services/employers.service';
import { VacanciesService } from '../../../services/vacancies.service';

import { H2TitleComponent } from '../../ui/h2-title/h2-title.component';
import { SubmitButtonComponent } from '../../ui/submit-button/submit-button.component';

import { getFlag } from '../../../utils';

@Component({
  selector: 'vacancy-form',
  imports: [ReactiveFormsModule, H2TitleComponent, SubmitButtonComponent],
  templateUrl: './vacancy-form.component.html',
  styleUrl: './vacancy-form.component.css',
})
export class VacancyFormComponent implements OnDestroy {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private vacanciesService = inject(VacanciesService);

  private areasService = inject(AreasService);
  private areasSubscription = this.areasService
    .getAreas()
    .subscribe((areas) => {
      this.areas = areas;
    });

  private employersService = inject(EmployersService);
  private employersSubscription = this.employersService
    .getEmployers()
    .subscribe((employers) => {
      this.employers = employers;
    });

  areas: Area[] = [];
  employers: Employer[] = [];

  getAreaId(areaName: string): string | null {
    const foundArea = this.areas.find((a) => a.name === areaName);
    return foundArea ? foundArea._id : null;
  }
  getEmployerId(employerName: string): string | null {
    const foundEmployer = this.employers.find((e) => e.name === employerName);
    return foundEmployer ? foundEmployer._id : null;
  }

  readonly vacancyForm: FormGroup = this.fb.group(
    {
      title: ['', [Validators.required]],
      employer: ['', [Validators.required]],
      area: ['', [Validators.required]],
      maxSalary: [''],
      minSalary: [''],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
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

    const { area, employer, country, city, ...rest } = this.vacancyForm.value;
    const location = country && {
      country,
      flag: getFlag(country),
      ...(city && { city }),
    };

    this.vacanciesService
      .addVacancy({
        ...rest,
        area: this.getAreaId(area),
        employer: this.getEmployerId(employer),
        location,
      })
      .subscribe(({ _id }: Vacancy) =>
        this.router.navigate([`/vacancies/vacancy/${_id}`]),
      );
  }

  ngOnDestroy(): void {
    this.areasSubscription.unsubscribe();
    this.employersSubscription.unsubscribe();
  }
}
