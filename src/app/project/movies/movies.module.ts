import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MoviesRoutingModule } from "./movies-routing.module";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { MoviesComponent } from "./movies.component";

@NgModule({
  declarations: [MoviesComponent],
  imports: [CommonModule, SharedModule, MoviesRoutingModule],
})
export class MoviesModule {}
