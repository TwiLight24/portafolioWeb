import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-about',
  imports: [RevealOnScrollDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}