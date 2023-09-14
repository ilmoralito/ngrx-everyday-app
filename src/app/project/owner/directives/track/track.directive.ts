import { Directive, HostListener, Input } from "@angular/core";
import { TrackingService } from "../../services/tracking/tracking.service";

@Directive({
  selector: "[appTrack]",
})
export class TrackDirective {
  @Input() appTrack!: string;

  @HostListener("click") onClick() {
    this.trackingService.log(this.appTrack);
  }

  constructor(private readonly trackingService: TrackingService) {}
}
