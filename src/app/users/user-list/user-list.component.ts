import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'
import {Observable} from "rxjs"
import { User } from '../shared/user.model';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userService:UserService) { }
  Userslist:User[];
  SearchText : string;

  ShowForEdit(user: User)
{
  this.userService.selectedUser=Object.assign({},user);
}

  ngOnInit() {

   this.userService.getUsers();
   console.log("users are: " +this.userService.users); 
    // this.userService.getUser()
    // .subscribe(data=> this.Userslist=data);    
  }
  DeleteUser(user: User)
  {
   this.userService.DeleteUser(user.User_ID)
   .subscribe(data=>
    this.userService.getUser().subscribe(users=>this.Userslist=users));
  }

}
