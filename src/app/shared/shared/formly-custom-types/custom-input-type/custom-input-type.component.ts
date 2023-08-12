import { Component } from "@angular/core";
import { FieldType, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "app-custom-input-type",
  template: ` <input
    type="input"
    [formControl]="$any(formControl)"
    [formlyAttributes]="field"
  />`,
  styles: [],
})
export class CustomInputTypeComponent extends FieldType<FormlyFieldConfig> {}
