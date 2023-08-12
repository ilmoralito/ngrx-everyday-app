import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Country } from "./country.model";
import { CountryPreview } from "./country-preview.model";

export const countriesActions = createActionGroup({
	source: "Country Component",
	events: {
		enter: emptyProps(),
		"load success": props<{ countries: Country[] }>(),
		"load fail": props<{ error: string }>(),
		set: props<{ id: string }>(),
		"set success": props<{ country: Country }>(),
		add: props<{ country: CountryPreview }>(),
		edit: props<{ country: Country }>(),
		delete: props<{ id: string }>(),
	},
});
