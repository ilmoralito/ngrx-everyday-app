import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Product } from "./product.model";

export const productsActions = createActionGroup({
	source: "[Products Page]",
	events: {
		enter: emptyProps(),
		select: props<{ id: string }>(),
		toggle: props<{ id: string }>(),
		add: props<{ model: Product }>(),
		delete: props<{ id: string }>(),
		"Load Success": props<{ products: Product[] }>(),
		"Load Failure": props<{ error: string }>(),
	},
});

export const productsAPIActions = createActionGroup({
	source: "[Products API]",
	events: {
		enter: emptyProps(),
		"Load Success": props<{ products: Product[] }>(),
		"Load Failure": props<{ error: string }>(),
	},
});
