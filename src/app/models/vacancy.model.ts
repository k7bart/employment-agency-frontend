interface IVacancy {
  id: number;
  location: { flag: string; country: string; city: string };
  maxSalary?: number | undefined;
  minSalary?: number | undefined;
  employer: string;
  area: string;
  title: string;
}

export class Vacancy implements IVacancy {
  id: number;
  location: {
    flag: string;
    country: string;
    countryWithFlag: string;
    city: string;
  };
  maxSalary?: number | undefined;
  minSalary?: number | undefined;
  employer: string;
  area: string;
  title: string;

  constructor(vacancy: IVacancy) {
    this.id = vacancy.id;
    this.location = {
      flag: vacancy.location.flag,
      country: vacancy.location.country,
      countryWithFlag: `${vacancy.location.flag} ${vacancy.location.country}`,
      city: vacancy.location.city,
    };
    this.maxSalary = vacancy.maxSalary;
    this.minSalary = vacancy.minSalary;
    this.employer = vacancy.employer;
    this.area = vacancy.area;
    this.title = vacancy.title;
  }
}
