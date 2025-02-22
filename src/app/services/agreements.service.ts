import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Agreement } from '../models/agreement.model';
import { Candidate } from '../models/candidate.model';
import { Vacancy } from '../models/vacancy.model';

@Injectable({ providedIn: 'root' })
export class AgreementsService {
  private http = inject(HttpClient);

  getAgreements() {
    return this.http.get<Agreement[]>('http://localhost:8080/agreements');
  }

  getAgreementById(id: Agreement['_id']) {
    return this.http.get<Agreement>(`http://localhost:8080/agreements/${id}`);
  }

  addAgreement(
    vacancyId: Vacancy['_id'],
    candidateId: Candidate['_id'],
    commission: number,
  ) {
    return this.http.post<Agreement>('http://localhost:8080/agreements', {
      vacancy: vacancyId,
      candidate: candidateId,
      commission,
    });
  }
}
