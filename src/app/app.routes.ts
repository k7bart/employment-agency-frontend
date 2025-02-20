import { Routes } from '@angular/router';

import { authGuard } from './components/auth/auth.guard';

import { AgreementPageComponent } from './components/agreements/agreement-page/agreement-page.component';
import { AgreementsComponent } from './components/agreements/agreements.component';
import { CandidatePageComponent } from './components/candidates/candidate-page/candidate-page.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { HomeComponent } from './components/ui/home/home.component';
import { LayoutComponent } from './components/ui/layout/layout.component';
import { LoginComponent } from './components/auth/login/login.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { VacancyPageComponent } from './components/vacancies/vacancy-page/vacancy-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },

      {
        path: '',
        canActivateChild: [authGuard],
        children: [
          { path: 'agreements', component: AgreementsComponent },
          { path: 'agreements/:id', component: AgreementPageComponent },
          { path: 'candidates', component: CandidatesComponent },
          {
            path: 'candidates/candidate/:id',
            component: CandidatePageComponent,
          },
          { path: 'vacancies', component: VacanciesComponent },
          { path: 'vacancies/:id', component: VacancyPageComponent },
        ],
      },
    ],
  },
  { path: 'login', component: LoginComponent },
];
