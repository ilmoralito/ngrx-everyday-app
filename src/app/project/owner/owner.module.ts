import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/shared/shared/shared.module";
import { OwnerDetailComponent } from "./components/owner-detail/owner-detail.component";
import { OwnerRoutingModule } from "./owner-routing.module";
import { OwnerComponent } from "./owner.component";

import { OwnerFilterComponent } from './components/owner-filter/owner-filter.component';

import * as fromDirectives from "./directives";
import { OwnerInlineEditComponent } from './components/owner-inline-edit/owner-inline-edit.component';

@NgModule({
  declarations: [
    OwnerComponent,
    OwnerDetailComponent,
    ...fromDirectives.directives,
    OwnerFilterComponent,
    OwnerInlineEditComponent,
  ],
  imports: [CommonModule, SharedModule, OwnerRoutingModule],
})
export class OwnerModule {}
