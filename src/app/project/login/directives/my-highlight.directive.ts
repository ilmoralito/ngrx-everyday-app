import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

@Directive({
  selector: "[appMyHighlight]",
})
export class MyHighlightDirective implements OnChanges, AfterViewInit {
  @Input() appMyHighlight = "";

  constructor(private readonly elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = "goldenrod";
    this.elementRef.nativeElement.style.color = this.appMyHighlight;
    this.elementRef.nativeElement.style.fontWeight = "bold";
    this.elementRef.nativeElement.style.padding = "10px";
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let property in changes) {
      this.elementRef.nativeElement.style.color =
        changes[property].currentValue;
    }
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.style.color = this.appMyHighlight;
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight("yellow");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight("");
  }

  private highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
