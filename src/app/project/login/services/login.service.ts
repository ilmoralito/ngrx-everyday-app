import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Credential } from "../state/credential.model";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private readonly httpClient: HttpClient) {}

  login(credentials: Credential) {
    return of(true);
  }
}
