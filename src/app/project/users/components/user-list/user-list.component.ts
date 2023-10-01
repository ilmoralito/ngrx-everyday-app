import { Component, HostBinding, Input } from "@angular/core";
import { User } from "../../services/user.service";
import { Highlightable, ListKeyManagerOption } from "@angular/cdk/a11y";

@Component({
  selector: "app-user-list",
  template: ` <p>{{ user.name.first }}</p> `,
  styles: [],
})
export class UserListComponent implements Highlightable, ListKeyManagerOption {
  @Input() user!: User;
  @Input() disabled = false;

  private _isActive = false;

  @HostBinding("class.active") get isActive() {
    return this._isActive;
  }

  setActiveStyles() {
    this._isActive = true;
  }

  setInactiveStyles() {
    this._isActive = false;
  }
}
