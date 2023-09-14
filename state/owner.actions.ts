import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Owner } from "src/app/project/owner/models/owner.model";

export const OwnerActions = createActionGroup({
    source: "Page",
    events: {
        init: emptyProps(),
        add: props<{ owner: Owner }>(),
        edit: props<{ owner: Owner }>(),
        delete: props<{ id: string }>(),
    },
});

export const OwnerAPIActions = createActionGroup({
    source: "API",
    events: {
        "success add": emptyProps(),
    },
});
