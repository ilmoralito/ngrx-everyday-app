import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AnimesRoutingModule } from "./animes-routing.module";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { AnimesComponent } from "./animes.component";

@NgModule({
  declarations: [AnimesComponent],
  imports: [CommonModule, SharedModule, AnimesRoutingModule],
})
export class AnimesModule {}
