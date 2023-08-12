import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/shared/shared/shared.module";
import { ReposRoutingModule } from "./repos-routing.module";
import { ReposComponent } from "./repos.component";

@NgModule({
  declarations: [ReposComponent],
  imports: [CommonModule, SharedModule, ReposRoutingModule],
})
export class ReposModule {}
