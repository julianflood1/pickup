import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: "LaurelhurstSort",
  pure: false
})

export class LaurelhurstSortPipe implements PipeTransform {
  transform(array: Array<number>,  args: any): Array<any> {
    if(!array || array === undefined || array.length === 0) return null;
      array.sort((a: any, b: any) => {
        if (a.laurelhurst < b.laurelhurst) {
          return 1;
        } else if (a.laurelhurst > b.laurelhurst) {
          return  -1;
        } else {
          return 0;
        }
      });
      if(array.length > 5) {
        array.pop();
      }
      return array;
    }
  }
