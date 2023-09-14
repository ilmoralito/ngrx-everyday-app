import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MembersRoutingModule } from "./members-routing.module";
import { MembersComponent } from "./members.component";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { LetDirective } from "@ngrx/component";

@NgModule({
  declarations: [MembersComponent],
  imports: [CommonModule, SharedModule, LetDirective, MembersRoutingModule],
})
export class MembersModule {}
