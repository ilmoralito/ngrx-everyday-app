import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NewLoggerService {
  constructor() {}

  log(message: string) {
    console.log(`New Logger: ${message}`);
  }
}
