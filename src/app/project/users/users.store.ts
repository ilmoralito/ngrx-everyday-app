import { Injectable } from "@angular/core";
import { UserModel } from "./user.model";
import { ComponentStore } from "@ngrx/component-store";

export interface UserState {
	collection: UserModel[];
	currentUserId: string | null;
}

export const initialState: UserState = {
	collection: [],
	currentUserId: null,
};

@Injectable()
export class UserStore extends ComponentStore<UserState> {
	users$ = this.select((state) => state.collection);
	currentUserId$ = this.select((state) => state.currentUserId);
	currentUser$ = this.select(this.users$, this.currentUserId$, (users, id) =>
		users.find((user) => user.id === id)
	);

	constructor() {
		super(initialState);
	}

	add(user: UserModel) {
		this.setState((state) => ({
			...state,
			collection: [...state.collection, user],
		}));
	}

	set(id: string | null) {
		this.patchState({ currentUserId: id });
	}

	update = this.updater((state, userModel: UserModel) => ({
		...state,
		collection: state.collection.map((user) =>
			user.id === userModel.id ? { ...userModel } : { ...user }
		),
	}));

	delete = this.updater((state, id: string) => ({
		...state,
		collection: state.collection.filter((user) => user.id !== id),
	}));
}
