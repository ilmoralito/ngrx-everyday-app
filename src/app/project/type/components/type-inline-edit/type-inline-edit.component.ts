import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Type } from "../../state/type.mode";

@Component({
  selector: "app-type-inline-edit",
  template: `
    <input
      type="text"
      [(ngModel)]="type.displayName"
      (keydown.enter)="onEnter()"
    />
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

  onEnter() {
    this.confirm.emit(this.type);
  }
}
