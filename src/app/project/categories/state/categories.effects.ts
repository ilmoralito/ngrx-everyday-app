import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MessageService } from "primeng/api";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { CategoriesService } from "../services/categories/categories.service";
import { categoriesActions } from "./categories.actions";

@Injectable()
export class CategoriesEffects {
	enter$ = createEffect(() =>
		this.actions$.pipe(
			ofType(categoriesActions.enter),
			switchMap(() =>
				this.categoriesService.getAll().pipe(
					map((categories) =>
						categoriesActions.loadSuccess({ categories }),
					),
					catchError((error: HttpErrorResponse) =>
						of(
							categoriesActions.loadFailure({
								error: error.message,
							}),
						),
					),
				),
			),
		),
	);

	add$ = createEffect(() =>
		this.actions$.pipe(
			ofType(categoriesActions.add),
			switchMap((action) =>
				this.categoriesService.add(action.category).pipe(
					map((category) =>
						categoriesActions.addSuccess({ category }),
					),
					catchError((error: HttpErrorResponse) =>
						of(
							categoriesActions.loadFailure({
								error: error.message,
							}),
						),
					),
				),
			),
		),
	);

	delete$ = createEffect(() =>
		this.actions$.pipe(
			ofType(categoriesActions.delete),
			switchMap((action) =>
				this.categoriesService.delete(action.id).pipe(
					map(() =>
						categoriesActions.deleteSuccess({ id: action.id }),
					),
					catchError((error: HttpErrorResponse) =>
						of(
							categoriesActions.loadFailure({
								error: error.message,
							}),
						),
					),
				),
			),
		),
	);

	handleSuccessMessage = createEffect(
		() =>
			this.actions$.pipe(
				ofType(
					categoriesActions.addSuccess,
					categoriesActions.deleteSuccess,
				),
				tap(({}) =>
					this.messageService.add({
						severity: "success",
						summary: "Success",
					}),
				),
			),
		{ dispatch: false },
	);

	constructor(
		private readonly actions$: Actions,
		private readonly messageService: MessageService,
		private readonly categoriesService: CategoriesService,
	) {}
}
