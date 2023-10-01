import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appDropdown]",
})
export class DropdownDirective {
  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer2: Renderer2,
  ) {}

  option = 1;

  @HostBinding("class.open") isOpen = false;

  @HostListener("click")
  toggle() {
    const element = this.elementRef.nativeElement;
    const isOpen = element.classList.contains("open");

    // element.classList.toggle("open", !isOpen);

    if (isOpen) {
      this.renderer2.removeClass(element, "open");

      return;
    }

    this.renderer2.addClass(element, "open");

    this.isOpen = !this.isOpen;
  }
}
