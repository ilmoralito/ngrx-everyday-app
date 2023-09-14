import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appTest]",
})
export class TestDirective {
  @HostBinding("class.box1") toggle = false;

  constructor() {}

  @HostListener("mouseleave")
  @HostListener("mouseover")
  onMouseOver() {
    this.toggle = !this.toggle;
  }
}
