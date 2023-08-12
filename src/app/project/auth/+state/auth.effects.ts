import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { AuthService } from "../services/auth/auth.service";
import { authActions } from "./auth.actions";

@Injectable()
export class AuthEffects {
	private readonly actions$ = inject(Actions);
	private readonly authService = inject(AuthService);

	login$ = createEffect(() =>
		this.actions$.pipe(
			ofType(authActions.login),
			exhaustMap((action) =>
				this.authService.login(action.payload).pipe(
					map((payload) => {
						console.log('payload', payload)
						return authActions.loginSuccess({ payload });
					}),
					catchError((error) =>
						of(authActions.loginFailure({ payload: error }))
					)
				)
			)
		)
	);
}
