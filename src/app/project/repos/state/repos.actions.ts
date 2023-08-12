import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { RepoModel } from "./repo.model";

export const ReposActions = createActionGroup({
	source: "Repos",
	events: {
		Enter: emptyProps(),
		"Load Success": props<{ repos: RepoModel[] }>(),
	},
});
