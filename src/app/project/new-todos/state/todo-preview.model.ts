import { Todo } from "./todo.model";

export type TodoPreview = Omit<Todo, "id">;
