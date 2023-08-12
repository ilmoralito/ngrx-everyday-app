import { createFeature, createReducer, createSelector, on } from "@ngrx/store";
import { countriesActions } from "./countries.actions";
import { Country } from "./country.model";

export interface CountriesState {
	collection: Country[];
	selectedCountryId: string | null;
	error: string | null;
	loading: boolean;
}

export const initialState: CountriesState = {
	collection: [],
	selectedCountryId: null,
	error: null,
	loading: false,
};

export const countriesFeature = createFeature({
	name: "countries",
	reducer: createReducer(
		initialState,
		on(countriesActions.enter, (state) => ({ ...state, loading: true })),
		on(countriesActions.loadSuccess, (state, action) => ({
			...state,
			collection: action.countries,
			loading: false,
		})),
		on(countriesActions.loadFail, (state, action) => ({
			...state,
			error: action.error,
			loading: false,
		})),
		on(countriesActions.setSuccess, (state, action) => ({
			...state,
			selectedCountryId: action.country.id,
		})),
		on(countriesActions.add, (state, action) => ({
			...state,
			collection: [
				...state.collection,
				{ id: crypto.randomUUID(), ...action.country },
			],
		})),
		on(countriesActions.edit, (state, action) => ({
			...state,
			collection: state.collection.map((country) =>
				country.id === action.country.id
					? { ...action.country }
					: { ...country },
			),
		})),
		on(countriesActions.delete, (state, action) => ({
			...state,
			collection: state.collection.filter(
				(country) => country.id !== action.id,
			),
		})),
	),
	extraSelectors: ({ selectCollection, selectSelectedCountryId }) => ({
		selectCountry: createSelector(
			selectCollection,
			selectSelectedCountryId,
			(collection, id) => collection.find((country) => country.id === id)!,
		),
	}),
});

export const {
	name,
	reducer,
	selectCountriesState,
	selectCollection,
	selectError,
	selectLoading,
	selectSelectedCountryId,
	selectCountry,
} = countriesFeature;
