export interface ICandidate {
  _id: string;
  firstName: string;
  lastName: string;
  patronymic?: string;
  area: string;
  qualification: string;
  salary: number;
  phone: string;
  location: {
    country: string;
    flag: string;
    city: string;
  };
}

export class Candidate implements ICandidate {
  _id: string;
  firstName: string;
  lastName: string;
  patronymic?: string;
  area: string;
  qualification: string;
  salary: number;
  phone: string;
  location: {
    country: string;
    flag: string;
    city: string;
  };

  constructor(candidate: ICandidate) {
    this._id = candidate._id;
    this.firstName = candidate.firstName;
    this.lastName = candidate.lastName;
    this.patronymic = candidate.patronymic;
    this.area = candidate.area;
    this.qualification = candidate.qualification;
    this.salary = candidate.salary;
    this.phone = candidate.phone;
    this.location = {
      country: candidate.location.country,
      flag: candidate.location.flag,
      city: candidate.location.city,
    };
  }
}
