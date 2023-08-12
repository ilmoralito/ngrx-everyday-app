import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { RoleModel } from "../../state/role.model";

@Injectable({
  providedIn: "root",
})
export class RolesService {
  private readonly endpoint = `${environment.apiURL}/roles`;

  constructor(private readonly httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<RoleModel[]>(this.endpoint);
  }

  add(entity: RoleModel) {
    return this.httpClient.post<RoleModel>(this.endpoint, entity);
  }
}
