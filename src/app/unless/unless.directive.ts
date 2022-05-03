import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // This is the condition that I will check for my structural directive.
  // Since I want to get a value, I will use the @Input.
  // This is still a property, it's just the setter of the property that I define, which turns it into a method.
  // This method gets executed whenever this property changes.
  // It chages outside, whenever the condition or some parameter of the condition changes.
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  // Basically this directive later sits on <ng-template> component that we want to render,
  // because that's what Angular turns it to.
  // We can get access to the ng-template, and we also need to get access to the place
  // in the DOM/document where we want to render the element.
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

}
