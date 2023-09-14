import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { Option, Owner } from "./models/owner.model";

@Component({
  selector: "app-owner",
  templateUrl: "./owner.component.html",
  styleUrls: ["./owner.component.scss"],
})
export class OwnerComponent implements AfterViewInit {
  @ViewChild("templ") templ!: any;
  @ViewChild("filter") filter!: ElementRef<HTMLInputElement>;

  @HostListener("document:keydown.escape", ["$event"])
  onKeydownHandler(event: KeyboardEvent) {
    this.show = false;
    this.filter.nativeElement.blur();
  }

  private baseModel: Owner = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    active: false,
    settings: {
      option: Option.Option1,
    },
  };
  owners: Owner[] = [
    {
      ...this.baseModel,
      id: "1",
      firstName: "ada",
      lastName: "wong",
      email: "ada.wong@domain.com",
    },
    {
      ...this.baseModel,
      id: "2",
      firstName: "leon",
      lastName: "kennedy",
      email: "leon.kennedyP@domain.com",
    },
  ];

  selectedOwner!: Owner;

  show = false;

  selectOwner(owner: Owner) {
    this.selectedOwner = owner;
  }

  constructor(private readonly viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit() {
    this.viewContainerRef.createEmbeddedView(this.templ);
  }

  onFocus() {
    this.show = true;
  }

  onBlur() {
    // this.show = false;
  }

  add($event: Event) {
    const target = $event.target as HTMLInputElement;

    if (!target.value) {
      return;
    }

    console.log(target.value);
  }

  onDelete(id: string) {
    this.owners = this.owners.filter((owner) => owner.id !== id);

    if (!this.owners.length) {
      this.show = false;
    }
  }
}
