import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input() revealDelay = '0ms';
  @Input() revealOnce = true;

  private observer?: IntersectionObserver;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) {}

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;

    this.renderer.addClass(element, 'reveal');
    this.renderer.setStyle(element, '--reveal-delay', this.revealDelay);

    if (!isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(element, 'reveal--visible');
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(element, 'reveal--visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(element, 'reveal--visible');

          if (this.revealOnce) {
            this.observer?.unobserve(element);
          }
        } else if (!this.revealOnce) {
          this.renderer.removeClass(element, 'reveal--visible');
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -80px 0px',
      }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}