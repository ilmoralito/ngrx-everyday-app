import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appBorderDotted]",
})
export class BorderDottedDirective {
  constructor(private readonly elementRef: ElementRef) {
    this.elementRef.nativeElement.style.padding = "10px";
    this.elementRef.nativeElement.style.margin = "10px";
    this.elementRef.nativeElement.style.border = "1px dashed white";
    this.elementRef.nativeElement.style.position = 'relative';
  }
}
