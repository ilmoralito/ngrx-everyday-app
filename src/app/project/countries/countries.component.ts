import { Component, OnInit, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { countriesActions } from "./state/countries.actions";
import { selectCollection } from "./state/countries.reducer";
import { Country } from "./state/country.model";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { formlyInput } from "../repos/forms/artist.form";
import { CountryPreview } from "./state/country-preview.model";

@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.scss"],
})
export class CountriesComponent implements OnInit {
  collection$!: Observable<Country[]>;

  form = new FormGroup({});
  model: CountryPreview = { name: "", code: "" };
  fields: FormlyFieldConfig[] = [
    formlyInput({ key: "name", label: "Name", props: { required: true } }),
    formlyInput({ key: "code", label: "Code", props: { required: true } }),
  ];
  options: FormlyFormOptions = {};

  private readonly store = inject(Store);

  constructor() {
    this.collection$ = this.store.select(selectCollection);
  }

  ngOnInit() {
    this.store.dispatch(countriesActions.enter());
  }

  onSubmit(country: CountryPreview) {
    this.store.dispatch(countriesActions.add({ country }));
    this.options.resetModel?.();
    this.form.reset();
  }

  onDelete(id: string) {
    this.store.dispatch(countriesActions.delete({ id }));
  }
}
