import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { UserService } from '../shared/user.service'
import {Observable} from "rxjs"
import { User } from '../shared/user.model';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(public userService:UserService) { }
  Userslist:User[];
  SearchText : string;

  @Output() changeBtnText:EventEmitter<string> =new EventEmitter<string>();

  ShowForEdit(user: User)
{
  this.userService.selectedUser=Object.assign({},user);
  this.changeBtnText.emit('Update');
}

  ngOnInit() {

   this.userService.getUsers();   
    // this.userService.getUser()
    // .subscribe(data=> this.Userslist=data);    
  }
  DeleteUser(user: User)
  {
   this.userService.DeleteUser(user.User_ID)
   .subscribe(data=>
    this.userService.getUser().subscribe(users=>this.userService.users=users));
  }

}
