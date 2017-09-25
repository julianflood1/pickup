import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "playsSort",
  pure: false
})


export class PlaysSortPipe implements PipeTransform {


  transform(array: Array<number>, args: any): Array<any> {

    if(!array || array === undefined || array.length === 0) return null;
    console.log(array)
      array.sort((a: any, b: any) => {
        if (a.alberta < b.alberta) {
          console.log(a.alberta)
          console.log(b.alberta)
          return 1;
        } else if (a.alberta > b.alberta) {
          console.log(a.alberta)
          console.log(b.alberta)
          return  -1;
        } else {
          console.log(a.alberta)
          console.log(b.alberta)
          return 0;
        }
      });
      console.log(array)
      return array;
    }

  }
