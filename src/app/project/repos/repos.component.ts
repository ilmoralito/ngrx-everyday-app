import { Component, OnInit, inject } from "@angular/core";
import { Observable } from "rxjs";
import { LoggerService } from "../services/logger/logger.service";
import { ArtistsService } from "./services/artists/artists.service";
import { ReposService } from "./services/repos/repos.service";
import { Artist } from "./state/artist.model";
import { RepoModel } from "./state/repo.model";
import * as _ from "lodash";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { artistForm } from "./forms/artist.form";

@Component({
  selector: "app-repos",
  templateUrl: "./repos.component.html",
  styleUrls: ["./repos.component.scss"],
})
export class ReposComponent implements OnInit {
  private readonly artistsService = inject(ArtistsService);
  private readonly loggerService = inject(LoggerService);
  private readonly reposService = inject(ReposService);

  repos$!: Observable<RepoModel[]>;
  artists$!: Observable<Artist[]>;

  form = new FormGroup({});
  model = {
    password: "",
    repeatPassword: "",
    email: "",
    vias: "",
    country: "NI",
    city: "",
  };
  fields: FormlyFieldConfig[] = artistForm();
  options: FormlyFormOptions = {};

  _get = _.get;

  columns = [
    { header: "first name", field: "firstName" },
    { header: "last name", field: "lastName" },
    { header: "location address", field: "location.address" },
    { header: "type display name", field: "type.displayName" },
  ];

  ngOnInit() {
    this.repos$! = this.reposService.getAll();
    this.artists$ = this.artistsService.getAll();
  }

  doLog() {
    this.loggerService.log("Nami");
  }

  onSubmit() {
    console.log(this.model);
  }
}
