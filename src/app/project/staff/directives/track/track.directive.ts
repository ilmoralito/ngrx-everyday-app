import { Directive, HostListener, Input, inject } from "@angular/core";
import { TrackService } from "../../services/track/track.service";

@Directive({
  selector: "[appTrack]",
})
export class TrackDirective {
  private readonly trackService = inject(TrackService);

  @Input() appTrack = "";

  constructor() {}

  @HostListener("click") onClick() {
    this.trackService.log({ event: "click", message: this.appTrack });
  }
}
