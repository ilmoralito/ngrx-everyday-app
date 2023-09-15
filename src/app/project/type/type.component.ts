import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from "@angular/core";
import { Type } from "./state/type.mode";

@Component({
  selector: "app-type",
  templateUrl: "./type.component.html",
  styleUrls: ["./type.component.scss"],
})
export class TypeComponent {
  types: Type[] = [
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

  @ViewChild("filter") filter!: ElementRef<HTMLInputElement>;

  @HostListener("document:keydown.escape", ["$event"])
  onEscape() {
    this.show = false;
    this.filter.nativeElement.blur();
  }

  constructor(private readonly cdRef: ChangeDetectorRef) {}

  onFocus() {
    this.show = true;
  }

  onAdd($event: Event) {
    const target = $event.target as HTMLInputElement;
    const value = target.value;

    if (!value) {
      return;
    }

    // way to create a type instance
    const type: Type = {
      id: crypto.randomUUID(),
      name: value.toLowerCase().split(" ").join("-"),
      displayName: value,
    };

    // sort alphabetically
    this.types = [...this.types, type].sort((a, b) =>
      a.displayName.localeCompare(b.displayName),
    );
  }

  onSelect(type: Type) {
    this.cdRef.detach();
    this.selectedType = type;
    this.filter.nativeElement.value = type.displayName;
    this.cdRef.reattach();
  }

  onUpdate(type: Type) {
    this.types = this.types.map((t) =>
      t.id === type.id ? { ...type } : { ...t },
    );
  }

  onDelete(id: string) {
    // remove from type list
    this.types = this.types.filter((t) => t.id !== id);

    // if there is a selected type and its deleted then set selected type to null and clean input
    if (this.selectedType && this.selectedType.id === id) {
      this.selectedType = null;
      this.filter.nativeElement.value = "";
    }
  }
}
