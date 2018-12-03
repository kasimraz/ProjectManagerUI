import { Injectable } from '@angular/core';
import{User} from './user.model'
import {Http,RequestOptions,Response,Headers,RequestMethod} from '@angular/http'
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs"


@Injectable({
  providedIn: 'root'
})
export class UserService {
selectedUser: User;
users: User[];
userlist:Observable<any>;
  constructor(private http:HttpClient) 
  { }

  postUser(user:User){
    console.log(user);
    user.User_ID=1;
   // var body= Jsonp.() 
 return this.http.post('http://localhost:61035/api/Users',user);
  }
  getUser() :Observable<any>
  {
   return this.http.get('http://localhost:61035/api/Users');    
  }

  getUsers() 
  {
   return this.http.get<User[]>('http://localhost:61035/api/Users')
   .subscribe(data=>this.users=data);   
  }

  PutUser(user_ID,user:User)
  {
  return this.http.put('http://localhost:61035/api/Users/'+user_ID,user);
  }
  
  DeleteUser(User_ID:number)
  {
    // console.log(User_ID);
     console.log('http://localhost:61035/api/Users/'+User_ID);
   return  this.http.delete('http://localhost:61035/api/Users/?id='+User_ID)    
  }
}
