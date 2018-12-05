import { ParentTask } from "src/app/tasks/Shared/ParentTask.model";

export class Task {
    Task1:string;
    Task_ID:number
    Project_ID:number;
    Parent_ID:number;
    Start_Date:Date;
    End_Date:Date;
    Priority:number;
    STATUS:string;
    ProjectName:string;
    IsParentTask:boolean;    
    ParentTask:string;
    UserName:string;
    UserID:number;
    parentTask:ParentTask
}
