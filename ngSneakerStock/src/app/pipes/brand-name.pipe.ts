import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';
import { Sneaker } from '../models/sneaker';

@Pipe({
  name: 'brandName',
})
export class BrandNamePipe implements PipeTransform {
  transform(sneakers: Sneaker[], brandName: string): Sneaker[] {
    if (brandName === 'all') {
      return sneakers;
    }
    let filteredSneakers = [];
    for (let sneaker of sneakers) {
      if(sneaker.brand.name === brandName){
        filteredSneakers.push(sneaker);
      }
    }
    return filteredSneakers;
  }
}
