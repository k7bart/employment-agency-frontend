interface IVacancy {
  id: number;
  maxSalary?: number | undefined;
  minSalary?: number | undefined;
  tag: string;
  title: string;
}

export class Vacancy implements IVacancy {
  id: number;
  maxSalary?: number | undefined;
  minSalary?: number | undefined;
  tag: string;
  title: string;

  constructor(vacancy: IVacancy) {
    this.id = vacancy.id;
    this.maxSalary = vacancy.maxSalary;
    this.minSalary = vacancy.minSalary;
    this.tag = vacancy.tag;
    this.title = vacancy.title;
  }
}
