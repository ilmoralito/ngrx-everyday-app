import { Directive, ElementRef, HostListener, inject } from "@angular/core";

@Directive({
  selector: "[appMyHighlight]",
})
export class MyHighlightDirective {
  private readonly elementRef = inject(ElementRef);

  constructor() {
    const nativeElement = this.elementRef.nativeElement;

    nativeElement.style.backgroundColor = "goldenrod";
    nativeElement.style.color = "tomato";
  }

  @HostListener("click", ["$event"]) onClick($event: any) {
    console.log("clicked", $event);
  }
}
