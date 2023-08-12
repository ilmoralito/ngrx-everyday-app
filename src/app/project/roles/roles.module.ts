import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RolesRoutingModule } from "./roles-routing.module";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { RolesComponent } from "./roles.component";
import { StoreModule } from "@ngrx/store";
import { rolesFeature } from "./state/role.reducer";
import { EffectsModule } from "@ngrx/effects";
import { RoleEffects } from "./state/role.effects";

import * as fromPages from "./pages";

@NgModule({
  declarations: [RolesComponent, ...fromPages.components],
  imports: [
    CommonModule,
    SharedModule,
    RolesRoutingModule,
    StoreModule.forFeature(rolesFeature),
    EffectsModule.forFeature(RoleEffects),
  ],
})
export class RolesModule {}
