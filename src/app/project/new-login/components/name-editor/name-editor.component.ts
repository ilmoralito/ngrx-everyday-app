import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-name-editor",
  template: `<div>
    <label for="name">Name</label>
    <input type="text" id="id" [formControl]="name" />
    <p>{{ name.value }}</p>
    <button (click)="updateName()">Update name</button>
    <hr />
    <form [formGroup]="form" (ngSubmit)="onSubmit()" autocomplete="off">
      <div>
        <label for="first-name">First Name: </label>
        <input id="first-name" type="text" formControlName="firstName" />
      </div>
      <div>
        <label for="last-name">Last Name: </label>
        <input id="last-name" type="text" formControlName="lastName" />
      </div>
      <div>
        <button type="submit" [disabled]="form.invalid">Submit</button>
      </div>
      <pre>{{ form.value | json }}</pre>
    </form>
  </div>`,
  styles: [],
})
export class NameEditorComponent {
  form = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
  });

  name = new FormControl("");

  updateName() {
    this.name.setValue("Nami");
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
