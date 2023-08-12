import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { delay, of } from "rxjs";
import { User } from "../../+state/auth.models";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly httpClient = inject(HttpClient);

  login(credential: Credential) {
    return of(<User>{
      id: crypto.randomUUID(),
      username: "ada.wong",
      email: "ada.wong@domain.com",
      firstName: "ada",
      lastName: "wong",
    }).pipe(delay(1500));
  }
}
