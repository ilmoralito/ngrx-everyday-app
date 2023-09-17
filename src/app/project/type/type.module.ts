import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TypeRoutingModule } from "./type-routing.module";
import { TypeComponent } from "./type.component";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { MyTypeComponent } from "./components/type/type.component";
import { TypeFilterComponent } from "./components/type-filter/type-filter.component";
import { TypeInlineEditComponent } from "./components/type-inline-edit/type-inline-edit.component";

@NgModule({
  declarations: [
    TypeComponent,
    MyTypeComponent,
    TypeFilterComponent,
    TypeInlineEditComponent,
  ],
  imports: [CommonModule, SharedModule, TypeRoutingModule],
})
export class TypeModule {}
