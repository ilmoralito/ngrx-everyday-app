import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TrackingService {
  online = true;
  logs: { event: string; message: string }[] = [];

  constructor() {
    setInterval(() => {
      this.online = Math.random() > 0.5;
    }, 1000);
  }

  log(trackingEvent: string) {
    this.logs = [...this.logs, { event: "click", message: trackingEvent }];
    console.log(this.logs);
  }
}
