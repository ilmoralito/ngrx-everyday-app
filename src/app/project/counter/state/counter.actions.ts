import {
    createActionGroup,
    emptyProps,
    props
} from "@ngrx/store";

export const counterActions = createActionGroup({
	source: "Counter components",
	events: {
		increment: emptyProps(),
		decrement: emptyProps(),
		reset: emptyProps(),
		set: props<{ value: number }>(),
	},
});
