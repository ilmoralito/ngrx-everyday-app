import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { LetDirective } from "@ngrx/component";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { StaffEffects } from "state/staff.effects";
import { staffFeature } from "state/staff.reducer";
import { StaffRoutingModule } from "./staff-routing.module";
import { StaffComponent } from "./staff.component";

import * as fromComponents from "./components";
import * as fromDirectives from "./directives";

@NgModule({
  declarations: [
    StaffComponent,
    ...fromComponents.components,
    ...fromDirectives.directives,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LetDirective,
    StaffRoutingModule,
    StoreModule.forFeature(staffFeature),
    EffectsModule.forFeature([StaffEffects]),
  ],
})
export class StaffModule {}
