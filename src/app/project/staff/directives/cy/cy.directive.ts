import { Directive, HostBinding, Input, OnInit } from "@angular/core";

@Directive({
  selector: "[appCy]",
})
export class CyDirective implements OnInit {
  @Input() appCy = "";

  @HostBinding("attr.data-cy") attr = "";

  ngOnInit() {
    this.attr = this.appCy;
  }
}
