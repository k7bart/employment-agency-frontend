import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Candidate } from '../models/candidate.model';

@Injectable({ providedIn: 'root' })
export class CandidatesService {
  constructor(private http: HttpClient) {}

  getCandidates() {
    return this.http.get<Candidate[]>('http://localhost:8080/candidates');
  }

  getCandidateById(id: Candidate['_id']) {
    return this.http.get<Candidate>(`http://localhost:8080/candidates/${id}`);
  }

  addCandidate(candidate: Candidate) {
    return this.http.post<Candidate>('http://localhost:8080/candidates', candidate);
  }
}
