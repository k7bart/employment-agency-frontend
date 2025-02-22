import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

import { Area } from '../models/area.model';
import { Candidate } from '../models/candidate.model';
import { Vacancy } from '../models/vacancy.model';

@Injectable({ providedIn: 'root' })
export class CandidatesService {
  private http = inject(HttpClient);

  getCandidates() {
    return this.http.get<Candidate[]>('http://localhost:8080/candidates');
  }

  getCandidateById(id: Candidate['_id']) {
    return this.http.get<Candidate>(
      `http://localhost:8080/candidates/candidate/${id}`,
    );
  }

  getCandidateIdByFirstAndLastName(
    firstName: Candidate['firstName'],
    lastName: Candidate['lastName'],
  ) {
    const params = new HttpParams()
      .set('firstName', firstName)
      .set('lastName', lastName);
    return this.http.get<Candidate>(
      'http://localhost:8080/candidates//search/name',
      { params },
    );
  }

  getSuitableCandidates(
    areaId: Area['_id'],
    country?: Vacancy['location']['country'],
    city?: Vacancy['location']['city'],
    minSalary?: Vacancy['minSalary'],
    maxSalary?: Vacancy['maxSalary'],
  ) {
    let params = new HttpParams().set('areaId', areaId);

    if (country) {
      params = params.set('country', country);
    }

    if (city) {
      params = params.set('city', city);
    }

    if (minSalary) {
      params = params.set('minSalary', minSalary);
    }

    if (maxSalary) {
      params = params.set('maxSalary', maxSalary);
    }

    return this.http.get<Candidate[]>(
      'http://localhost:8080/candidates/suitable',
      { params },
    );
  }

  addCandidate(candidate: Candidate) {
    return this.http.post<Candidate>(
      'http://localhost:8080/candidates',
      candidate,
    );
  }
}
