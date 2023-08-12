import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LoginService } from "../services/login.service";
import { loginActions } from "./login.actions";
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class LoginEffects {
	$login = createEffect(() =>
		this.actions$.pipe(
			ofType(loginActions.login),
			exhaustMap((action) =>
				this.loginService.login(action.credentials).pipe(
					map((response) => {
						console.log("response", response);

						return loginActions.loginSuccess({
							payload: {
								id: crypto.randomUUID(),
								username: "ada",
								email: "ada.wong@domain.com",
								firstName: "ada",
								lastName: "wong",
							},
						});
					}),
					catchError((error) => {
						return of(loginActions.loginFail({ payload: error }));
					})
				)
			)
		)
	);

	constructor(
		private readonly loginService: LoginService,
		private readonly actions$: Actions
	) {}
}
