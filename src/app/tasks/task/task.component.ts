import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/tasks/Shared/tasks.service';
import { Task } from 'src/app/tasks/Shared/task';
import {DatePipe} from '@angular/common'
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { UserSearch } from 'src/app/projects/shared/user-search.model';
import { SearchUser } from 'src/app/tasks/Shared/SearchUser';

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
   console.log(this.userslist)  ;
this.resetForm();
    this.taskService.selectedTask =new Task();    
   // this.taskService.selectedTask.Start_Date= Date.now();    
    //.toISOString().substring(0, 10)
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
      Project:'',
      Project_ID:null,
      STATUS:'',
      UserName:'',
      UserID:null
      
    }
  }

}
