import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { RoleModel } from "./role.model";

export const roleActions = createActionGroup({
	source: "Roles component",
	events: {
		init: emptyProps(),
		loadSuccess: props<{ entities: RoleModel[] }>(),
		add: props<{ entity: RoleModel }>(),
		edit: props<{ entity: RoleModel }>(),
		delete: props<{ id: string }>(),
		selectRole: props<{ id: string }>(),
	},
});
