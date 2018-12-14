import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import {HttpClientModule} from '@angular/common/http';
import { ProjectFilterPipe } from 'src/app/projects/shared/project-filter.pipe';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ProjectListComponent } from 'src/app/projects/project-list/project-list.component';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectComponent,ProjectFilterPipe,ProjectListComponent],
      providers:[HttpClientModule,HttpModule],           
      imports:[FormsModule,HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should validate the project fields', () => {
    fixture.whenStable().then(
      ()=>{
        component.sampleForm.controls['ProjectName'].setValue('Project1');
       component.sampleForm.controls['Priority'].setValue('12'); 
      }
    );       
   expect(component.sampleForm.invalid).toBeFalsy();    
 });
 it('should create the project', () => {
   fixture.whenStable().then(
     ()=>{
       component.sampleForm.controls['ProjectName'].setValue('Project1');
       component.sampleForm.controls['Priority'].setValue('12');      
     }
   );          
 expect(component.sampleForm.invalid).toBeFalsy();    
});
});
