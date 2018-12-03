import { Injectable } from '@angular/core';
import { Project } from 'src/app/projects/shared/project.model';
import { UserSearch } from 'src/app/projects/shared/user-search.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  selectedproject:Project;
  projectlist:Project[];
 users:UserSearch[];
  constructor(private http:HttpClient) { }

  getUser() : Observable<any>
  {
   return this.http.get('http://localhost:61035/api/Users');    
  }

  getUsers() 
  {
   return this.http.get<UserSearch[]>('http://localhost:61035/api/Users')
   .subscribe(data=>this.users=data);   
  }

  postProject(project:Project)
  {
    project.Project_ID=1;    
   return this.http.post('http://localhost:61035/api/Projects',project);
  }

  getProjects()
  {    
    return this.http.get<Project[]>('http://localhost:61035/api/Projects')
    .subscribe(data=>this.projectlist=data); 
  }

  putProjects(Project_ID, project:Project)
  {
    return this.http.put('http://localhost:61035/api/Projects/'+Project_ID,project);
  }

  deleteProject(Project_ID)
  {
    return  this.http.delete('http://localhost:61035/api/Projects/?id='+Project_ID)    
  }
}
