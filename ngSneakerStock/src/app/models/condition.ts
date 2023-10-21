import { Sneaker } from "./sneaker";

export class Condition {
  id: number;
  title: string;
  description: string;
  sneakers: Sneaker [];

  constructor(id = 0, title = '', description = '', sneakers = []) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.sneakers = sneakers;
  }
}
