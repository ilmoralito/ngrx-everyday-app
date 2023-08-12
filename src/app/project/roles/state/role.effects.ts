import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RolesService } from "../services/roles/roles.service";
import { roleActions } from "./role.actions";
import { EMPTY, catchError, exhaustMap, map } from "rxjs";

@Injectable()
export class RoleEffects {
	load$ = createEffect(() =>
		this.actions$.pipe(
			ofType(roleActions.init),
			exhaustMap(() =>
				this.roleService.getAll().pipe(
					map((roles) =>
						roleActions.loadSuccess({ entities: roles })
					),
					catchError(() => EMPTY)
				)
			)
		)
	);

	// add$ = createEffect(() =>
	// 	this.actions$.pipe(
	// 		ofType(roleActions.add),
	// 		exhaustMap((action) =>
	// 			this.roleService.add(action.entity).pipe(() => EMPTY)
	// 		)
	// 	)
	// );

	constructor(
		private readonly actions$: Actions,
		private readonly roleService: RolesService
	) {}
}
