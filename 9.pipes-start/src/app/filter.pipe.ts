import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {

  transform(value: unknown, filterString: string, propName: string): unknown {
    if(!Array.isArray(value) || value.length === 0 || !filterString) {
      return value;
    }
    const resultArray = [];
    for(const item of value) {
      if(item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
