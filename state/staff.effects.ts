import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { StaffService } from "src/app/project/staff/services/staff/staff.service";
import { staffAPIActions, staffActions } from "./staff.actions";

@Injectable()
export class StaffEffects {
    private readonly actions$ = inject(Actions);
    private readonly staffService = inject(StaffService);

    enter$ = createEffect(() =>
        this.actions$.pipe(
            ofType(staffActions.enter),
            switchMap(() =>
                this.staffService.getAll().pipe(
                    map((value) =>
                        staffAPIActions.loadSuccessful({ payload: value }),
                    ),
                    catchError((error) =>
                        of(staffAPIActions.loadFailed({ payload: error })),
                    ),
                ),
            ),
        ),
    );

    // add$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(
    //             staffActions.add,
    //             switchMap((action) => this.staffService.add(action)),
    //         ),
    //     ),
    // );
}
