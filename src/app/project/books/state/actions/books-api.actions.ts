import { createActionGroup, props } from "@ngrx/store";
import { Book } from "../models/book.model";

export const bookApiActions = createActionGroup({
	source: "API",
	events: {
		"Load Success": props<{ books: Book[] }>(),
		"Load Fail": props<{ error: any }>(),
	},
});
