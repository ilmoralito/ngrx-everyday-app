import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NewTodosRoutingModule } from "./new-todos-routing.module";
import { NewTodosComponent } from "./new-todos.component";

import { StoreModule } from "@ngrx/store";
import { newTodoFeature } from "./state/new-todo.reducer";
import { EffectsModule } from "@ngrx/effects";
import { NewTodosEffects } from "./state/new-todo.effects";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { LetDirective } from "@ngrx/component";
import { NewTodoDetailComponent } from './components/new-todo-detail/new-todo-detail.component';

@NgModule({
  declarations: [NewTodosComponent, NewTodoDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(newTodoFeature),
    EffectsModule.forFeature(NewTodosEffects),
    LetDirective,
    NewTodosRoutingModule,
  ],
})
export class NewTodosModule {}
