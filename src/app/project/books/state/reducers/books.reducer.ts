import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { Book } from "../models/book.model";
import { createReducer } from "@ngrx/store";

export interface State extends EntityState<Book> {
	selectedBookId: string | null;
}

export function selectBookId(book: Book) {
	return book.id;
}

export function sortByName(a: Book, b: Book) {
	return a.volumeInfo.title.localeCompare(b.volumeInfo.title);
}

export const adapater: EntityAdapter<Book> = createEntityAdapter<Book>({
	selectId: selectBookId,
	sortComparer: sortByName,
});

export const initialState: State = adapater.getInitialState({
	selectedBookId: null,
});

export const booksReducer = createReducer(initialState);
