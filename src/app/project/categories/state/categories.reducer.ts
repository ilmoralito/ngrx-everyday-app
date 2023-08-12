import { createFeature, createReducer, createSelector, on } from "@ngrx/store";
import { Category } from "./category.model";
import { categoriesActions } from "./categories.actions";

export interface CategoriesState {
	categories: Category[];
	currentCategoryId: string | null;
	loading: boolean;
	error: string | null;
}

export const initialState: CategoriesState = {
	categories: [],
	currentCategoryId: null,
	loading: false,
	error: null,
};

export const categoriesFeature = createFeature({
	name: "categories",
	reducer: createReducer(
		initialState,
		on(categoriesActions.enter, (state) => ({ ...state, loading: true })),
		on(categoriesActions.loadSuccess, (state, action) => ({
			...state,
			categories: action.categories,
			loading: false,
		})),
		on(categoriesActions.loadFailure, (state, action) => ({
			...state,
			loading: false,
			error: action.error,
		})),
		on(categoriesActions.add, (state) => ({
			...state,
			loading: true,
		})),
		on(categoriesActions.addSuccess, (state, action) => ({
			...state,
			categories: [...state.categories, action.category],
			loading: false,
		})),
		on(categoriesActions.set, (state, action) => ({
			...state,
			currentCategoryId: action.id,
		})),
		on(categoriesActions.delete, (state) => ({
			...state,
			loading: true,
		})),
		on(categoriesActions.deleteSuccess, (state, action) => ({
			...state,
			categories: state.categories.filter(
				(category) => category.id !== action.id,
			),
		})),
	),
	extraSelectors: ({ selectCategories, selectCurrentCategoryId }) => ({
		selectCurrentCategory: createSelector(
			selectCategories,
			selectCurrentCategoryId,
			(categories, id) =>
				categories.find((category) => category.id === id),
		),
	}),
});

export const {
	name,
	reducer,
	selectCategoriesState,
	selectCategories,
	selectCurrentCategoryId,
	selectCurrentCategory,
} = categoriesFeature;
