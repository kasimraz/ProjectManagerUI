import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/users/shared/user.model';
import {filter} from 'rxjs/operators'
import { Injectable } from '@angular/core';

@Pipe({
  name: 'userFilter'
})

@Injectable()
export class UserFilterPipe implements PipeTransform {

  transform(users: any[], field:string, value:string): any[] {
    console.log(users)
    if(!users || !value)
return users;
 
return users.filter(x=>x.FirstName.toLowerCase().includes(value.toLowerCase()));
  }

}
