export class Sneaker {
  id: number;
  collection: string;
  name: string;
  size: number;
  retailPrice: number;
  releaseDate: string;
  acquisitionDate: string;
  colorway: string;
  box: boolean;
  imageURL: string;

  constructor(
    id: number = 0,
    collection: string = '',
    name: string = '',
    size: number = 0,
    retailPrice = 0,
    releaseDate = '',
    acquisitionDate = '',
    colorway = '',
    box = false,
    imageURL = ''
  ){
    this.id = id;
    this.collection = collection;
    this.name = name;
    this.size = size;
    this.retailPrice = retailPrice;
    this.releaseDate = releaseDate;
    this.acquisitionDate = acquisitionDate;
    this.colorway = colorway;
    this.box = box;
    this.imageURL = imageURL;
  }
}
