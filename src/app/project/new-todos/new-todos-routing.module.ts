import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewTodosComponent } from "./new-todos.component";

const routes: Routes = [{ path: "", component: NewTodosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTodosRoutingModule {}
