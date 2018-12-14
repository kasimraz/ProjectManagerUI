import {  async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TasksService } from './tasks.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { TasksListComponent } from 'src/app/tasks/tasks-list/tasks-list.component';
import { TaskComponent } from 'src/app/tasks/task/task.component';
import { TaskFilterPipe } from 'src/app/tasks/Shared/task-filter.pipe';
import { Task } from 'src/app/tasks/Shared/task';
import { NullViewportScroller } from '@angular/common/src/viewport_scroller';

describe('TasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[CommonModule,HttpClientModule,FormsModule],
    declarations: [ TaskComponent,TasksListComponent,TaskFilterPipe ],         
    providers: [ TasksService ], 
  }));

  it('should be created', () => {
    const service: TasksService = TestBed.get(TasksService);
    expect(service).toBeTruthy();
  });
  it('should have add Task', inject([TasksService],(service:TasksService) => {
    const  testData : Task={
      Parent_ID:1,
      End_Date:new Date(),
      Start_Date:new Date(),
      Priority:3,
      Project_ID:1,
      STATUS:"Open",
      Task1:"Task Testing",
      UserID:3001,
      UserName:"Mohammed Kasim",
      Task_ID:45,
      ProjectName:"Project Name",IsParentTask:false,
      ParentTask:"parent one",
      parentTask:null
    };       
     expect(service.postTask(testData)).toBeTruthy();    
}));

  
it('should have get users function', inject([TasksService],(service:TasksService) => {
    expect(service.getTasks()).toBeTruthy(true);
}));

it('should have delete user function', inject([TasksService],(service:TasksService) => {
    const  Task_ID : number=6;         
    expect(service.deleteTask(Task_ID)).toBeTruthy();
}));

it('should have update user function', inject([TasksService],(service:TasksService) => {
    const  testData : Task={
      Parent_ID:1,
      End_Date:new Date(),
      Start_Date:new Date(),
      Priority:3,
      Project_ID:1,
      STATUS:"Open",
      Task1:"Task Testing-Update",
      UserID:3001,
      UserName:"Mohammed Kasim",
      Task_ID:45,
      ProjectName:"Project Name",IsParentTask:false,
      ParentTask:"parent one",
      parentTask:null
    };
    expect(service.putTask(testData.Task_ID,testData)).toBeTruthy();
}));
});
