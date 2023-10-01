import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { UserStore } from "./users.store";
import { UserModel } from "./user.model";
import { User, UserService } from "./services/user.service";
import { first } from "rxjs";
import { ListKeyManager } from "@angular/cdk/a11y";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UP_ARROW, DOWN_ARROW, ENTER } from "@angular/cdk/keycodes";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
  providers: [UserStore],
})
export class UsersComponent implements OnInit {
  loading = false;
  userList: User[] = [];
  keyboardEventsManager!: ListKeyManager<any>;
  users$ = this.userStore.users$;
  currentUser$ = this.userStore.currentUser$;
  @ViewChildren(UserListComponent) collection!: QueryList<UserListComponent>;

  constructor(
    private readonly userStore: UserStore,
    private readonly userService: UserService,
  ) {}

  ngOnInit() {
    this.loading = true;
    this.userService
      .getUsers()
      .pipe(first())
      .subscribe({
        next: (result) => {
          this.userList = result.results;
          this.keyboardEventsManager = new ListKeyManager(this.collection);
          this.loading = false;
        },
      });
  }

  onKeyUp(event: KeyboardEvent) {
    event.stopImmediatePropagation();

    if (this.keyboardEventsManager) {
      if (event.keyCode === DOWN_ARROW || event.keyCode === UP_ARROW) {
        this.keyboardEventsManager.onKeydown(event);
      } else if (event.keyCode === ENTER) {
        this.keyboardEventsManager.activeItem.selectItem();
      }
    }
  }

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
