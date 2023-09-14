import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.scss"],
})
export class PeopleComponent {
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  model = [
    {
      firstName: "ada",
      lastName: "wong",
      age: 55,
      bio: "Roundhouse kicking asses since 1940",
    },
  ];
  fields: FormlyFieldConfig[] = [
    {
      key: "person",
      type: "array",
      props: {
        label: "Person",
        required: true,
      },
    },
  ];

  onSubmit(model: any) {
    console.log(model);
  }
}
