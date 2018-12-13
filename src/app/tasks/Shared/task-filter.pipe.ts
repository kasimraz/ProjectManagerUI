import { Pipe, PipeTransform } from '@angular/core';
import { Task } from 'src/app/tasks/Shared/task';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(tasks: Task[], field:string, value:string): Task[] {    
    if(!tasks || !value)
return tasks; 
 
return tasks.filter(x=>x.Task1.toLowerCase().includes(value.toLowerCase()));
  }

}
