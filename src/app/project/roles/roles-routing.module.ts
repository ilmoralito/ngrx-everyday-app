import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RolesComponent } from "./roles.component";
import { RolesCreateComponent } from "./pages";

const routes: Routes = [
  { path: "", component: RolesComponent },
  { path: "create", component: RolesCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolesRoutingModule {}
