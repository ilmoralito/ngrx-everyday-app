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
  template: ` <ul>
    <li *ngFor="let type of filteredTypes">
      <div style="display: flex; justify-content: space-between;">
        <span>
          <ng-container *ngIf="editing.includes(type.id); else elseBock">
            <app-type-inline-edit
              [type]="getTypeById(type.id)"
              (confirm)="onConfirm($event)"
            ></app-type-inline-edit>
          </ng-container>
          <ng-template #elseBock>{{ type.displayName }}</ng-template>
        </span>
        <span>
          <div style="display: flex; gap: 2px;">
            <ng-container *ngIf="editing.includes(type.id)">
              <button (click)="onCancel(type.id)">Cancel</button>
            </ng-container>
            <ng-container *ngIf="!editing.includes(type.id)">
              <button (click)="onEdit(type.id)">Edit</button>
            </ng-container>
            <button
              (click)="onDelete(type.id)"
              [disabled]="editing.includes(type.id)"
            >
              Delete
            </button>
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
  @Output() update = new EventEmitter<Type>();

  filteredTypes: Type[] = [];
  editing: string[] = [];

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

  getTypeById(id: string) {
    return this.filteredTypes.find((type) => type.id === id)!;
  }

  onEdit(id: string) {
    this.editing = [...this.editing, id];
  }

  onCancel(id: string) {
    this.editing = this.editing.filter((value) => value !== id);
  }

  onConfirm(type: Type) {
    this.update.emit(type);
    this.onCancel(type.id);
  }

  onDelete(id: string) {
    this.delete.emit(id);
  }
}
