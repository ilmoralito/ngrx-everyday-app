import { createFeature, createReducer, on } from "@ngrx/store";
import { RoleModel } from "./role.model";
import { roleActions } from "./role.actions";

export interface RoleState {
	collection: RoleModel[];
	selectedRoleId: string | null;
}

export const initialState: RoleState = {
	collection: [],
	selectedRoleId: null,
};

export const rolesFeature = createFeature({
	name: "roles",
	reducer: createReducer(
		initialState,
		on(roleActions.loadSuccess, (state, action) => ({
			...state,
			collection: [...action.entities],
		})),
		on(roleActions.add, (state, action) => ({
			...state,
			collection: [...state.collection, action.entity],
		})),
		on(roleActions.edit, (state, action) => ({
			...state,
			collection: state.collection.map((entity) =>
				entity.id === action.entity.id
					? { ...action.entity }
					: { ...entity }
			),
		})),
		on(roleActions.delete, (state, action) => ({
			...state,
			collection: state.collection.filter(
				(entity) => entity.id !== action.id
			),
		})),
		on(roleActions.selectRole, (state, action) => ({
			...state,
			selectedRoleId: action.id,
		}))
	),
});

export const {
	name,
	reducer,
	selectRolesState,
	selectCollection,
	selectSelectedRoleId,
} = rolesFeature;
