import { createActionGroup, emptyProps } from "@ngrx/store";

export const bookPageActions = createActionGroup({
	source: "Page",
	events: {
		enter: emptyProps(),
	},
});
