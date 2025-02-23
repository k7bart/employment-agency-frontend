import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Vacancy } from '../models/vacancy.model';
import { Observable } from 'rxjs';
import { Area } from '../models/area.model';

@Injectable({ providedIn: 'root' })
export class VacanciesService {
  private http = inject(HttpClient);

  getSuitableVacancies(
    areaId: Area['_id'],
    country: Vacancy['location']['country'],
    city: Vacancy['location']['city'],
    salary?: Vacancy['minSalary'],
  ) {
    let params = new HttpParams()
      .set('areaId', areaId)
      .set('country', country)
      .set('city', city);

    if (salary) {
      params = params.set('salary', salary);
    }
    return this.http.get<Vacancy[]>(
      'http://localhost:8080/vacancies/suitable',
      { params },
    );
  }

  getVacancies() {
    return this.http.get<Vacancy[]>('http://localhost:8080/vacancies');
  }

  getVacancyById(id: Vacancy['_id']) {
    return this.http.get<Vacancy>(
      `http://localhost:8080/vacancies/vacancy/${id}`,
    );
  }

  getVacanciesByEmployerId(id: Vacancy['_id']) {
    return this.http.get<Vacancy[]>(
      `http://localhost:8080/vacancies/employer/${id}`,
    );
  }

  addVacancy(vacancy: Omit<Vacancy, '_id'>): Observable<Vacancy> {
    return this.http.post<Vacancy>('http://localhost:8080/vacancies', vacancy);
  }
}
