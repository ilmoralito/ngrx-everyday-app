import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { counterActions } from "./state/counter.actions";
import { AppState } from "./state/appState";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  count$!: Observable<number>;

  constructor(private readonly store: Store<AppState>) {
    this.count$ = this.store.select((state) => state.counter.count);
  }

  increment() {
    this.store.dispatch(counterActions.increment());
  }

  decrement() {
    this.store.dispatch(counterActions.decrement());
  }

  reset() {
    this.store.dispatch(counterActions.reset());
  }

  set() {
    const value = Math.floor(Math.random() * 100);

    this.store.dispatch(counterActions.set({ value }));
  }
}
