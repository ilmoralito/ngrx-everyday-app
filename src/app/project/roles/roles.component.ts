import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ReposService } from "../repos/services/repos/repos.service";
import { roleActions } from "./state/role.actions";
import { RoleModel } from "./state/role.model";
import { selectCollection } from "./state/role.reducer";
import { RepoModel } from "../repos/state/repo.model";

export interface Column {
  field: string;
  header: string;
}

@Component({
  selector: "app-roles",
  templateUrl: "./roles.component.html",
  styleUrls: ["./roles.component.scss"],
})
export class RolesComponent implements OnInit {
  repos$!: Observable<RepoModel[]>;
  collection$!: Observable<RoleModel[]>;
  columns: Column[] = [
    { field: "name", header: "Name" },
    { field: "description", header: "Description" },
  ];

  constructor(
    private readonly store: Store,
    private readonly reposService: ReposService
  ) {
    this.collection$ = this.store.select(selectCollection);
    this.repos$ = this.reposService.getAll();
  }

  ngOnInit() {
    this.store.dispatch(roleActions.init());
  }
}
