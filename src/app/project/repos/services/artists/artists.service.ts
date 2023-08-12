import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { map, of } from "rxjs";
import { Artist } from "../../state/artist.model";

export interface Common {
  label: string;
  value: string;
}

export interface Country extends Common {}

export interface City extends Common {
  country: string;
}

@Injectable({
  providedIn: "root",
})
export class ArtistsService {
  private readonly httpClient = inject(HttpClient);

  private readonly cities: City[] = [
    { label: "Leon", value: "1", country: "NI" },
    { label: "Managua", value: "2", country: "NI" },
    { label: "Chinandega", value: "3", country: "NI" },
    { label: "San Jose", value: "4", country: "CR" },
    { label: "Alajuela", value: "5", country: "CR" },
    { label: "Panama", value: "6", country: "PN" },
  ];

  constructor() {}

  getAll() {
    const artists: Artist[] = [
      {
        id: "1",
        firstName: "ada",
        lastName: "wong",
        location: { address: "town", city: "ballon" },
        type: { id: "1", displayName: "abc", name: "abc", links: ["a", "b"] },
      },
      {
        id: "2",
        firstName: "leon",
        lastName: "kennedy",
        location: { address: "city", city: "racoon" },
        type: {
          id: "2",
          displayName: "xyz",
          name: "xml",
          links: [],
        },
      },
    ];

    return of(artists);
  }

  getCountries() {
    return of(<Country[]>[
      { label: "Nicaragua", value: "NI" },
      { label: "Costa Rica", value: "CR" },
      { label: "Panama", value: "PN" },
    ]);
  }

  getCities() {
    return of(this.cities);
  }

  getCountryCities(country: string) {
    console.log(country)
    return of(this.cities.filter((city) => city.country === country));
  }

  getViaTypes() {
    return this.httpClient
      .get<{ codi: string; nom: string; abreviatura: string }[]>(
        `https://analisi.transparenciacatalunya.cat/resource/gjnk-vmhw.json`,
      )
      .pipe(
        map((values) =>
          values.map((value) => ({ label: value.nom, value: value.codi })),
        ),
      );
  }
}
