import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appPrimaryButton]",
})
export class PrimaryButtonDirective implements OnInit {
  @Input() appPrimaryButton!: string;

  @HostBinding("style.color") color = "white";
  @HostBinding("style.border") border = "none";
  @HostBinding("style.padding") padding = "10px";
  @HostBinding("style.background-color") backgroundColor = "goldenrod";
  @HostBinding("attr.data-value") value = "lorem";
  @HostBinding("attr.data-cy") dataCy!: string;
  @HostBinding("disabled") disabled = false;

  @HostListener("mouseover") onMouseOver() {
    this.disabled = Math.random() > 0.5;
  }

  constructor(
    private readonly elementRef: ElementRef,
    private readonly rendered2: Renderer2,
  ) {}

  ngOnInit() {
    this.rendered2.addClass(this.elementRef.nativeElement, "luffy");
    this.dataCy = this.appPrimaryButton;
  }
}
