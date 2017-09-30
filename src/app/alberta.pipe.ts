import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: "AlbertaSort",
  pure: false
})

export class AlbertaSortPipe implements PipeTransform {
  transform(array: Array<number>,  args: any): Array<any> {
    if(!array || array === undefined || array.length === 0) return null;
      array.sort((a: any, b: any) => {
        if (a.alberta < b.alberta) {
          return 1;
        } else if (a.alberta > b.alberta) {
          return  -1;
        } else {
          return 0;
        }
      });
      return array;
    }


    //
    // array.sort((a: any, b: any) => {
    //   if (a.alberta < b.alberta) {
    //     return 1;
    //   } else if (a.alberta > b.alberta) {
    //     return  -1;
    //   } else {
    //     return 0;
    //   }
    // });
    //
    // array.sort((a: any, b: any) => {
    //   if (a.colonelSummers < b.colonelSummers) {
    //     return 1;
    //   } else if (a.colonelSummers > b.colonelSummers) {
    //     return  -1;
    //   } else {
    //     return 0;
    //   }
    // });

    // array.sort((a: any, b: any) => {
    //   if (a.laurelhurst < b.laurelhurst) {
    //     return 1;
    //   } else if (a.laurelhurst > b.laurelhurst) {
    //     return  -1;
    //   } else {
    //     return 0;
    //   }
    // });



  }
