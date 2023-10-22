import { Pipe, PipeTransform } from '@angular/core';
import { Sneaker } from '../models/sneaker';

@Pipe({
  name: 'conditionTitle'
})
export class ConditionTitlePipe implements PipeTransform {

  transform(sneakers: Sneaker[], conditionTitle: string): Sneaker[] {
    if (conditionTitle === 'all') {
      return sneakers;
    }
    let filteredSneakers = [];
    for (let sneaker of sneakers) {
      if (sneaker.condition.title === conditionTitle) {
        filteredSneakers.push(sneaker);
      }
    }
    return filteredSneakers;
  }

}
