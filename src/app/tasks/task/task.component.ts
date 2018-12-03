import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/tasks/Shared/tasks.service';
import { Task } from 'src/app/tasks/Shared/task';
import {DatePipe} from '@angular/common'
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'add-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
CurrentDate:Date=new Date();
  constructor(private taskService :TasksService) { }

  ngOnInit() {

    this.taskService.selectedTask =new Task();    
    this.taskService.selectedTask.Start_Date= new Date();    
    //.toISOString().substring(0, 10)
  }
  resetForm(form:NgForm){
    this.taskService.selectedTask={
      Task1:'',
      Task_ID:null,
      End_Date:null,
      Start_Date:null,
      IsParentTask:true,
      ParentTask:'',
      Parent_ID:null,
      Priority:16,
      Project:'',
      Project_ID:null,
      STATUS:''
    }
  }

}
