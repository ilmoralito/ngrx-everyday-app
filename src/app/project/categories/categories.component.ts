import { Component, OnInit, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Category } from "./state/category.model";
import { selectCategories } from "./state/categories.reducer";
import { categoriesActions } from "./state/categories.actions";
import { getRandomName } from "../utils/utils";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent implements OnInit {
  private readonly store = inject(Store);

  categories$!: Observable<Category[]>;

  constructor() {
    this.categories$ = this.store.select(selectCategories);
  }

  ngOnInit() {
    this.store.dispatch(categoriesActions.enter());
  }

  onAdd() {
    this.store.dispatch(
      categoriesActions.add({
        category: { id: crypto.randomUUID(), name: getRandomName() },
      }),
    );
  }

  onDelete(id: string) {
    this.store.dispatch(categoriesActions.delete({ id }));
  }
}
