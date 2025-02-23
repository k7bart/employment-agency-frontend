import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employer } from '../models/employer.model';

@Injectable({ providedIn: 'root' })
export class EmployersService {
  private readonly http = inject(HttpClient);

  getEmployers() {
    return this.http.get<Employer[]>('http://localhost:8080/employers');
  }

  getEmployerById(id: Employer['_id']) {
    return this.http.get<Employer>(`http://localhost:8080/employers/${id}`);
  }

  addEmployer(employer: Employer) {
    return this.http.post<Employer>(
      'http://localhost:8080/agreements',
      employer,
    );
  }
}
