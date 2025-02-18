import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Vacancy } from '../models/vacancy.model';

@Injectable({ providedIn: 'root' })
export class VacanciesService {
  constructor(private http: HttpClient) {}

  getVacancies() {
    return this.http.get<Vacancy[]>('http://localhost:8080/vacancies');
  }

  getVacancyById(id: Vacancy['_id']) {
    return this.http.get<Vacancy>(`http://localhost:8080/vacancies/${id}`);
  }

  getVacanciesByEmployerId(id: Vacancy['_id']) {
    return this.http.get<Vacancy[]>(
      `http://localhost:8080/vacancies/employer/${id}`
    );
  }

  addVacancy(vacancy: Vacancy) {
    return this.http.post<Vacancy>('http://localhost:8080/vacancies', vacancy);
  }
}
