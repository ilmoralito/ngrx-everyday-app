import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Country } from "../../state/country.model";
import { countriesActions } from "../../state/countries.actions";
import { selectCountry } from "../../state/countries.reducer";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { formlyInput } from "src/app/shared/shared/formly-utils/formly-input";

@Component({
  selector: "app-country-edit",
  templateUrl: "./country-edit.component.html",
  styleUrls: ["./country-edit.component.scss"],
})
export class CountryEditComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly store = inject(Store);

  form = new FormGroup({});
  country$: Observable<Country>;
  fields: FormlyFieldConfig[] = [
    {
      key: "id",
    },
    formlyInput({ key: "name", label: "Name", props: { required: true } }),
    formlyInput({ key: "code", label: "Code", props: { required: true } }),
  ];
  options: FormlyFormOptions = {};

  constructor() {
    this.country$ = this.store.select(selectCountry);
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id")!;

    this.store.dispatch(countriesActions.set({ id }));
  }

  onSubmit(model: Country) {
    console.log(model);
  }
}
