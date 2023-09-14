import {
  AfterViewInit,
  Directive,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

@Directive({
  selector: "[appFirst]",
})
export class FirstDirective implements AfterViewInit {
  constructor(
    private readonly elementRef: ElementRef,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly templateRef: TemplateRef<any>,
  ) {
    console.log(elementRef.nativeElement);
  }

  ngAfterViewInit() {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}
