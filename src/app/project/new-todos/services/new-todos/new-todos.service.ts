import { Injectable } from "@angular/core";
import { Sample1, Sample2, Todo } from "../../state/todo.model";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NewTodosService {
  todos: Todo[] = [
    { id: "1", name: "Testing", completed: false },
    { id: "2", name: "Sleep", completed: true },
    { id: "3", name: "Merge", completed: false },
  ];

  constructor() {}

  getAll() {
    return of(this.todos);
  }

  sample(model: Sample1 | Sample2) {
    if ("id" in model) {
      console.log(model);
    }
  }
}
