import { createAction, props } from "@ngrx/store";

export const enter = createAction("[Sample Page] enter");
export const add = createAction(
	"[Sample Page] add",
	props<{ value: string }>()
);

