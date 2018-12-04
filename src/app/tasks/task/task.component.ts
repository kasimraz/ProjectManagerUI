import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/tasks/Shared/tasks.service';
import { Task } from 'src/app/tasks/Shared/task';
import {DatePipe} from '@angular/common'
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { UserSearch } from 'src/app/projects/shared/user-search.model';
import { SearchUser } from 'src/app/tasks/Shared/SearchUser';
import { ProjectSearch } from 'src/app/tasks/Shared/project-search.model';

@Component({
  selector: 'add-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
CurrentDate:Date=new Date();
userslist:SearchUser[];
  constructor(private taskService :TasksService) { }

  ngOnInit() {

   this.taskService.getUsers()
   .subscribe(data=>this.userslist=data);
   this.taskService.getProjects();
this.resetForm();
    this.taskService.selectedTask =new Task();    
   // this.taskService.selectedTask.Start_Date= Date.now();    
    //.toISOString().substring(0, 10)
  }

  selectProjectToTask(project:ProjectSearch)
  {
    this.taskService.selectedTask.Project_ID=project.Project_ID;
    this.taskService.selectedTask.ProjectName=project.ProjectName;
    var closeButton =document.getElementById('projectCloseButton');
    closeButton.click();
  }

  selectUserToTask(user:UserSearch){
    
    this.taskService.selectedTask.UserName=user.FirstName+' '+user.LastName;    
    this.taskService.selectedTask.UserID=user.User_ID;    
    var closeButton =document.getElementById('userCloseButton');
    closeButton.click();
    //alert("User Selected successfully");
  }

  resetForm(form?:NgForm){
    this.taskService.selectedTask={
      Task1:'',
      Task_ID:null,
      End_Date:null,
      Start_Date:new Date(),
      IsParentTask:true,
      ParentTask:'',
      Parent_ID:null,
      Priority:16,
      ProjectName:'',
      Project_ID:null,
      STATUS:'',
      UserName:'',
      UserID:null      
    }
  }

  toggleEditable(event)
  {
    var startdate=<HTMLInputElement>document.getElementById('startDateTxtBox');
    var enddate=<HTMLInputElement>document.getElementById('endDateTxtBox');
    var btnUserSearch=<HTMLInputElement>document.getElementById('btnUserSearch');
    var priorityRange=<HTMLInputElement>document.getElementById('priorityRange');
    var parenttasktxtbox=<HTMLInputElement>document.getElementById('parentTaskTxtBOX')

  if(event.target.checked)
  {    
    startdate.disabled=true;
    enddate.disabled=true;
    btnUserSearch.disabled=true;
    priorityRange.disabled=true;
    parenttasktxtbox.disabled=true;
  }
  else{
    startdate.disabled=false;
    enddate.disabled=false;
    btnUserSearch.disabled=false;
    priorityRange.disabled=false;
    parenttasktxtbox.disabled=false;
  }
  }

 onSubmit(form:NgForm){
    var startdatevalue= this.taskService.selectedTask.Start_Date;
     var enddatevalue= this.taskService.selectedTask.End_Date;
     var managerID=this.taskService.selectedTask.UserID;
     var managername=this.taskService.selectedTask.UserName;
     var projectName=this.taskService.selectedTask.ProjectName;
     var projectId=this.taskService.selectedTask.Project_ID;
     form.value.Start_Date=startdatevalue;
     form.value.End_Date=enddatevalue;
     form.value.UserID=managerID;
     form.value.UserName=managername;
     form.value.ProjectName=projectName;
     form.value.Project_ID=projectId;
     form.value.Parent_ID=1;
     form.value.STATUS='Active';
     console.log(this.taskService.selectedTask.End_Date);
     console.log(form.value.End_Date);
         if(form.value.Task_ID==null)
             {     
    this.taskService.postTask(form.value).subscribe(data=>
    {
      this.resetForm(form),
      this.taskService.getTasks() 
      alert("Project added successfully")               
    })
  }
  else{        
    this.taskService.putTask(form.value.Project_ID,form.value)
    .subscribe(data=>
    {
      this.resetForm(form);
      this.taskService.getTasks();
    })
  }
  }

}
