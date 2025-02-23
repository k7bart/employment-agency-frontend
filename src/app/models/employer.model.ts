interface IEmployer {
  _id: string;
  name: string;
  address: {
    country: string;
    flag: string;
    region?: string | undefined;
    city: string;
    street: string;
    office?: string | undefined;
  };
}

export class Employer implements IEmployer {
  _id: string;
  name: string;
  address: {
    country: string;
    flag: string;
    region?: string | undefined;
    city: string;
    street: string;
    office?: string | undefined;
  };

  constructor(employer: IEmployer) {
    this._id = employer._id;
    this.name = employer.name;
    this.address = {
      country: employer.address.country,
      flag: employer.address.flag,
      region: employer.address.region,
      city: employer.address.city,
      street: employer.address.street,
      office: employer.address.office,
    };
  }
}
