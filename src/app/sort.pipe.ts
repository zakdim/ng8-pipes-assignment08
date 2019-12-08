import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any[], propName: string): any {
    if (!value || value.length === 0 || !propName) {
      return value;
    }
    return value.sort((a, b) => {
      // return (a[propName] as String).localeCompare(b[propName]);
      return a[propName] < b[propName] ? -1 : (a[propName] > b[propName] ? 1 : 0);
    });
  }

}
