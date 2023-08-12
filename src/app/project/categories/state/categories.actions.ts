import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Category } from "./category.model";

export const categoriesActions = createActionGroup({
	source: "Category List",
	events: {
		enter: emptyProps(),
		"Load Success": props<{ categories: Category[] }>(),
		"Load Failure": props<{ error: string }>(),
		add: props<{ category: Category }>(),
		"Add Success": props<{ category: Category }>(),
		delete: props<{ id: string }>(),
		"Delete Success": props<{ id: string }>(),
		set: props<{ id: string }>(),
	},
});
