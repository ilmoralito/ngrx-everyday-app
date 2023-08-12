import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsComponent } from "./products.component";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { name, reducer } from "./state/products.reducer";
import { EffectsModule } from "@ngrx/effects";
import { loadProducts$ } from "./state/products.effects";

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    StoreModule.forFeature(name, reducer),
    EffectsModule.forFeature({ loadProducts$ }),
  ],
})
export class ProductsModule {}
