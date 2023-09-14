import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Type } from "../../state/type.mode";

@Component({
  selector: "app-type-filter",
  template: `<ul>
    <li *ngFor="let type of filteredTypes">
      <div style="display: flex; justify-content: space-between;">
        <span>{{ type.displayName }}</span>
        <span>
          <div style="display: flex; gap: 2px;">
            <button (click)="onEdit(type.id)">Edit</button>
            <button (click)="onDelete(type.id)">Delete</button>
          </div>
        </span>
      </div>
    </li>
  </ul>`,
  styles: [
    `
      :host {
        background-color: #f5f5f5;
        display: block;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      ul li {
        padding: 10px;
      }
    `,
  ],
})
export class TypeFilterComponent implements OnChanges {
  @Input() filter = "";
  @Input() types: Type[] = [];

  @Output() delete = new EventEmitter<string>();

  filteredTypes: Type[] = [];

  // TODO: temporal solution. move to a pipe
  ngOnChanges(changes: SimpleChanges) {
    for (let property in changes) {
      if (property === "types") {
        const types = changes[property].currentValue;
        this.filteredTypes = types.filter((type: Type) => {
          return type.displayName
            .toLowerCase()
            .includes(this.filter.toLowerCase());
        });
      }

      if (property === "filter") {
        const filter = changes[property].currentValue;

        if (!filter) {
          this.filteredTypes = [...this.types];
        }

        if (filter) {
          this.filteredTypes = this.types.filter((t) =>
            t.displayName.toLowerCase().includes(filter.toLowerCase()),
          );
        }
      }
    }
  }

  onEdit(id: string) {
    console.log(id);
  }

  onDelete(id: string) {
    this.delete.emit(id);
  }
}
