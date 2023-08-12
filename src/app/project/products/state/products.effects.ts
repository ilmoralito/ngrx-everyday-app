import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { productsActions } from "./products.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Product } from "./product.model";

export const loadProducts$ = createEffect(
	(actions$ = inject(Actions)) => {
		const httpClient = inject(HttpClient);

		return actions$.pipe(
			ofType(productsActions.enter),
			exhaustMap(() =>
				httpClient
					.get<Product[]>("http://localhost:3000/products")
					.pipe(
						map((products) =>
							productsActions.loadSuccess({ products })
						),
						catchError((error: { message: string }) =>
							of(
								productsActions.loadFailure({
									error: "error.message",
								})
							)
						)
					)
			)
		);
	},
	{ functional: true }
);

// loadProducts(inject(Actions));
