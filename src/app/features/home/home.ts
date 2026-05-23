import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RevealOnScrollDirective],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}