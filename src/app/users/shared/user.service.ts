import { Injectable } from '@angular/core';
import{User} from './user.model'
import {Http,RequestOptions,Response,Headers,RequestMethod} from '@angular/http'
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs"
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
selectedUser: User;
users: User[];
baseURL:string= environment.baseUrl;
userlist:Observable<any>;
  constructor(private http:HttpClient) 
  { }

  postUser(user:User){
    console.log(user);
    user.User_ID=1;
   // var body= Jsonp.() 
 return this.http.post(this.baseURL+'/Users',user);
  }
  getUser() :Observable<any>
  {
   return this.http.get(this.baseURL+'/Users');    
  }

  getUsers() 
  {
   return this.http.get<User[]>(this.baseURL+'/Users')
   .subscribe(data=>this.users=data);   
  }

  PutUser(user_ID,user:User)
  {
  return this.http.put(this.baseURL+'/Users/'+user_ID,user);
  }
  
  DeleteUser(User_ID:number)
  {
    // console.log(User_ID);
     console.log('http://localhost:61035/api/Users/'+User_ID);
   return  this.http.delete(this.baseURL+'/Users/?id='+User_ID)    
  }
}
