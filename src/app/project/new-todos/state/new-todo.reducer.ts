import { createFeature, createReducer, createSelector, on } from "@ngrx/store";
import { Todo } from "./todo.model";
import { newTodoActions } from "./new-todo.actions";

export interface NewTodoState {
	todos: Todo[];
	selectedNewTodoId: string | null;
	filter: "all" | "completed" | "pending";
	loading: boolean;
	error: string | null;
}

export const initialState: NewTodoState = {
	todos: [],
	selectedNewTodoId: null,
	filter: "all",
	loading: false,
	error: null,
};

export const newTodoFeature = createFeature({
	name: "todo",
	reducer: createReducer(
		initialState,
		on(newTodoActions.enter, (state) => ({ ...state, loading: true })),
		on(newTodoActions.loadSuccess, (state, action) => ({
			...state,
			todos: action.todos,
			loading: false,
		})),
		on(newTodoActions.loadFail, (state, action) => ({
			...state,
			error: action.error,
			loading: false,
		})),
		on(newTodoActions.add, (state, action) => ({
			...state,
			todos: [...state.todos, action.todo],
		})),
		on(newTodoActions.filter, (state, action) => ({
			...state,
			filter: action.value,
		})),
		on(newTodoActions.set, (state, action) => ({
			...state,
			selectedNewTodoId: action.id,
		})),
		on(newTodoActions.edit, (state, action) => ({
			...state,
			todos: state.todos.map((todo) =>
				todo.id === action.todo.id ? { ...action.todo } : { ...todo },
			),
		})),
		on(newTodoActions.toggle, (state, action) => ({
			...state,
			todos: state.todos.map((todo) =>
				todo.id === action.id
					? { ...todo, completed: !todo.completed }
					: { ...todo },
			),
		})),
		on(newTodoActions.delete, (state, action) => ({
			...state,
			todos: state.todos.filter((todo) => todo.id !== action.id),
		})),
	),
	extraSelectors: ({
		selectTodos,
		selectFilter,
		selectSelectedNewTodoId,
	}) => ({
		selectSelectedNewTodo: createSelector(
			selectTodos,
			selectSelectedNewTodoId,
			(todos, id) => todos.find((todo) => todo.id === id)!,
		),
		selectFilteredTodos: createSelector(
			selectTodos,
			selectFilter,
			(todos, filter) => {
				if (filter === "completed") {
					return todos.filter((todo) => todo.completed);
				}

				if (filter === "pending") {
					return todos.filter((todo) => !todo.completed);
				}

				return todos;
			},
		),
	}),
});

export const {
	name,
	reducer,
	selectTodoState,
	selectTodos,
	selectFilter,
	selectError,
	selectLoading,
	selectFilteredTodos,
	selectSelectedNewTodoId,
	selectSelectedNewTodo,
} = newTodoFeature;
