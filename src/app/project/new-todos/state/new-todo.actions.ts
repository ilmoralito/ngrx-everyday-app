import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Todo } from "./todo.model";

export const newTodoActions = createActionGroup({
	source: "Todo component",
	events: {
		enter: emptyProps(),
		"load success": props<{ todos: Todo[] }>(),
		"load fail": props<{ error: string }>(),
		set: props<{ id: string }>(),
		filter: props<{ value: "all" | "completed" | "pending" }>(),
		add: props<{ todo: Todo }>(),
		edit: props<{ todo: Todo }>(),
		toggle: props<{ id: string }>(),
		delete: props<{ id: string }>(),
	},
});
