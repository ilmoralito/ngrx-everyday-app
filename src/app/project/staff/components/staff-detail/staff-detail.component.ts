import { Component, Input } from "@angular/core";
import { Person } from "../../staff.component";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "app-staff-detail",
  template: `
    <pre>{{ person | json }}</pre>
    <form [formGroup]="form" (ngSubmit)="onSubmit(person)">
      <formly-form
        [form]="form"
        [fields]="fields"
        [model]="person"
      ></formly-form>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  `,
  styles: [],
})
export class StaffDetailComponent {
  @Input()
  get person() {
    return this._person;
  }
  set person(person: Person) {
    // this._person = { ...person };
    // this._person = Object.create(person);
    // this._person = Object.assign({}, person);
    this._person = JSON.parse(JSON.stringify(person));
    this._person = person;
  }
  private _person: Person = {
    id: "",
    name: "",
    active: false,
    options: "option-1",
    validity: {
      name: "a",
    },
  };

  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      key: "id",
      type: "input",
      props: {
        label: "ID",
      },
    },
    {
      key: "name",
      type: "input",
      props: {
        label: "Name",
      },
    },
    {
      key: "options",
      type: "select",
      props: {
        label: "Options",
        options: [
          { label: "Option 1", value: "option-1" },
          { label: "Option 2", value: "option-2" },
        ],
      },
      hooks: {
        onInit: (field) => {
          field.form?.get("options")?.valueChanges.subscribe({
            next: (value) => {
              console.log(value);

              if (value === "option-2") {
                console.log(field.form?.get("active"));
                field.form?.get("active")?.setValue(true);
              } else {
                field.form?.get("active")?.setValue(false);
              }
            },
          });
        },
      },
    },
    {
      key: "active",
      type: "checkbox",
      props: {
        label: "Active",
      },
      hooks: {
        onInit: (field) => {
          field.form?.get("active")?.valueChanges.subscribe({
            next: (value) => {
              console.log(value);
            },
          });
        },
      },
    },
    {
      key: "validity",
      fieldGroup: [
        {
          key: "name",
          type: "input",
          props: {
            label: "validity name",
          },
          hooks: {
            onInit: (field) => {
              field.form?.get("name")?.valueChanges.subscribe({
                next: (value) => {
                  if (value === 'z') {
                    field.form?.parent?.get('active')?.setValue(true);
                  }
                },
              });
            },
          },
        },
      ],
    },
  ];

  onSubmit(model: Person) {
    console.log(model);
  }
}
