import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from 'src/app/users/shared/user.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {
users:User[];

  constructor(private httpClient:HttpClient) { }

  getUsers() 
  {
    this.httpClient.get<User[]>('http://localhost:61035/api/Users')
   .subscribe(data=>this.users=data);
   console.log(this.users);
   return this.httpClient.get<User[]>('http://localhost:61035/api/Users')
   .subscribe(data=>this.users=data);   
  }

}
