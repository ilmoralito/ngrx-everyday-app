import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { UserProfile } from "./user.profile";
import { Credential } from "./credential.model";

export const loginActions = createActionGroup({
	source: "Login component",
	events: {
		login: props<{ credentials: Credential }>(),
		"Login success": props<{ payload: UserProfile }>(),
		"Login fail": props<{ payload: any }>(),
		logout: emptyProps(),
	},
});
