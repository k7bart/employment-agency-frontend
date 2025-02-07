export interface IEmployee {
  id: number;
  firstName: string;
  lastName: string;
  patronymic: string;
  qualification: string;
  area: string;
  salary: number;
}

export class Employee implements IEmployee {
  id: number;
  firstName: string;
  lastName: string;
  patronymic: string;
  qualification: string;
  area: string;
  salary: number;

  constructor(employee: IEmployee) {
    this.id = employee.id;
    this.firstName = employee.firstName;
    this.lastName = employee.lastName;
    this.patronymic = employee.patronymic;
    this.qualification = employee.qualification;
    this.area = employee.area;
    this.salary = employee.salary;
  }
}
