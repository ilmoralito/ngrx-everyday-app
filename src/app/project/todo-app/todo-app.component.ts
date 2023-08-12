import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/state/appState";
import { TodoActions } from "./state/todo.actions";
import { TodoEntity } from "./state/todo.models";
import { selectFeatureData } from "./state/todo.selectors";

@Component({
  selector: "app-todo-app",
  templateUrl: "./todo-app.component.html",
  styleUrls: ["./todo-app.component.scss"],
})
export class TodoAppComponent implements OnInit {
  collection$!: Observable<TodoEntity[]>;

  constructor(private readonly store: Store<AppState>) {
    this.collection$ = this.store.select(selectFeatureData);
  }

  ngOnInit() {
    this.store.dispatch(TodoActions.init());
  }

  add() {
    this.store.dispatch(
      TodoActions.add({
        model: { id: crypto.randomUUID(), task: "random", done: false },
      })
    );
  }

  edit(entity: TodoEntity) {
    this.store.dispatch(
      TodoActions.update({ model: { ...entity, task: "random-edited" } })
    );
  }

  delete(id: string) {
    this.store.dispatch(TodoActions.delete({ id }));
  }

  toggle(id: string) {
    this.store.dispatch(TodoActions.toggle({ id }));
  }

  filter(value: "all" | "pending" | "done") {
    this.store.dispatch(TodoActions.filter({ value }));
  }
}
