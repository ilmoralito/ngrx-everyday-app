import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appFirst]",
})
export class FirstDirective {
  possibleColors: readonly string[] = [
    "darksalmon",
    "hotpink",
    "lightskyblue",
    "goldenrod",
    "peachpuff",
    "mediumspringgreen",
    "cornflowerblue",
    "blanchedalmond",
    "lightslategrey",
    "tomato",
  ];

  @HostBinding("style.color") color!: string;
  @HostBinding("style.border-color") borderColor!: string;

  @HostListener("keydown") newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.color = this.borderColor = this.possibleColors[colorPick];
  }

  @Input() appFirst = "";
  @HostBinding() get innerText() {
    return this.appFirst;
  }

  @HostListener("click") onClick() {
    console.log("click");
  }
}
