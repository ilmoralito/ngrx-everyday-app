import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PeopleRoutingModule } from "./people-routing.module";
import { PeopleComponent } from "./people.component";
import { ArrayTypeComponent } from "./components/formly-custom-types/array.type/array.type.component";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { LetDirective } from "@ngrx/component";

@NgModule({
  declarations: [PeopleComponent, ArrayTypeComponent],
  imports: [CommonModule, SharedModule, LetDirective, PeopleRoutingModule],
})
export class PeopleModule {}
