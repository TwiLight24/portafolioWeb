import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Project } from '../../../core/models/project';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-project-card',
  imports: [RevealOnScrollDirective],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input({ required: true }) project!: Project;

  @ViewChild('projectVideo')
  projectVideo?: ElementRef<HTMLVideoElement>;

  playVideo(): void {
    const video = this.projectVideo?.nativeElement;

    if (!video || !this.project.videoUrl) {
      return;
    }

    video.play().catch(() => {});
  }

  pauseVideo(): void {
    const video = this.projectVideo?.nativeElement;

    if (!video) {
      return;
    }

    video.pause();
    video.currentTime = 0;
  }
}