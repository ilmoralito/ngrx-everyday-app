import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TrackService {
  logs: { event: string; message: string }[] = [];

  constructor() {}

  log(event: { event: string; message: string }) {
    this.logs.push(event);
    console.log(this.logs);
  }
}
