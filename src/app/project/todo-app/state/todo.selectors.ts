import {
    createFeatureSelector,
    createSelector
} from "@ngrx/store";
import { TodoEntity } from "./todo.models";
import { TodoState } from "./todo.reducer";

export const selectFeature = createFeatureSelector<TodoState>("todo");

export const selectFeatureFilter = createSelector(
	selectFeature,
	(state: TodoState) => state.filter
);

export const selectFeatureCollection = createSelector(
	selectFeature,
	(state: TodoState) => state.collection
);

export const selectFeatureData = createSelector(
	selectFeatureCollection,
	selectFeatureFilter,
	(collection: TodoEntity[], filter: "all" | "pending" | "done") => {
		if (filter === "all") {
			return collection;
		}

		if (filter === "pending") {
			return collection.filter((model) => !model.done);
		}

		return collection.filter((model) => model.done);
	}
);
