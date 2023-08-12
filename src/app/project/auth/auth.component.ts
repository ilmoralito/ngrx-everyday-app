import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { AuthState } from "./+state/auth.reducer";
import { authActions } from "./+state/auth.actions";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent {
  form = new FormGroup({});
  model!: Credential;
  fields: FormlyFieldConfig[] = [
    {
      key: "username",
      type: "input",
      props: { label: "Username", required: true },
    },
    {
      key: "password",
      type: "input",
      props: { label: "Password", required: true },
    },
  ];

  constructor(private readonly store: Store<AuthState>) {}

  submit() {
    this.store.dispatch(authActions.login({ payload: this.model }));
  }
}
