import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/tasks/Shared/tasks.service';
import { Task } from 'src/app/tasks/Shared/task';
import {DatePipe} from '@angular/common'

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

}
