import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CategoriesRoutingModule } from "./categories-routing.module";
import { CategoriesComponent } from "./categories.component";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { LetDirective } from "@ngrx/component";
import { StoreModule } from "@ngrx/store";
import { categoriesFeature } from "./state/categories.reducer";
import { EffectsModule } from "@ngrx/effects";
import { CategoriesEffects } from "./state/categories.effects";
import { MessageService } from "primeng/api";

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    SharedModule,
    LetDirective,
    StoreModule.forFeature(categoriesFeature),
    EffectsModule.forFeature([CategoriesEffects]),
    CategoriesRoutingModule,
  ],
})
export class CategoriesModule {}
