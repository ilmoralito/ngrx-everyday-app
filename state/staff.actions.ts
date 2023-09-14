import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Staff, StaffPreview } from "./staff.model";

export const staffActions = createActionGroup({
    source: "Staff component",
    events: {
        enter: emptyProps(),
        add: props<{ payload: StaffPreview }>(),
        delete: props<{ id: string }>(),
    },
});

export const staffAPIActions = createActionGroup({
    source: "Staff API",
    events: {
        "load successful": props<{ payload: Staff[] }>(),
        "load failed": props<{ payload: any }>(),
    },
});
