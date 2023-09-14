import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
} from "@angular/core";
import { Owner } from "../../models/owner.model";

type OwnerWithEditing = Owner & { editing: boolean };

@Component({
  selector: "app-owner-filter",
  templateUrl: "./owner-filter.component.html",
  styleUrls: ["./owner-filter.component.scss"],
})
export class OwnerFilterComponent implements OnInit, OnChanges {
  @Input() filter = "";
  @Input() owners: Owner[] = [];

  @Output() delete = new EventEmitter<string>();

  editings: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    for (let property in changes) {
      if (property === "filter") {
        this.owners = this.owners.filter((o) =>
          o.firstName
            .toLowerCase()
            .includes(changes[property].currentValue.toLowerCase()),
        );
      }
    }
  }

  ngOnInit() {
    console.log(this.filter);
  }

  onEnter($event: Event) {
    const target = $event.target as HTMLInputElement;
    console.log(target.value);
  }

  onEdit(id: string) {
    this.editings = [...this.editings, id];
  }

  onConfirm(owner: Owner) {
    this.owners = this.owners.map((o) =>
      o.id === owner.id ? { ...owner } : { ...o },
    );
    this.editings = this.editings.filter((id) => id !== owner.id);
  }

  onCancel(id: string) {
    this.editings = this.editings.filter((item) => item !== id);
  }

  onDelete(id: string) {
    this.delete.emit(id);
  }
}
