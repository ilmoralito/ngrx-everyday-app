import { createFeature, createReducer, on } from "@ngrx/store";
import { UserProfile } from "./user.profile";
import { loginActions } from "./login.actions";

export interface LoginState {
	userProfile: UserProfile | null;
	loading: boolean;
	error: any;
}

export const initialState: LoginState = {
	userProfile: null,
	loading: false,
	error: null,
};

export const loginFeature = createFeature({
	name: "login",
	reducer: createReducer(
		initialState,
		on(loginActions.loginSuccess, (state, action) => ({
			...state,
			loading: false,
			userProfile: action.payload,
		})),
		on(loginActions.loginFail, (state, action) => ({
			...state,
			loading: false,
			error: action.payload,
		})),
		on(loginActions.logout, () => ({
			userProfile: null,
			loading: false,
			error: null,
		}))
	),
});

export const {
	name,
	reducer,
	selectError,
	selectLoading,
	selectUserProfile,
	selectLoginState,
} = loginFeature;
