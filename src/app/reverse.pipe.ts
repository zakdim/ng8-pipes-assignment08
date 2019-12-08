import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value instanceof Array) {
      return value.reverse();
    } else if (typeof value === 'string') {
      return value.split('').reverse().join('');
    } else {
      return value;
    }
  }

}
