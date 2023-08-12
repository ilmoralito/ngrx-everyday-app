import { createActionGroup, props } from "@ngrx/store";
import { User } from "./auth.models";

export const authActions = createActionGroup({
	source: "Auth/Component",
	events: {
		login: props<{ payload: Credential }>(),
		"login success": props<{ payload: User }>(),
		"login failure": props<{ payload: any }>(),
	},
});
