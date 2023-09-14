import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appShadow]",
})
export class ShadowDirective implements OnInit {
  @Input() appShadow = "";
  @Input() appShadowX = "";
  @Input() appShadowY = "";
  @Input() appShadowBlur = "";

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer2: Renderer2,
  ) {}

  ngOnInit() {
    const shadowString = `${this.appShadowX} ${this.appShadowY} ${this.appShadowBlur}`;

    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      "box-shadow",
      shadowString,
    );
  }
}
