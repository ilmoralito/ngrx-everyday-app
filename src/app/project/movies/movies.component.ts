import { Component, signal, computed, effect } from "@angular/core";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
})
export class MoviesComponent {
  count = signal(0);
  todos = signal([
    { title: "Learn signals", done: false },
    { title: "Learn NX", done: false },
  ]);
  firstName = signal("");
  lastName = signal("");
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  constructor() {
    console.log(this.count());

    effect(() => {
      console.log("this.count():", this.count());
    });
  }

  setCount() {
    const number = Math.floor(Math.random() * 100);
    this.count.set(number);
  }

  addCount() {
    this.count.update((value) => value + 1);
  }

  update() {
    this.todos.mutate((value) => (value[0].done = true));
  }

  sync() {
    this.firstName.set(Date.now().toString());
  }
}
