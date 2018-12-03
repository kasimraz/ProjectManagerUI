import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/projects/shared/project.service';
import { DatePipe } from '@angular/common/src/pipes';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService:ProjectService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form? :NgForm){
    if(form!=null)
form.reset();
this.projectService.selectedproject={
  Project:'',
  User_ID:null,
  Project_ID:null,
  Start_Date:null,
  End_Date:null,
  Priority:null,
  User_Name:'',
  STATUS:''
};
  }

}
