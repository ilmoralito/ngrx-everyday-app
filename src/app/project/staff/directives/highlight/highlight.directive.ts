import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {
  @Input() appHighlight = "";

  constructor(private readonly elementRef: ElementRef) {
    // this.elementRef.nativeElement.style.backgroundColor = "Goldenrod";
  }

  @HostListener("mouseenter") onMouseEnter() {
    console.log(this.appHighlight)
    this.highlight(this.appHighlight);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight("");
  }

  private highlight(color: string) {
    this.elementRef.nativeElement.style.color = color;
  }
}
