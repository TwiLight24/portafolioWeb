import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-experience',
  imports: [RevealOnScrollDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {}