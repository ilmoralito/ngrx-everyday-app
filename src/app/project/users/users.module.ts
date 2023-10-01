import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users.component";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [UsersComponent, UserListComponent],
  imports: [CommonModule, SharedModule, UsersRoutingModule],
})
export class UsersModule {}
