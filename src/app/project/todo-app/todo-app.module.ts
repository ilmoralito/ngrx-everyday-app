import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { StoreModule } from "@ngrx/store";
import { todoReducer } from "./state/todo.reducer";
import { TodoAppRoutingModule } from "./todo-app-routing.module";
import { TodoAppComponent } from "./todo-app.component";

@NgModule({
  declarations: [TodoAppComponent],
  imports: [
    CommonModule,
    TodoAppRoutingModule,
    StoreModule.forFeature("todo", todoReducer),
  ],
})
export class TodoAppModule {}
