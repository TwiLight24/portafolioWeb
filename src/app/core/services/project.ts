import { Injectable, signal } from '@angular/core';
import { PROJECTS } from '../../data/projectData';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly projectsSignal = signal(PROJECTS);

  getProjects() {
    return this.projectsSignal.asReadonly();
  }

  getFeaturedProjects() {
    return this.projectsSignal().filter(project => project.featured);
  }
}
