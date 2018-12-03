import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from 'src/app/tasks/tasks.component';
import { UsersComponent } from 'src/app/users/users.component';
import { TasksListComponent } from 'src/app/tasks/tasks-list/tasks-list.component';

const routes: Routes = [
  {path:'tasks',component:TasksComponent},
  {path:'Users', component:UsersComponent},
  {path:'Taskslist',component:TasksListComponent}
  {path:'', redirectTo:'/Users',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
