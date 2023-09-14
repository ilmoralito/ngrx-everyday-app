import { Component, Input } from "@angular/core";
import { Option, Owner } from "../../models/owner.model";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "app-owner-detail",
  template: `<form [formGroup]="form">
    <formly-form [model]="owner" [form]="form" [fields]="fields"></formly-form>
    <button type="submit">Submit</button>
  </form>`,
  styles: [],
})
export class OwnerDetailComponent {
  @Input()
  get owner() {
    return this._owner;
  }
  set owner(model: Owner) {
    this._owner = JSON.parse(JSON.stringify(model));
  }
  private _owner!: Owner;

  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    { key: "firstName", type: "input", props: { label: "First name" } },
    { key: "lastName", type: "input", props: { label: "Last name" } },
    { key: "email", type: "input", props: { label: "Email" } },
    { key: "active", type: "checkbox", props: { label: "Active" } },
    {
      key: "settings",
      fieldGroup: [
        {
          key: "option",
          type: "select",
          props: {
            label: "Option",
            options: [
              { label: "Option 1", value: Option.Option1 },
              { label: "Option 2", value: Option.Option2 },
              { label: "Option 3", value: Option.Option3 },
            ],
          },
          hooks: {
            onInit: (field) => {
              field.form?.get("option")?.valueChanges.subscribe({
                next: (value) => {
                  if (value !== "option-3") {
                    field.form?.parent?.get("active")?.setValue(false);
                    return;
                  }

                  field.form?.parent?.get("active")?.setValue(true);
                },
              });
            },
          },
        },
      ],
    },
  ];
}
