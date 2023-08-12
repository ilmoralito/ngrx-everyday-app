import { createReducer, on } from "@ngrx/store";
import { User } from "./auth.models";
import { authActions } from "./auth.actions";

export interface AuthState {
	loading: boolean;
	user: User | null;
	error: any;
}

export const initialState: AuthState = {
	loading: false,
	user: null,
	error: null,
};

export const authReducer = createReducer(
	initialState,
	on(authActions.login, (state) => ({ ...state, loading: true })),
	on(authActions.loginSuccess, (state, { payload }) => ({
		...state,
		loading: false,
		user: payload,
	})),
	on(authActions.loginFailure, (state, { payload }) => ({
		...state,
		loading: false,
		error: payload,
	}))
);
