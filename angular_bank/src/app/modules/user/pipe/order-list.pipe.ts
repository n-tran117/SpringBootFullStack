import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/core/models/User';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value:  Array<any>, args: string | null = null, sort:string = 'asc'): User[] {
    if (args === null) {
      return value
    } else {
      const tmpList = value.sort((a, b) => {
        if (a[args] < b[args]) {
          return -1
        }
        else if (a[args] === b[args]) {
          return 0;
        }
        else if (a[args] > b[args]) {
          return 1;
        }
        return 1
      });
      return (sort === 'asc') ? tmpList : tmpList.reverse()
    }
  }
}
