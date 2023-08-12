import { Component, OnInit, inject } from "@angular/core";
import { MyMoviesStore } from "./state/my-movies.store";
import { MyMovie } from "./state/my-movie.model";
import { getRandomName } from "../utils/utils";

@Component({
  selector: "app-my-movies",
  templateUrl: "./my-movies.component.html",
  styleUrls: ["./my-movies.component.scss"],
  providers: [MyMoviesStore],
})
export class MyMoviesComponent implements OnInit {
  private readonly store = inject(MyMoviesStore);

  movies$ = this.store.filteredMovies$;
  currentMovie$ = this.store.currentMovie$;

  columns: { header: string; field: string }[] = [
    { header: "Name", field: "name" },
    { header: "Description", field: "description" },
  ];

  ngOnInit() {
    this.store.getMovies$();
  }

  onAdd() {
    this.store.add(<MyMovie>{
      id: crypto.randomUUID(),
      name: getRandomName(),
      description: getRandomName(),
      completed: false
    });
  }

  onUpdate(movie: MyMovie) {
    const payload = { ...movie, name: getRandomName() };
    this.store.update(payload);
  }

  onDelete(id: string) {
    this.store.delete(id);
  }

  onFilter(value: "all" | "completed" | "pending") {
    this.store.filter(value);
  }

  onToggle(id: string) {
    this.store.toggle(id);
  }

  onClear() {
    this.store.clear();
  }

  onSet(id: string) {
    this.store.set(id);
  }
}
