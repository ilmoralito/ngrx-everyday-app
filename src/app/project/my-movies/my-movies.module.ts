import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MyMoviesRoutingModule } from "./my-movies-routing.module";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { MyMoviesComponent } from "./my-movies.component";
import { LetDirective } from "@ngrx/component";
import { MyMoviesDetailComponent } from "./pages/my-movies-detail/my-movies-detail.component";

@NgModule({
  declarations: [MyMoviesComponent, MyMoviesDetailComponent],
  imports: [CommonModule, SharedModule, LetDirective, MyMoviesRoutingModule],
})
export class MyMoviesModule {}
