import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Staff, StaffPreview } from "state/staff.model";

@Injectable({
  providedIn: "root",
})
export class StaffService {
  private readonly BASE_URL = "http://localhost:3000";
  private readonly ENDPOINT = `${this.BASE_URL}/staff`;

  private readonly httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Staff[]>(this.ENDPOINT);
  }

  add(model: StaffPreview) {
    return this.httpClient.post<Staff>(this.ENDPOINT, model);
  }
}
