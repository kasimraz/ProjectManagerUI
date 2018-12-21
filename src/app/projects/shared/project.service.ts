import { Injectable } from '@angular/core';
import { Project } from 'src/app/projects/shared/project.model';
import { UserSearch } from 'src/app/projects/shared/user-search.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  selectedproject:Project;
  projectlist:Project[];
 users:UserSearch[];
 baseURL:string= environment.baseUrl;
  constructor(private http:HttpClient) { }

  getUser() : Observable<any>
  {
   //return this.http.get(this.baseURL+'/Users/GetUser');    
   return this.http.get(this.baseURL+'/Users/');    
  }

  getUsers() 
  {
  //  return this.http.get<UserSearch[]>(this.baseURL+'/Users/GetUser')
  //  .subscribe(data=>this.users=data); 
  return this.http.get<UserSearch[]>(this.baseURL+'/Users/')
  .subscribe(data=>this.users=data);   
  }

  postProject(project:Project)
  {
    project.Project_ID=1;    
   //return this.http.post(this.baseURL+'/Projects',project);
   return this.http.post(this.baseURL+'/Projects/AddProject/',project);
  }

  getProject() :Observable<any>
  {    
    //return this.http.get<Project[]>(this.baseURL+'/Projects');
    return this.http.get<Project[]>(this.baseURL+'/Projects/');
    
  }


  getProjects()
  {    
    // return this.http.get<Project[]>(this.baseURL+'/Projects')
    // .subscribe(data=>this.projectlist=data); 
    return this.http.get<Project[]>(this.baseURL+'/Projects/')
    .subscribe(data=>this.projectlist=data); 
  }

  putProjects(Project_ID, project:Project)
  {
    //return this.http.put(this.baseURL+'/Projects/'+Project_ID,project);
    return this.http.put(this.baseURL+'/Projects/EditProject/'+Project_ID,project);
  }

  deleteProject(Project_ID)
  {
    //return  this.http.delete(this.baseURL+'/Projects/?id='+Project_ID)    
    return  this.http.delete(this.baseURL+'/Projects/DeleteProject/'+Project_ID)    
  }
}
