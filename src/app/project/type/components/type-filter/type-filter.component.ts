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
        <ng-container>
          <ng-container *ngIf="editing.includes(type.id); else elseBock">
            <app-type-inline-edit
              [type]="getTypeById(type.id)"
              (confirm)="onConfirm($event)"
            ></app-type-inline-edit>
          </ng-container>
          <ng-template #elseBock>
            <span
              (click)="onSelect(type)"
              class="type-display-name"
              [ngStyle]="{
                'font-weight':
                  selectedType && selectedType.id === type.id
                    ? 'bold'
                    : 'normal'
              }"
            >
              {{ type.displayName }}
            </span>
          </ng-template>
        </ng-container>
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
        position: absolute;
        background-color: #f5f5f5;
        top: 23px;
        right: 0;
        left: 0;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      ul li {
        padding: 10px;
      }

      li:hover {
        background-color: #ddd;
      }

      .type-display-name {
        cursor: pointer;
        width: 100%;
      }
    `,
  ],
})
export class TypeFilterComponent implements OnChanges {
  @Input() filter = "";
  @Input() types: Type[] = [];
  @Input() selectedType!: Type | null;

  @Output() select = new EventEmitter<Type>();
  @Output() update = new EventEmitter<Type>();
  @Output() reset = new EventEmitter<void>();
  @Output() delete = new EventEmitter<string>();

  filteredTypes: Type[] = [];
  editing: string[] = [];

  private ifOnlyTypePropertyIsProvided(
    property: string,
    properties: readonly string[],
  ) {
    return (
      property === "types" &&
      properties.length === 1 &&
      properties[0] === "types"
    );
  }

  // TODO: temporal solution. move to a pipe
  ngOnChanges(changes: SimpleChanges) {
    const changesProperties = Object.keys(changes);
    const selectedTypeValue =
      Object.keys(changes).includes("selectedType") &&
      changes["selectedType"].currentValue;

    for (let property in changes) {
      if (this.ifOnlyTypePropertyIsProvided(property, changesProperties)) {
        this.filteredTypes = [...this.types];
      }

      if (property === "selectedType") {
        this.filteredTypes = [...this.types];
        return;
      }

      if (property === "filter" && !selectedTypeValue) {
        const filter = changes[property].currentValue;

        if (!filter) {
          this.filteredTypes = [...this.types];
          return;
        }

        this.filteredTypes = this.types.filter((type) =>
          type.displayName.toLowerCase().includes(filter.toLowerCase()),
        );
      }
    }
  }

  getTypeById(id: string) {
    return this.filteredTypes.find((type) => type.id === id)!;
  }

  onSelect(type: Type) {
    this.select.emit(type);
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
