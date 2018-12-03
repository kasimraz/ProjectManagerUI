import { Component, OnInit } from '@angular/core';
import { SearchUserService } from 'src/app/search-user/search-user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  constructor(private searchUserService: SearchUserService) { }

  ngOnInit() {
    this.searchUserService.getUsers();
    console.log(this.searchUserService.users);
  }

}
