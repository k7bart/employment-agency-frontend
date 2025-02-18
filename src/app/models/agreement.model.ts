import { Candidate } from './candidate.model';
import { Vacancy } from './vacancy.model';

interface IAgreement {
  _id: string;
  vacancy: Vacancy;
  candidate: Candidate;
  commission: number;
}

export class Agreement implements IAgreement {
  _id: string;
  vacancy: Vacancy;
  candidate: Candidate;
  commission: number;

  constructor(agreement: IAgreement) {
    this._id = agreement._id;
    this.vacancy = agreement.vacancy;
    this.candidate = agreement.candidate;
    this.commission = agreement.commission;
  }
}
