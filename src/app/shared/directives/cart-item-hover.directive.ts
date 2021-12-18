import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCartItemHover]'
})
export class CartItemHoverDirective {
  @Input('appCartItemHover') color: string;

  @HostBinding('style.cursor') cursor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color || 'red');
    this.changeCursor();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  private highlight(color: string) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', color);
  }

  private changeCursor() {
    this.cursor = 'pointer';
  }
}
