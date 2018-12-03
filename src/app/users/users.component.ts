import { Component, OnInit } from '@angular/core';
import {UserService} from './shared/user.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers:[UserService]
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
