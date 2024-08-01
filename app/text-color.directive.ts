import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {
  @Input('appTextColor') highlightColor: string = 'blue'; // Default value

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    this.changeTextColor(this.highlightColor);
  }

  private changeTextColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
