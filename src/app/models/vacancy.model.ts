import { Area } from './area.model';
import { Employer } from './employer.model';

interface IVacancy {
  _id: string;
  title: string;
  employer: Employer;
  area: Area;
  maxSalary?: number | undefined;
  minSalary?: number | undefined;
  location: { country: string; flag: string; city: string };
}

export class Vacancy implements IVacancy {
  _id: string;
  title: string;
  employer: Employer;
  area: Area;
  maxSalary?: number | undefined;
  minSalary?: number | undefined;
  location: {
    country: string;
    flag: string;
    city: string;
  };

  constructor(vacancy: IVacancy) {
    this._id = vacancy._id;
    this.title = vacancy.title;
    this.employer = vacancy.employer;
    this.area = vacancy.area;
    this.maxSalary = vacancy.maxSalary;
    this.minSalary = vacancy.minSalary;
    this.location = {
      country: vacancy.location.country,
      flag: vacancy.location.flag,
      city: vacancy.location.city,
    };
  }
}
