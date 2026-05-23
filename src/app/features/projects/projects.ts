import { Component, inject } from '@angular/core';
import { ProjectService } from '../../core/services/project';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, RevealOnScrollDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private readonly projectService = inject(ProjectService);

  projects = this.projectService.getProjects();
}