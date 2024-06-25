import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
})
export class ResaltadoDirective {
  /**
   * Inyeccion de dependecias:
   * Necesitamos que Angular nos provea una ref al elemento
   * al cual aplicamos esta directiva
   */
  constructor(public elementRef: ElementRef, public renderer: Renderer2) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }
}
