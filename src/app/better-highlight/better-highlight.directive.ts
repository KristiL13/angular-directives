import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  // renderer is better way to access elements, because Angular can also run services and not in the browser.
  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue' /*, '!important' */);
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // sulgudes decoratori järel saab kasuta kõiki saadaval olevaid evente
    // sulgudes mu eventlisteneri järel saab kasutada ka custom event'e nagu mujal
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
}
