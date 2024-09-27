import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[borderBox]',
  standalone: true
})
export class BorderBoxDirective {

  constructor(private el: ElementRef) {}

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color
    this.el.nativeElement.style.cursor = "pointer"
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('white')
  }
  

}
