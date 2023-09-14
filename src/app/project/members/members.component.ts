import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { emailValidator } from "src/app/app.module";

export interface Member {
  id: string;
  name: string;
  lastName: string;
  emails: string[];
}

export type MemberPreview = Omit<Member, "id">;

@Component({
  selector: "app-members",
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.scss"],
})
export class MembersComponent {
  form = new FormGroup({});
  model: MemberPreview = {
    name: "",
    lastName: "",
    emails: [],
  };
  fields: FormlyFieldConfig[] = [
    {
      key: "name",
      type: "input",
      props: {
        label: "Name",
        required: true,
      },
    },
    {
      key: "lastName",
      type: "input",
      props: {
        label: "Lastname",
        required: true,
      },
    },
    {
      key: "emails",
      type: "input",
      props: {
        label: "Emails",
        required: true,
      },
      validators: {
        validation: [emailValidator],
      },
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          field.form?.get("emails")?.valueChanges.subscribe({
            next: (value) => {
              this.model.emails = [value];
            },
          });
        },
      },
    },
  ];
  options: FormlyFormOptions = {};

  onSubmit() {
    console.log(this.model);
  }
}
