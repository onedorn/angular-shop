import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appContactUsFont]'
})
export class ContactUsFontDirective {

  @Input('appContactUsFont') size: number;

  @HostListener('click') onMouseEnter() {
    this.changeFont(this.size || 28);
  }

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  private changeFont(size: number): void {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', `${size}px`);
    this.renderer.setStyle(this.element.nativeElement, 'font-weight', 'bold');
  }
}
