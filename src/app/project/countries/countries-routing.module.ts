import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CountriesComponent } from "./countries.component";
import * as fromPages from "./pages";

const routes: Routes = [
  { path: "", component: CountriesComponent },
  { path: "edit/:id", component: fromPages.CountryEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
