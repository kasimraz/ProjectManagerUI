import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Task } from './task';
import {Observable} from "rxjs"
import {environment} from 'src/environments/environment'
import { SearchUser } from 'src/app/tasks/Shared/SearchUser';
import { ProjectSearch } from 'src/app/tasks/Shared/project-search.model';
import { ParentTask } from 'src/app/tasks/Shared/ParentTask.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
selectedTask:Task;
taskslist:Task[];
users:SearchUser[];
baseURL:string= environment.baseUrl;
projects:ProjectSearch[];
pTask: ParentTask;

  constructor(private http:HttpClient) { }

  postTask(task:Task){
         
 //return this.http.post(this.baseURL+'/Tasks',task);
 return this.http.post(this.baseURL+'/Tasks/AddTask/',task);
  }
  PostParentTask(task:Task)
  {
  this.pTask = new ParentTask();
  this.pTask.Parent_ID=task.Parent_ID;
  this.pTask.Parent_Task=task.Task1;
  return this.http.post(this.baseURL+'/ParentTasks',this.pTask);
  }
  getUser() :Observable<any>
  {   
   //return this.http.get(this.baseURL+'/Users/GetUser')    
   return this.http.get(this.baseURL+'/Users/')    
  }

  getProjects()
  {
    // return this.http.get<ProjectSearch[]>(this.baseURL+'/Projects')
    // .subscribe(data=>this.projects=data); 
    return this.http.get<ProjectSearch[]>(this.baseURL+'/Projects/')
    .subscribe(data=>this.projects=data); 
  }

  getUsers() 
  {    
  //  return this.http.get<SearchUser[]>(this.baseURL+'/Users/GetUser')   
  return this.http.get<SearchUser[]>(this.baseURL+'/Users/')
  }

  getTasks() 
  {
  //  return this.http.get<Task[]>(this.baseURL+'/Tasks')
  //  .subscribe(data=>this.taskslist=data);  
  return this.http.get<Task[]>(this.baseURL+'/Tasks/')
  .subscribe(data=>this.taskslist=data);   
  }

  putTask(Task_ID,task:Task)
  {
  //return this.http.put(this.baseURL+'/Tasks/'+Task_ID,Task);
  return this.http.put(this.baseURL+'/Tasks/EditTask/'+Task_ID,Task);
  }
  
  deleteTask(Task_ID:number)
  {   
   //return  this.http.delete(this.baseURL+'/Tasks/?id='+Task_ID)    
   return  this.http.delete(this.baseURL+'/Tasks/DeleteTask/'+Task_ID)    
  }
}
