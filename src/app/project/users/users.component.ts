import { Component, OnInit } from "@angular/core";
import { UserStore } from "./users.store";
import { UserModel } from "./user.model";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
  providers: [UserStore],
})
export class UsersComponent implements OnInit {
  users$ = this.userStore.users$;
  currentUser$ = this.userStore.currentUser$;

  constructor(private readonly userStore: UserStore) {}

  ngOnInit() {}

  onAdd() {
    const id = Math.floor(Math.random() * 100).toString();

    this.userStore.add({
      id,
      username: "ada",
      email: "ada.wong@domain.com",
      firstName: "ada",
      lastName: "wong",
    });
  }

  onSelect(id: string | null) {
    this.userStore.set(id);
  }

  onUpdate(user: UserModel) {
    this.userStore.update({ ...user, lastName: "Kennedy" });
  }

  onClear() {
    this.userStore.set(null);
  }

  onDelete(id: string) {
    this.userStore.delete(id);
  }
}
