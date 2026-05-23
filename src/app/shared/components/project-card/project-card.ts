import { Component, Input } from '@angular/core';
import { Project } from '../../../core/models/project';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-project-card',
  imports: [RevealOnScrollDirective],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input({ required: true }) project!: Project;
}