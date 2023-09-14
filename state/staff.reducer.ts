import { createFeature, createReducer, on } from "@ngrx/store";
import { Staff } from "./staff.model";
import { staffAPIActions } from "./staff.actions";

export interface StaffState {
    collection: Staff[];
    currentSelectedStaff: string | null;
}

export const initialState: StaffState = {
    collection: [],
    currentSelectedStaff: null,
};

export const staffFeature = createFeature({
    name: "staff",
    reducer: createReducer(
        initialState,
        on(staffAPIActions.loadSuccessful, (state, action) => ({
            ...state,
            collection: action.payload,
        })),
    ),
});

export const {
    name,
    reducer,
    selectCollection,
    selectCurrentSelectedStaff,
    selectStaffState,
} = staffFeature;
