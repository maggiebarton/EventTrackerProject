import { Sneaker } from "./sneaker";

export class Brand {
  id: number;
  name: string;
  description: string;
  sneakers: Sneaker[];

  constructor(id = 0, name = '', description = '', sneakers = []) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.sneakers = sneakers;
  }
}
