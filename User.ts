import { faker } from "@faker-js/faker";

export class User {
  firstName: string;
  lastName: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
