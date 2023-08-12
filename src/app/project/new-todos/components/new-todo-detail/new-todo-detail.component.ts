import { Component, Input } from "@angular/core";
import { Todo } from "../../state/todo.model";

@Component({
  selector: "app-new-todo-detail",
  templateUrl: "./new-todo-detail.component.html",
  styleUrls: ["./new-todo-detail.component.scss"],
})
export class NewTodoDetailComponent {
  @Input() todo!: Todo;
}
