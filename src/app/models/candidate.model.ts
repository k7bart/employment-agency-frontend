export interface ICandidate {
  id: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  address: {
    flag: string;
    country: string;
    city: string;
  };
  qualification: string;
  area: string;
  salary: number;
}

export class Candidate implements ICandidate {
  id: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  firstAndLastName: string;
  address: {
    flag: string;
    country: string;
    countryWithFlag: string;
    city: string;
  };
  qualification: string;
  area: string;
  salary: number;

  constructor(candidate: ICandidate) {
    this.id = candidate.id;
    this.firstName = candidate.firstName;
    this.lastName = candidate.lastName;
    this.patronymic = candidate.patronymic;
    this.firstAndLastName = `${candidate.firstName} ${candidate.lastName}`;
    this.address = {
      flag: candidate.address.flag,
      country: candidate.address.country,
      countryWithFlag: `${candidate.address.flag} ${candidate.address.country}`,
      city: candidate.address.city,
    };
    this.qualification = candidate.qualification;
    this.area = candidate.area;
    this.salary = candidate.salary;
  }
}
