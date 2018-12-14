import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListComponent } from './tasks-list.component';
import {HttpClientModule} from '@angular/common/http';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TaskFilterPipe } from 'src/app/tasks/Shared/task-filter.pipe';
import { HttpModule } from '@angular/http';

describe('TasksListComponent', () => {
  let component: TasksListComponent;
  let fixture: ComponentFixture<TasksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksListComponent,TaskFilterPipe ],
      providers:[HttpClientModule,HttpModule],
      imports:[FormsModule,HttpClientModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
