import {PipeTransform,Pipe} from'@angular/core'
import { User } from './shared/user.model';
import {filter} from 'rxjs/operators'
import { Observable } from 'rxjs/internal/Observable';

@Pipe({
    name:'userFilter'
})

export class UserFilterPipe implements  PipeTransform
{
    transform(users:Observable<User>,searchText:string )
    
    {
if(!users || !searchText)
return users;

return users.pipe(
    filter(user=>user.FirstName.toLowerCase()
    .indexOf(searchText.toLowerCase())==-1)       
);
    }


}