import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

import { Candidate } from '../models/candidate.model';

@Injectable({ providedIn: 'root' })
export class CandidatesService {
  constructor(private http: HttpClient) {}

  getCandidates() {
    return this.http.get<Candidate[]>('http://localhost:8080/candidates');
  }

  getCandidateById(id: Candidate['_id']) {
    return this.http.get<Candidate>(
      `http://localhost:8080/candidates/candidate/${id}`
    );
  }

  getSuitableCandidates(
    areaId: string,
    country: string,
    city: string,
    minSalary?: number | undefined,
    maxSalary?: number | undefined
  ) {
    let params = new HttpParams()
      .set('areaId', areaId)
      .set('country', country)
      .set('city', city);

    if (minSalary) {
      params = params.set('minSalary', minSalary);
    }

    if (maxSalary) {
      params = params.set('maxSalary', maxSalary);
    }

    return this.http.get<Candidate[]>(
      'http://localhost:8080/candidates/suitable',
      { params }
    );
  }

  addCandidate(candidate: Candidate) {
    return this.http.post<Candidate>(
      'http://localhost:8080/candidates',
      candidate
    );
  }
}
