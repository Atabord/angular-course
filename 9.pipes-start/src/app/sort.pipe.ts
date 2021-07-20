import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {

  transform(value: unknown, order: 'ASC' | 'DESC'): unknown {
    if(!Array.isArray(value) || value.length <= 1) {
      return value;
    }
    value.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    if(order === 'DESC') {
      value.reverse();
    }
    return value;
  }

}
