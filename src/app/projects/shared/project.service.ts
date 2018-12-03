import { Injectable } from '@angular/core';
import { Project } from 'src/app/projects/shared/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  selectedproject:Project;
  projectlist:Project[];

  constructor() { }
}
