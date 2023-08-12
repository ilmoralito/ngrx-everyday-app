import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CountriesService } from "../services/countries/countries.service";
import { countriesActions } from "./countries.actions";
import { EMPTY, catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class CountriesEffects {
	private readonly actions$ = inject(Actions);
	private readonly countriesService = inject(CountriesService);

	load$ = createEffect(() =>
		this.actions$.pipe(
			ofType(countriesActions.enter),
			switchMap(() =>
				this.countriesService.getAll().pipe(
					map((countries) =>
						countriesActions.loadSuccess({ countries }),
					),
					catchError((error) =>
						of(countriesActions.loadFail({ error })),
					),
				),
			),
		),
	);

	set$ = createEffect(() =>
		this.actions$.pipe(
			ofType(countriesActions.set),
			switchMap((action) =>
				this.countriesService.getById(action.id).pipe(
					map((country) => countriesActions.setSuccess({ country })),
					catchError(() => EMPTY),
				),
			),
		),
	);
}
