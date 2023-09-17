import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { counterActions } from "./state/counter.actions";
import { AppState } from "./state/appState";

type Quote = {
  quote: string;
  author: string;
};

type id = 1 | 2 | 3 | 4 | 5;

type QuoteList = Record<id, Quote>;

type Teams = "Lakers" | "Celtics" | "Bulls" | "Warriors";
type Chanpionships = number;
type ChampionshipsRecord = Record<Teams, Chanpionships>;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  record: Record<number, string> = {
    1: "abigail",
    2: "marya",
    3: "edelma",
    4: "blanca",
    5: "deyanira",
  };

  championships: ChampionshipsRecord = {
    Lakers: 17,
    Celtics: 17,
    Bulls: 6,
    Warriors: 6,
  };

  quotes: QuoteList = {
    1: {
      quote:
        "There are only two kinds of languages: the ones people complain about and the ones nobody uses.",
      author: "Bjarne Stroustrup",
    },
    2: {
      quote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler",
    },
    3: {
      quote: "First, solve the problem. Then, write the code.",
      author: "John Johnson",
    },
    4: {
      quote: "Java is to JavaScript what car is to Carpet.",
      author: "Chris Heilmann",
    },
    5: {
      quote:
        "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
      author: "John Woods",
    },
  };

  @ViewChild("input") input!: ElementRef<HTMLInputElement>;

  count$!: Observable<number>;

  constructor(private readonly store: Store<AppState>) {
    this.count$ = this.store.select((state) => state.counter.count);

    console.log(this.record[1]);

    if (3 in this.quotes) {
      console.log(`quotes: `, this.quotes[3]);
    }
  }

  ngAfterViewInit() {
    this.input.nativeElement.focus();
    this.input.nativeElement.select();
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
