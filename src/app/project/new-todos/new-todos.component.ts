import { Component, OnInit, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { newTodoActions } from "./state/new-todo.actions";
import { Observable } from "rxjs";
import { Todo } from "./state/todo.model";
import {
  selectFilteredTodos,
  selectSelectedNewTodo,
} from "./state/new-todo.reducer";
import { FormGroup } from "@angular/forms";
import { TodoPreview } from "./state/todo-preview.model";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { formlyInput } from "../repos/forms/artist.form";

@Component({
  selector: "app-new-todos",
  templateUrl: "./new-todos.component.html",
  styleUrls: ["./new-todos.component.scss"],
})
export class NewTodosComponent implements OnInit {
  private readonly store = inject(Store);

  todos$!: Observable<Todo[]>;
  todo$!: Observable<Todo>;

  form = new FormGroup({});
  model: TodoPreview = { name: "", completed: false };
  fields: FormlyFieldConfig[] = [
    formlyInput({ key: "name", label: "Name", props: { required: true } }),
  ];
  options: FormlyFormOptions = {};

  constructor() {
    this.todos$ = this.store.select(selectFilteredTodos);
    this.todo$ = this.store.select(selectSelectedNewTodo);
  }

  ngOnInit() {
    this.store.dispatch(newTodoActions.enter());
  }

  onFilter(value: "all" | "completed" | "pending") {
    this.store.dispatch(newTodoActions.filter({ value }));
  }

  onToggle(id: string) {
    this.store.dispatch(newTodoActions.toggle({ id }));
  }

  onEdit(id: string) {
    this.store.dispatch(newTodoActions.set({ id }));
  }

  onDelete(id: string) {
    this.store.dispatch(newTodoActions.delete({ id }));
  }

  onSubmit(model: TodoPreview) {
    this.store.dispatch(
      newTodoActions.add({ todo: { id: crypto.randomUUID(), ...model } }),
    );
    this.options.resetModel?.();
  }
}
