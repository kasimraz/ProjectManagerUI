import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { TaskComponent } from './tasks/task/task.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { UserFilterPipe } from 'src/app/users/user-filter.pipe';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import{AngularDateTimePickerModule} from 'angular2-datetimepicker'


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    UsersComponent,
    UserComponent,
    UserListComponent,
    TaskComponent,
    TasksListComponent,
    UserFilterPipe,
    ProjectsComponent,
    ProjectComponent,
    ProjectListComponent        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AngularDateTimePickerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
