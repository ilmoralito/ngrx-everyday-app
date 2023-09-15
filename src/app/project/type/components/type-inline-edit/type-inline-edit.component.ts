import {
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
    <input #node (keydown.enter)="onEnter()" [value]="type.displayName" />
  `,
  styles: [],
})
export class TypeInlineEditComponent {
  @Input()
  get type() {
    return this._type;
  }
  set type(type: Type) {
    this._type = JSON.parse(JSON.stringify(type));
  }
  private _type!: Type;

  @Output() confirm = new EventEmitter<Type>();

  @ViewChild("node") node!: ElementRef<HTMLInputElement>;

  onEnter() {
    const value = this.node.nativeElement.value;

    if (!value) {
      return;
    }

    this.confirm.emit({
      ...this.type,
      name: value.split(" ").join("-"),
      displayName: value,
    });
  }
}
