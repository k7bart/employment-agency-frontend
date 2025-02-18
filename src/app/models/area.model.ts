interface IArea {
  _id: string;
  name: string;
}

export class Area implements IArea {
  _id: string;
  name: string;

  constructor(area: IArea) {
    this._id = area._id;
    this.name = area.name;
  }
}
