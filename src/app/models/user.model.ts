interface IUser {
  _id: string;
  email: string;
  password: string;
}

export class User implements IUser {
  _id: string;
  email: string;
  password: string;

  constructor(user: IUser) {
    this._id = user._id;
    this.email = user.email;
    this.password = user.password;
  }
}
