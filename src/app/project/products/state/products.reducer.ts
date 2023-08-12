import { createFeature, createReducer, createSelector, on } from "@ngrx/store";
import { Product } from "./product.model";
import { productsActions } from "./products.actions";

export interface ProductsState {
	collection: Product[];
	currentProductId: string | null;
	error: string | null;
}

export const initialState: ProductsState = {
	collection: [],
	currentProductId: null,
	error: null,
};

export const productsFeature = createFeature({
	name: "products",
	reducer: createReducer(
		initialState,
		on(productsActions.enter, (state) => ({
			...state,
			collection: [],
		})),
		on(productsActions.toggle, (state, action) => {
			return {
				...state,
				collection: state.collection.map((product) =>
					product.id === action.id
						? { ...product, name: product.name.toUpperCase() }
						: { ...product }
				),
			};
		}),
		on(productsActions.add, (state, action) => {
			return {
				...state,
				collection: [...state.collection, action.model],
			};
		}),
		on(productsActions.delete, (state, action) => {
			return {
				...state,
				collection: state.collection.filter(
					(product) => product.id !== action.id
				),
			};
		}),
		on(productsActions.select, (state, action) => ({
			...state,
			currentProductId: action.id,
		})),
		on(productsActions.loadSuccess, (state, action) => ({
			...state,
			collection: action.products,
		})),
		on(productsActions.loadFailure, (state, action) => ({
			...state,
			error: action.error,
		}))
	),
	extraSelectors: ({ selectCollection, selectCurrentProductId }) => ({
		selectCurrentProduct: createSelector(
			selectCollection,
			selectCurrentProductId,
			(products, id) => products.find((product) => product.id === id)
		),
	}),
});

export const {
	name,
	reducer,
	selectProductsState,
	selectCollection,
	selectCurrentProductId,
	selectCurrentProduct,
	selectError,
} = productsFeature;
