import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/projects/shared/project.service';
import { DatePipe } from '@angular/common/src/pipes';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { SearchUserService } from 'src/app/search-user/search-user.service';
import { User } from 'src/app/users/shared/user.model';
import { UserService } from 'src/app/users/shared/user.service';
import { map } from 'rxjs/internal/operators/map';
import { UserSearch } from 'src/app/projects/shared/user-search.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService:ProjectService
     ) { }


  ngOnInit() {
    this.resetForm();
    console.log(this.projectService.getUsers());
    this.projectService.getProjects();
    
  }
  resetForm(form? :NgForm){
    if(form!=null)
form.reset();
this.projectService.selectedproject={
  ProjectName:'',
  ManagerId:null,
  Project_ID:null,
  StartDate:null,
  EndDate:null,
  Priority:null,
  ManagerName:'',
  STATUS:''
};

  }
  selectUserToManager(user:UserSearch){
    this.projectService.selectedproject.ManagerId=user.User_ID;
    this.projectService.selectedproject.ManagerName=user.FirstName+' '+user.LastName;
    var closeButton =document.getElementById('closeButton');
    closeButton.click();
    //alert("User Selected successfully");
  }

  onSubmit(form:NgForm){
   
    if(form.value.Project_ID==null)
    {
      console.log("post method called");
  // var body=data as (form.value.json)
    this.projectService.postProject(form.value).subscribe(data=>
    {
      this.resetForm(form),
      this.projectService.getProjects() 
      alert("Project added successfully")               
    })
  }
  else{
    console.log("put method called");
    this.projectService.putProjects(form.value.Project_ID,form.value)
    .subscribe(data=>
    {
      this.resetForm(form);
      this.projectService.getProjects();
    })
  }
  }

  toggleEditable(event)
  {
    var startdate=<HTMLInputElement>document.getElementById('startDateTxtBox');
    var enddate=<HTMLInputElement>document.getElementById('endDateTxtBox');

  if(event.target.checked)
  {    
    startdate.disabled=false;
    enddate.disabled=false;
  }
  else{
    startdate.disabled=true;
    enddate.disabled=true;
  }
  }

}
