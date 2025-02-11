import { Routes } from '@angular/router';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';

export const routes: Routes = [
  { path: 'vacancies', component: VacanciesComponent },
  { path: 'candidates', component: CandidatesComponent },
];
