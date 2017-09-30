import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: "IrvingSort",
  pure: false
})

export class IrvingSortPipe implements PipeTransform {
  transform(array: Array<number>,  args: any): Array<any> {
    if(!array || array === undefined || array.length === 0) return null;
      array.sort((a: any, b: any) => {
        if (a.irving < b.irving) {
          return 1;
        } else if (a.irving > b.irving) {
          return  -1;
        } else {
          return 0;
        }
      });
      return array;
    }
}
