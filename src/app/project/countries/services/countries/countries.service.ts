import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { of } from "rxjs";
import { Country } from "../../state/country.model";

@Injectable({
  providedIn: "root",
})
export class CountriesService {
  private readonly httpClient = inject(HttpClient);

  private readonly countries = <Country[]>[
    { id: "1", name: "Nicaragua", code: "NI" },
    { id: "2", name: "Costa rica", code: "CR" },
    { id: "3", name: "Germany", code: "GE" },
  ];

  getAll() {
    return of(this.countries);
  }

  getById(id: string) {
    return of(this.countries.find((country) => country.id === id)!);
  }
}
