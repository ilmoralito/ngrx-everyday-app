import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  inject,
} from "@angular/core";

@Directive({
  selector: "[appLight]",
})
export class LightDirective {
  private readonly elementRef = inject(ElementRef);
  private readonly renderer2 = inject(Renderer2);

  @Input() appLight = "";
  @Input() defaultValue = "Nami";

  constructor() {
    this.elementRef.nativeElement.style.color = "tomato";
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.toggle("red");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.toggle("black");
  }

  @HostListener("click") onClick() {
    const naim = this.elementRef.nativeElement.classList.contains("naim");

    if (naim) {
      this.renderer2.removeClass(this.elementRef.nativeElement, "naim");
    } else {
      this.renderer2.addClass(this.elementRef.nativeElement, "naim");
    }
  }

  private toggle(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
