import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs"
import { TasksService } from 'src/app/tasks/Shared/tasks.service';
@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  SearchText:string;
  constructor(public taskService: TasksService) { }

  ngOnInit() {
    this.taskService.getTasks();
  }
}
