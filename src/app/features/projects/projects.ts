import { Component, inject } from '@angular/core';
import { ProjectService } from '../../core/services/project';
import { ProjectCard } from '../../shared/components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private readonly projectService = inject(ProjectService);

  projects = this.projectService.getProjects();
}
