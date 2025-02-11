import { Employee } from './employee.model';
import { Vacancy } from './vacancy.model';

interface IAgreement {
  id: number;
  vacancy: Vacancy;
  employee: Employee;
  commission: number;
}

export class Agreement implements IAgreement {
  id: number;
  vacancy: Vacancy;
  employee: Employee;
  commission: number;

  constructor(agreement: IAgreement) {
    this.id = agreement.id;
    this.vacancy = agreement.vacancy;
    this.employee = agreement.employee;
    this.commission = agreement.commission;
  }
}
