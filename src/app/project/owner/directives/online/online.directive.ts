import { Directive, HostBinding } from "@angular/core";
import { TrackingService } from "../../services/tracking/tracking.service";

@Directive({
  selector: "[appOnline]",
})
export class OnlineDirective {
  @HostBinding("disabled") get disabled() {
    return this.trackingService.online;
  }

  constructor(private readonly trackingService: TrackingService) {}
}
