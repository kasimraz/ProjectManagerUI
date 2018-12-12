import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/users/shared/user.model';
import {filter} from 'rxjs/operators'

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(users: User[], searchText?: any): any {
    console.log(users)
    if(!users || !searchText)
return users;
// return users.pipe(
//     filter(user=>user.FirstName.toLowerCase()
//     .indexOf(searchText.toLowerCase())==-1)       
// );
 console.log(users.filter(x=>x.FirstName.includes(searchText)));
return users.filter(x=>x.FirstName.includes(searchText));
  }

}
