import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { TodoEntity } from "./todo.models";

export const TodoActions = createActionGroup({
	source: "Todo/Component",
	events: {
		init: emptyProps(),
		add: props<{ model: TodoEntity }>(),
		update: props<{ model: TodoEntity }>(),
		delete: props<{ id: string }>(),
		toggle: props<{ id: string }>(),
		filter: props<{ value: "all" | "pending" | "done" }>(),
	},
});
