import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, distinct } from "rxjs";
import { counterActions } from "src/app/state/counter.actions";

@Component({
  selector: "app-zilla",
  templateUrl: "./zilla.component.html",
  styleUrls: ["./zilla.component.scss"],
})
export class ZillaComponent {
  count$!: Observable<number>;

  constructor(private readonly store: Store<{ count: number }>) {
    this.count$ = this.store.select("count");
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
    this.store.dispatch(counterActions.set({ value: 5 }));
  }
}
