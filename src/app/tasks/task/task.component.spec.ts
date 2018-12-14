import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClientModule} from '@angular/common/http';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TaskFilterPipe } from 'src/app/tasks/Shared/task-filter.pipe';
import { HttpModule } from '@angular/http';
import { TasksComponent } from 'src/app/tasks/tasks.component';
import { TaskComponent } from 'src/app/tasks/task/task.component';
import { TasksListComponent } from 'src/app/tasks/tasks-list/tasks-list.component';
import { Router } from '@angular/router';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  class MockRouter {
    navigate = jasmine.createSpy('navigate');
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksListComponent,TaskComponent,TaskFilterPipe ],
      providers:[HttpClientModule,HttpModule, {provide: Router, useClass: MockRouter}],
      imports:[FormsModule,HttpClientModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate the Task', () => {
    fixture.whenStable().then(
      ()=>{
        component.sampleForm.controls['ProjectName'].setValue('ProjectOne');
        component.sampleForm.controls['TaskName'].setValue('TestTaskOne');
       component.sampleForm.controls['Priority'].setValue('30');
      }
    );       
   expect(component.sampleForm.invalid).toBeFalsy();    
 });

});
