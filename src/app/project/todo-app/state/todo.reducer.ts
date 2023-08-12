import { createReducer, on } from "@ngrx/store";
import { TodoEntity } from "./todo.models";
import { TodoActions } from "./todo.actions";

export interface TodoState {
	collection: TodoEntity[];
	filter: "all" | "pending" | "done";
}

export const initialState: TodoState = {
	collection: [],
	filter: "all",
};

export const todoReducer = createReducer(
	initialState,
	on(TodoActions.init, (state) => ({ ...state, collection: [] })),
	on(TodoActions.filter, (state, {value}) => ({...state, filter: value})),
	on(TodoActions.add, (state, { model }) => ({
		...state,
		collection: [...state.collection, model],
	})),
	on(TodoActions.update, (state, { model }) => ({
		...state,
		collection: state.collection.map((entity) =>
			entity.id === model.id ? { ...model } : { ...entity }
		),
	})),
	on(TodoActions.delete, (state, { id }) => ({
		...state,
		collection: state.collection.filter((model) => model.id !== id),
	})),
	on(TodoActions.toggle, (state, { id }) => ({
		...state,
		collection: state.collection.map((model) =>
			model.id === id ? { ...model, done: !model.done } : { ...model }
		),
	}))
);
