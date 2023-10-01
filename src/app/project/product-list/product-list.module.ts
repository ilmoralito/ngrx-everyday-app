import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductListRoutingModule } from "./product-list-routing.module";
import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, FilterPipe],
  imports: [CommonModule, SharedModule, ProductListRoutingModule],
})
export class ProductListModule {}
