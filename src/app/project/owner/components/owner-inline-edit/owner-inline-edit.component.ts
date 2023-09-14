import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Owner } from "../../models/owner.model";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "app-owner-inline-edit",
  template: `<form
    [formGroup]="form"
    (ngSubmit)="onSubmit()"
    autocomplete="off"
  >
    <formly-form [form]="form" [model]="model" [fields]="fields"></formly-form>
  </form> `,
  styles: [],
})
export class OwnerInlineEditComponent {
  @Input()
  get model() {
    return this._model;
  }
  set model(model: Owner) {
    this._model = JSON.parse(JSON.stringify(model));
  }
  private _model!: Owner;

  @Output() confirm = new EventEmitter<Owner>();

  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    { key: "firstName", type: "input", props: { required: true } },
  ];

  onSubmit() {
    this.confirm.emit(this.model);
  }
}
