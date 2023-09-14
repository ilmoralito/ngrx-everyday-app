import { Directive, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
  selector: "[appOpt]",
})
export class OptDirective {
  @Output() toggle = new EventEmitter<boolean>();

  constructor() {}

  @HostListener("click") onClick() {
    this.toggle.emit(Math.random() > 0.5);
  }
}
