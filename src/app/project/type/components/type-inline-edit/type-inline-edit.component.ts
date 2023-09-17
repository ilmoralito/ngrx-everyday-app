import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import { Type } from "../../state/type.mode";

@Component({
  selector: "app-type-inline-edit",
  template: `
    <input #input (keydown)="onKeyDown($event)" [value]="type.displayName" />
  `,
  styles: [],
})
export class TypeInlineEditComponent implements AfterViewInit {
  @Input()
  get type() {
    return this._type;
  }
  set type(type: Type) {
    this._type = JSON.parse(JSON.stringify(type));
  }
  private _type!: Type;

  @Output() confirm = new EventEmitter<Type>();

  @ViewChild("input") input!: ElementRef<HTMLInputElement>;

  private selectText(
    inputElement: HTMLInputElement,
    start: number,
    end: number,
  ) {
    inputElement.setSelectionRange(start, end);
    console.log(inputElement, start, end);
  }

  ngAfterViewInit() {
    this.input.nativeElement.focus();
    // this.input.nativeElement.select();
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault();
      this.onEnter();
      return;
    }

    if (event.shiftKey && (event.key === "Home" || event.key === "End")) {
      event.preventDefault();
      const inputElement = this.input.nativeElement;

      switch (event.key) {
        case "Home":
          this.selectText(inputElement, 0, inputElement.selectionStart!);
          return;
        case "End":
          this.selectText(
            inputElement,
            inputElement.selectionEnd!,
            inputElement.value.length,
          );
          return;
      }
    }
  }

  onEnter() {
    const value = this.input.nativeElement.value;

    if (!value) {
      return;
    }

    const name = value.trim().toLowerCase().split(" ").join("-");
    this.confirm.emit({
      ...this.type,
      name,
      displayName: value,
    });
  }

  onShiftHome(event: KeyboardEvent) {
    console.log(event.shiftKey);
  }

  onShiftEnd(event: KeyboardEvent) {
    console.log(event.shiftKey);
  }
}
