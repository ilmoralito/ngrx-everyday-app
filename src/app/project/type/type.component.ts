import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

@Component({
  selector: "app-type",
  templateUrl: "./type.component.html",
  styleUrls: ["./type.component.scss"],
})
export class TypeComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    { key: "name", type: "input", props: { label: "Name", required: true } },
    { key: "filter-type", type: "filter-type", props: { label: "Type" } },
  ];
  options: FormlyFormOptions = {};

  onSubmit() {
    console.log(this.model);
  }
}
