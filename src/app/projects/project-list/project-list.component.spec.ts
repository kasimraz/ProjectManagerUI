import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListComponent } from './project-list.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ProjectFilterPipe } from 'src/app/projects/shared/project-filter.pipe';
import { FormsModule } from '@angular/forms';
describe('ProjectListComponent', () => {
  let component: ProjectListComponent;
  let fixture: ComponentFixture<ProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectListComponent,ProjectFilterPipe],
      providers:[HttpClientModule,HttpModule],           
      imports:[FormsModule,HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
