import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/projects/shared/project.service';
import { DatePipe } from '@angular/common/src/pipes';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { SearchUserService } from 'src/app/search-user/search-user.service';
import { User } from 'src/app/users/shared/user.model';
import { UserService } from 'src/app/users/shared/user.service';
import { map } from 'rxjs/internal/operators/map';
import { UserSearch } from 'src/app/projects/shared/user-search.model';
import { DatePicker } from 'angular2-datetimepicker';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService:ProjectService
     ) {
       //place this in your constructor
  // DatePicker.prototype.ngOnInit = function() {
  // this.settings = Object.assign(this.defaultSettings, this.settings);
  // if (this.settings.defaultOpen) {
  // this.popover = true;
  // }
  // this.date = new Date();
  // }; 
  
     }


  ngOnInit() {
    this.resetForm();
   this.projectService.getUsers();
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
     
     var startdatevalue= this.projectService.selectedproject.StartDate;
     var enddatevalue= this.projectService.selectedproject.EndDate;
     form.value.StartDate=startdatevalue;
     form.value.EndDate=enddatevalue;
      console.log("date value"+  form.value.ManagerName);  
    this.projectService.postProject(form.value).subscribe(data=>
    {
      this.resetForm(form),
      this.projectService.getProjects() 
      alert("Project added successfully")               
    })
  }
  else{
    console.log("put method called");
    var startdatevalue= this.projectService.selectedproject.StartDate;
     var enddatevalue= this.projectService.selectedproject.EndDate;
     form.value.StartDate=startdatevalue;
     form.value.EndDate=enddatevalue;
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
