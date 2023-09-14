import {
  AfterViewInit,
  Directive,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

@Directive({
  selector: "[appThree]",
})
export class ThreeDirective implements AfterViewInit {
  constructor(
    private readonly elementRef: ElementRef<any>,
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainerRef: ViewContainerRef,
  ) {
    console.log(this.elementRef.nativeElement);
  }

  ngAfterViewInit() {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}
