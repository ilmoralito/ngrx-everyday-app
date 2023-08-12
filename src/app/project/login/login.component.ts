import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Credential } from "./state/credential.model";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { UserProfile } from "./state/user.profile";
import { loginActions } from "./state/login.actions";
import { selectLoading, selectUserProfile } from "./state/login.reducer";
import { formlyInput } from "src/app/shared/shared/formly-utils/formly-input";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  userProfile$!: Observable<UserProfile | null>;
  loading$!: Observable<boolean>;

  form = new FormGroup({});
  model: Credential = { username: "", password: "" };
  fields: FormlyFieldConfig[] = [
    formlyInput({
      key: "username",
      label: "Username",
      props: { required: true },
    }),
    formlyInput({
      key: "password",
      label: "Password",
      props: { type: "password", required: true },
    }),
  ];
  options: FormlyFormOptions = {};

  constructor(private readonly store: Store) {
    this.userProfile$ = this.store.select(selectUserProfile);
    this.loading$ = this.store.select(selectLoading);
  }

  onSubmit(model: Credential) {
    this.store.dispatch(loginActions.login({ credentials: model }));
  }

  logout() {
    this.store.dispatch(loginActions.logout());
  }
}
