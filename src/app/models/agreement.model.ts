import { Candidate } from './candidate.model';
import { Vacancy } from './vacancy.model';

interface IAgreement {
  id: string;
  vacancy: Vacancy;
  candidate: Candidate;
  commission: number;
}

export class Agreement implements IAgreement {
  id: string;
  vacancy: Vacancy;
  candidate: Candidate;
  commission: number;

  constructor(agreement: IAgreement) {
    this.id = agreement.id;
    this.vacancy = agreement.vacancy;
    this.candidate = agreement.candidate;
    this.commission = agreement.commission;
  }
}
