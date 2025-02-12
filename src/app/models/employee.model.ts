export interface IEmployee {
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

export class Employee implements IEmployee {
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

  constructor(employee: IEmployee) {
    this.id = employee.id;
    this.firstName = employee.firstName;
    this.lastName = employee.lastName;
    this.patronymic = employee.patronymic;
    this.firstAndLastName = `${employee.firstName} ${employee.lastName}`;
    this.address = {
      flag: employee.address.flag,
      country: employee.address.country,
      countryWithFlag: `${employee.address.flag} ${employee.address.country}`,
      city: employee.address.city,
    };
    this.qualification = employee.qualification;
    this.area = employee.area;
    this.salary = employee.salary;
  }
}
