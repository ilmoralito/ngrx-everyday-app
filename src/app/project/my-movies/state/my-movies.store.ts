import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { MyMovie } from "./my-movie.model";
import { Injectable, inject } from "@angular/core";
import {
	EMPTY,
	Observable,
	catchError,
	exhaustMap,
	switchMap,
	tap,
} from "rxjs";
import { MyMoviesService } from "../services/my-movies/my-movies.service";
import { HttpErrorResponse } from "@angular/common/http";

export interface MyMoviesState {
	movies: MyMovie[];
	currentMovieId: string | null;
	filter: "all" | "completed" | "pending";
}

export const initialState: MyMoviesState = {
	movies: [],
	currentMovieId: null,
	filter: "all",
};

@Injectable()
export class MyMoviesStore extends ComponentStore<MyMoviesState> {
	private readonly myMoviesService = inject(MyMoviesService);

	movies$ = this.select((state) => state.movies);
	currentMovieId$ = this.select((state) => state.currentMovieId);
	filter$ = this.select((state) => state.filter);
	currentMovie$ = this.select(
		this.movies$,
		this.currentMovieId$,
		(movies, id) => movies.find((movie) => movie.id === id),
	);
	filteredMovies$ = this.select(
		this.movies$,
		this.filter$,
		(movies, filter) => {
			if (filter === "all") {
				return movies;
			}

			if (filter === "completed") {
				return movies.filter((movie) => movie.completed);
			}

			return movies.filter((movie) => !movie.completed);
		},
	);

	constructor() {
		super(initialState);
	}

	add(movie: MyMovie) {
		this.setState((state) => ({
			...state,
			movies: [...state.movies, movie],
		}));
	}

	addAll(movies: MyMovie[]) {
		this.setState((state) => ({
			...state,
			movies: [...state.movies, ...movies],
		}));
	}

	set(id: string) {
		this.patchState({ currentMovieId: id });
	}

	filter(value: "all" | "completed" | "pending") {
		this.patchState({ filter: value });
	}

	clear() {
		this.patchState({ currentMovieId: null });
	}

	logError(error: HttpErrorResponse) {
		console.error(error.message);
	}

	readonly toggle = this.updater((state, id: string) => ({
		...state,
		movies: state.movies.map((movie) =>
			movie.id === id
				? { ...movie, completed: !movie.completed }
				: { ...movie },
		),
	}));

	readonly update = this.updater((state, movie: MyMovie) => ({
		...state,
		movies: state.movies.map((current) =>
			current.id === movie.id ? { ...movie } : { ...current },
		),
	}));

	readonly delete = this.updater((state, id: string) => ({
		...state,
		movies: state.movies.filter((movie) => movie.id !== id),
	}));

	readonly getMovies$ = this.effect<void>((source$) =>
		source$.pipe(
			exhaustMap(() =>
				this.myMoviesService.getAll().pipe(
					tapResponse({
						next: (movies) => this.addAll(movies),
						error: (error: HttpErrorResponse) =>
							this.logError(error),
					}),
				),
			),
		),
	);

	readonly getMovie$ = this.effect((id$: Observable<string>) => {
		return id$.pipe(
			switchMap((id) =>
				this.myMoviesService.getOne(id).pipe(
					tap({
						next: (movie) => this.add(movie),
						error: (e) => this.logError(e),
					}),
					catchError(() => EMPTY),
				),
			),
		);
	});
}
