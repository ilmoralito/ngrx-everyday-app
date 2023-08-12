import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { RepoModel } from "../../state/repo.model";
import { environment } from "src/environments/environment.development";

@Injectable()
export class ReposService {
  private readonly httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<RepoModel[]>(`${environment.apiURL}/repos`);
  }
}
