import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/projects/shared/project.service';
import { DatePipe } from '@angular/common/src/pipes';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { SearchUserService } from 'src/app/search-user/search-user.service';
import { User } from 'src/app/users/shared/user.model';
import { UserService } from 'src/app/users/shared/user.service';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService:ProjectService,
     private userService:UserService) { }

users: User[];
  ngOnInit() {
    this.resetForm();
this.userService.getUser().subscribe(data=>this.users=data
);
console.log(this.users);    
    
  }
  resetForm(form? :NgForm){
    if(form!=null)
form.reset();
this.projectService.selectedproject={
  Project:'',
  User_ID:null,
  Project_ID:null,
  Start_Date:null,
  End_Date:new Date(),
  Priority:null,
  User_Name:'',
  STATUS:''
};
console.log(this.projectService.selectedproject);
  }
  onSubmit(form:NgForm)
  {
  
  }

}
