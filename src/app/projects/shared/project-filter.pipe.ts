import { Pipe, PipeTransform } from '@angular/core';
import { Project } from 'src/app/projects/shared/project.model';

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

  transform(projects: Project[], field:string, value:string): Project[] {    
    if(!projects || !value)
return projects; 
 
return projects.filter(x=>x.ProjectName.toLowerCase().includes(value.toLowerCase()));
  }

}
