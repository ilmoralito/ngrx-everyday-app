import { createReducer, on } from "@ngrx/store";
import { counterActions } from "./counter.actions";

export interface CounterState {
	count: number;
}

const initialState: CounterState = { count: 0 };

export const counterReducer = createReducer(
	initialState,
	on(counterActions.increment, (state) => ({ count: state.count + 1 })),
	on(counterActions.decrement, (state) => ({ count: state.count - 1 })),
	on(counterActions.reset, () => ({ count: 0 })),
	on(counterActions.set, (state, { value }) => ({
		count: state.count + value,
	}))
);
