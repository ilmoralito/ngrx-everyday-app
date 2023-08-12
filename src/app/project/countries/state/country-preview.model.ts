import { Country } from "./country.model";

export type CountryPreview = Omit<Country, "id">;
