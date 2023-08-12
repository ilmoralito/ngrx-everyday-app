import { createAction, props } from "@ngrx/store";

export const edit = createAction("[Sample Page] edit", props<{ id: string }>());
export const remove = createAction(
	"[Sample page] delete",
	props<{ id: string }>()
);
