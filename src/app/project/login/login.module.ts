import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { EffectsModule } from "@ngrx/effects";
import { LoginEffects } from "./state/login.effects";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { name, reducer } from "./state/login.reducer";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    StoreModule.forFeature(name, reducer),
    EffectsModule.forFeature(LoginEffects),
  ],
})
export class LoginModule {}
