import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conditionTitle'
})
export class ConditionTitlePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
