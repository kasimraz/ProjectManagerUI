import { Task } from 'src/app/tasks/Shared/task'
export class Project {    
    Project_ID:number;    
    StartDate:Date;
    EndDate:Date;
    Priority:number;
    STATUS:string;
    ProjectName:string;
    ManagerId:number;
    ManagerName:string;
    tasks:Task[]
}
