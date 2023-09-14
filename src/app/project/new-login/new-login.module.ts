import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NewLoginRoutingModule } from "./new-login-routing.module";
import { SharedModule } from "src/app/shared/shared/shared.module";

import { NewLoginComponent } from "./new-login.component";
import { LetDirective } from "@ngrx/component";
import { NameEditorComponent } from './components/name-editor/name-editor.component';

@NgModule({
  declarations: [NewLoginComponent, NameEditorComponent],
  imports: [CommonModule, SharedModule, LetDirective, NewLoginRoutingModule],
})
export class NewLoginModule {}
