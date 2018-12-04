import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ProjectService } from 'src/app/projects/shared/project.service';
import { Project } from 'src/app/projects/shared/project.model';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  constructor(private projectService:ProjectService) { }

  ngOnInit() {
  }
  @Output() changeBtnText:EventEmitter<string> =new EventEmitter<string>();
  ShowForEdit(project: Project)
{
  this.projectService.selectedproject=Object.assign({},project);
  this.changeBtnText.emit('Update');
}

}
