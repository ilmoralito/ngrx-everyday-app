import { Component, ElementRef, HostListener, ViewChild } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { Type } from "../../state/type.mode";

@Component({
  selector: "app-my-type",
  template: `
    <div class="container" #container>
      <input
        #input
        (focus)="onFocus()"
        [formControl]="formControl"
        (keydown.enter)="onAdd($event)"
      />
      <label (click)="onReset()" *ngIf="selectedType">X</label>
      <ng-container *ngIf="show">
        <app-type-filter
          [filter]="formControl.value"
          [types]="types"
          [selectedType]="selectedType"
          (select)="onSelect($event)"
          (update)="onUpdate($event)"
          (reset)="onReset()"
          (delete)="onDelete($event)"
        ></app-type-filter>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .container {
        position: relative;
        border: 1px dashed white;
      }

      label {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
        cursor: pointer;
      }
    `,
  ],
})
export class MyTypeComponent extends FieldType<FieldTypeConfig> {
  types: Type[] = [
    { id: "0", name: "type-0", displayName: "Type 0" },
    { id: "1", name: "type-1", displayName: "Type 1" },
    { id: "2", name: "type-2", displayName: "Type 2" },
    { id: "3", name: "type-3", displayName: "Type 3" },
    { id: "4", name: "type-4", displayName: "Type 4" },
    { id: "5", name: "type-5", displayName: "Type 5" },
    { id: "6", name: "type-6", displayName: "Type 6" },
    { id: "7", name: "type-7", displayName: "Type 7" },
    { id: "8", name: "type-8", displayName: "Type 8" },
    { id: "9", name: "type-9", displayName: "Type 9" },
    { id: "10", name: "type-10", displayName: "Type 10" },
    { id: "11", name: "type-11", displayName: "Type 11" },
  ];
  show = false;
  selectedType: Type | null = null;

  @ViewChild("container") container!: ElementRef<HTMLDivElement>;
  @ViewChild("input") input!: ElementRef<HTMLInputElement>;

  @HostListener("document:keydown.escape", ["$event"])
  onEscape() {
    this.show = false;
    this.formControl.setValue("");
    this.input.nativeElement.blur();
  }

  @HostListener("document:click", ["$event.target"])
  onClickDocument(element: HTMLElement) {
    console.log(this.container.nativeElement.contains(element));
  }

  private typeExists(name: string) {
    return this.types.some((type) => type.name === name);
  }

  onFocus() {
    this.show = true;
  }

  onAdd(event: Event) {
    event.preventDefault();

    if (!this.formControl.value) {
      return;
    }

    const name = this.formControl.value
      .trim()
      .toLowerCase()
      .split(" ")
      .join("-");

    const type: Type = {
      id: crypto.randomUUID(),
      name,
      displayName: this.formControl.value,
    };

    if (this.typeExists(name)) {
      console.info("Type already exists");
      return;
    }

    this.types = [...this.types, type].sort((a, b) =>
      a.displayName.localeCompare(b.displayName),
    );

    this.show = false;
    this.selectedType = type;
    this.input.nativeElement.blur();
  }

  onSelect(type: Type) {
    this.show = false;
    this.selectedType = type;
    this.formControl.setValue(type.displayName);
  }

  onUpdate(type: Type) {
    if (this.selectedType && this.selectedType.id === type.id) {
      this.selectedType = type;
      this.formControl.setValue(type.displayName);
    }

    // sync types
    this.types = this.types.map((t) =>
      t.id === type.id ? { ...type } : { ...t },
    );
  }

  onReset() {
    if (!this.selectedType) {
      return;
    }

    this.selectedType = null;
    this.formControl.setValue("");
  }

  onDelete(id: string) {
    // remove from type list
    this.types = this.types.filter((t) => t.id !== id);

    // if there is a selected type and its deleted then set selected type to null and clean input
    if (this.selectedType && this.selectedType.id === id) {
      this.onReset();
    }
  }
}
