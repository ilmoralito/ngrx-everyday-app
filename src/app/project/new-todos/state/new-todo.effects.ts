import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { NewTodosService } from "../services/new-todos/new-todos.service";
import { newTodoActions } from "./new-todo.actions";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class NewTodosEffects {
	private readonly actions$ = inject(Actions);
	private readonly newTodosService = inject(NewTodosService);

	load$ = createEffect(() =>
		this.actions$.pipe(
			ofType(newTodoActions.enter),
			switchMap(() =>
				this.newTodosService.getAll().pipe(
					map((todos) => newTodoActions.loadSuccess({ todos })),
					catchError((error) =>
						of(newTodoActions.loadFail({ error })),
					),
				),
			),
		),
	);
}
