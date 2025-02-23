import { Routes } from '@angular/router';

import { authGuard } from './components/auth/auth.guard';

import { AgreementFormComponent } from './components/agreements/agreement-form/agreement-form.component';
import { AgreementPageComponent } from './components/agreements/agreement-page/agreement-page.component';
import { AgreementsComponent } from './components/agreements/agreements.component';
import { CandidateFormComponent } from './components/candidates/candidate-form/candidate-form.component';
import { CandidatePageComponent } from './components/candidates/candidate-page/candidate-page.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { HomeComponent } from './components/ui/home/home.component';
import { LayoutComponent } from './components/ui/layout/layout.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { VacancyPageComponent } from './components/vacancies/vacancy-page/vacancy-page.component';
import { VacancyFormComponent } from './components/vacancies/vacancy-form/vacancy-form.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },

      {
        path: '',
        canActivateChild: [authGuard],
        children: [
          { path: 'agreements', component: AgreementsComponent },
          {
            path: 'agreements/agreement/:id',
            component: AgreementPageComponent,
          },
          { path: 'candidates', component: CandidatesComponent },
          {
            path: 'candidates/candidate/:id',
            component: CandidatePageComponent,
          },
          {
            path: 'new-agreement',
            component: AgreementFormComponent,
          },
          { path: 'new-candidate', component: CandidateFormComponent },
          { path: 'new-vacancy', component: VacancyFormComponent },
          { path: 'vacancies', component: VacanciesComponent },
          { path: 'vacancies/vacancy/:id', component: VacancyPageComponent },
        ],
      },
    ],
  },
];
