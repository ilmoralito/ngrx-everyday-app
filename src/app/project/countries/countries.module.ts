import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CountriesRoutingModule } from "./countries-routing.module";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { CountriesComponent } from "./countries.component";
import { StoreModule } from "@ngrx/store";
import { countriesFeature } from "./state/countries.reducer";
import { EffectsModule } from "@ngrx/effects";
import { CountriesEffects } from "./state/countries.effects";

import * as fromPages from "./pages";

@NgModule({
  declarations: [CountriesComponent, ...fromPages.pages],
  imports: [
    CommonModule,
    StoreModule.forFeature(countriesFeature),
    EffectsModule.forFeature(CountriesEffects),
    SharedModule,
    CountriesRoutingModule,
  ],
})
export class CountriesModule {}
