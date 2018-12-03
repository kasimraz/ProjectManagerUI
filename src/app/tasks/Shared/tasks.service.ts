import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Task } from './task';
import {Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class TasksService {
selectedTask:Task;
taskslist:Task[];
  constructor(private http:HttpClient) { }

  postUser(task:Task){
    console.log(task);
    task.Task_ID=1;
   // var body= Jsonp.() 
 return this.http.post('http://localhost:61035/api/Users',task);
  }
  getUser() :Observable<any>
  {
   return this.http.get('http://localhost:61035/api/Users')    
  }

  getTasks() 
  {
   return this.http.get<Task[]>('http://localhost:61035/api/Tasks')
   .subscribe(data=>this.taskslist=data);   
  }

  PutUser(Task_ID,task:Task)
  {
  return this.http.put('http://localhost:61035/api/Users/'+Task_ID,Task);
  }
  
  DeleteUser(Task_ID:number)
  {
    // console.log(User_ID);
     console.log('http://localhost:61035/api/Users/'+Task_ID);
   return  this.http.delete('http://localhost:61035/api/Users/?id='+Task_ID)    
  }
}
