import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Task } from './task';
import {Observable} from "rxjs"
import {environment} from 'src/environments/environment'
import { SearchUser } from 'src/app/tasks/Shared/SearchUser';
import { ProjectSearch } from 'src/app/tasks/Shared/project-search.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
selectedTask:Task;
taskslist:Task[];
users:SearchUser[];
baseURL:string= environment.baseUrl;
projects:ProjectSearch[];
  constructor(private http:HttpClient) { }

  postTask(task:Task){
         
 return this.http.post(this.baseURL+'/Tasks',task);
  }

  getUser() :Observable<any>
  {   
   return this.http.get(this.baseURL+'/Users')    
  }

  getProjects()
  {
    return this.http.get<ProjectSearch[]>(this.baseURL+'/Projects')
    .subscribe(data=>this.projects=data); 
  }

  getUsers() 
  {    
   return this.http.get<SearchUser[]>(this.baseURL+'/Users')   
  }

  getTasks() 
  {
   return this.http.get<Task[]>(this.baseURL+'/Tasks')
   .subscribe(data=>this.taskslist=data);   
  }

  putTask(Task_ID,task:Task)
  {
  return this.http.put(this.baseURL+'/Tasks/'+Task_ID,Task);
  }
  
  deleteTask(Task_ID:number)
  {   
   return  this.http.delete(this.baseURL+'/Tasks/?id='+Task_ID)    
  }
}
