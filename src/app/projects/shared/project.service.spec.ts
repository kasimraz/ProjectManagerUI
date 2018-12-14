import { TestBed,inject } from '@angular/core/testing';

import { ProjectService } from './project.service';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from 'src/app/projects/project/project.component';
import { ProjectListComponent } from 'src/app/projects/project-list/project-list.component';
import { ProjectFilterPipe } from 'src/app/projects/shared/project-filter.pipe';
import { Project } from 'src/app/projects/shared/project.model';

describe('ProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[CommonModule,HttpClientModule,FormsModule],
    declarations: [ ProjectComponent,ProjectListComponent,ProjectFilterPipe ],         
    providers: [ ProjectService ],
  }));

  it('should be created', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    expect(service).toBeTruthy();
  });

  it('should have add Task', inject([ProjectService],(service:ProjectService) => {
    const  testData : Project={
      Project_ID:10,
      ManagerId:1010,
      EndDate:new Date(),
      StartDate:new Date(),
Priority:30,ProjectName:"First Test Project",ManagerName:"Kasim",
tasks:null,STATUS:"Active"
    };      
     expect(service.postProject(testData)).toBeTruthy();    
}));

  
it('should have get users function', inject([ProjectService],(service:ProjectService) => {
    expect(service.getProject()).toBeTruthy(true);
}));

it('should have delete user function', inject([ProjectService],(service:ProjectService) => {
    const  Project_ID : number=10;         
    expect(service.deleteProject(Project_ID)).toBeTruthy();
}));

it('should have update user function', inject([ProjectService],(service:ProjectService) => {
  const  testData : Project={
    Project_ID:10,
    ManagerId:1010,
    EndDate:new Date(),
    StartDate:new Date(),
Priority:30,ProjectName:"First Test Project-Update",ManagerName:"Kasim",
tasks:null,STATUS:"Active"
  };      
    expect(service.putProjects(testData.Project_ID,testData)).toBeTruthy();
}));

});
