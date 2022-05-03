import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  // @Input() highlightColor: string = 'lightblue';
  @Input('appBetterHighlight') highlightColor: string = 'lightblue';
  // Määrame siin ka vaikimisi väärtuse kummalegi property-le, aga seda saab muuta ka väljast.
  @HostBinding('style.backgroundColor') backgroundColor: string; 
  // Siin sulgudes märgin, millist property-t host elemendist ma siduda tahan.
  // Sisuliselt on see sama, mille poole pöördun basic-highlight.directive.ts failis.
  // camelCase on siin oluline backgroundColor kirjutamisel, kuna me pääseme ligi DOM property-le, mis ei tea -.
  // Kui siin kusagil allpool nüüd määran oma kohalikule backgroundColor muutujale väärtuse, siis vastavalt mu
  // tingimustele muutub hostis style.backgroundColor väärtus.

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  // renderer is better way to access elements, because Angular can also run services and not in the browser.
  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue' /*, '!important' */);
    this.backgroundColor = this.defaultColor;
    // Siin on juba teada, mis mingi elemendi defaultColor on kui see on elemendi poolt seotud.
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // sulgudes decoratori järel saab kasuta kõiki saadaval olevaid evente
    // sulgudes mu eventlisteneri järel saab kasutada ka custom event'e nagu mujal
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
    // this.backgroundColor = 'lightgreen';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
}
