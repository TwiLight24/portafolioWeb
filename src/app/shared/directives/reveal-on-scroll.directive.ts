import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';

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
    private readonly renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;

    this.renderer.addClass(element, 'reveal');
    this.renderer.setStyle(element, '--reveal-delay', this.revealDelay);

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