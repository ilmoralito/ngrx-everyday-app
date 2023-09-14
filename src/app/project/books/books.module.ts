import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BooksRoutingModule } from "./books-routing.module";
import { BooksComponent } from "./books.component";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { LetDirective } from "@ngrx/component";

@NgModule({
  declarations: [BooksComponent],
  imports: [CommonModule, SharedModule, LetDirective, BooksRoutingModule],
})
export class BooksModule {}
