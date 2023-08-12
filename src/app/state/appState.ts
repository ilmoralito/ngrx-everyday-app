import { AuthState } from "../project/auth/+state/auth.reducer";
import { TodoState } from "../project/todo-app/state/todo.reducer";
import { CounterState } from "./counter.reducer";

export interface AppState {
	counter: CounterState;
	todo: TodoState;
	auth: AuthState
}
