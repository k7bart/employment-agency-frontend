import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Agreement } from '../models/agreement.model';

@Injectable({ providedIn: 'root' })
export class AgreementsService {
  constructor(private http: HttpClient) {}

  getAgreements() {
    return this.http.get<Agreement[]>('http://localhost:8080/agreements');
  }

  getAgreementById(id: Agreement['_id']) {
    return this.http.get<Agreement>(`http://localhost:8080/agreements/${id}`);
  }

  addAgreement(agreement: Agreement) {
    return this.http.post<Agreement>('http://localhost:8080/agreements', agreement);
  }
}
