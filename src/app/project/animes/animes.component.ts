import { Component, OnInit, inject } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { TableLazyLoadEvent } from "primeng/table";
import { formlyInput } from "../repos/forms/artist.form";
import { AnimesService } from "./services/animes/animes.service";
import { Anime } from "./state/anime.model";

export interface CollectPayloadType {
  pagination: PaginationType;
  [key: string]: string | PaginationType | FilterType | undefined;
  filter?: FilterType;
}

export interface PaginationType {
  size: number | null | undefined;
  page: number | null | undefined;
}

export interface FilterType {
  [key: string]: string | number;
}

@Component({
  selector: "app-animes",
  templateUrl: "./animes.component.html",
  styleUrls: ["./animes.component.scss"],
})
export class AnimesComponent implements OnInit {
  private readonly animesService = inject(AnimesService);

  animes: Anime[] = [];
  totalRecords!: number;
  loading = false;
  tableLazyLoadEvent!: TableLazyLoadEvent;
  filters = {};

  form = new FormGroup({});
  model: { name: string; description: string } = { name: "", description: "" };
  fields: FormlyFieldConfig[] = [
    formlyInput({ key: "name", label: "Name", props: {} }),
    formlyInput({ key: "description", label: "Description", props: {} }),
  ];

  columns = [
    { header: "Name", field: "name" },
    { header: "Description", field: "description" },
  ];

  // todo: split in two funcions. one to map table lazy load event and another to map filters
  private mapDataToFilterPayload(): CollectPayloadType {
    const { first, rows, sortField, sortOrder } = this.tableLazyLoadEvent;
    const payload: CollectPayloadType = {
      pagination: {
        size: rows,
        page: first,
      },
    };

    // only add filter if this.filters has some property
    if (Object.keys(this.filters).length > 0) {
      payload.filter = this.filters;
    }

    if (typeof sortField === "string") {
      payload[sortField] = sortOrder === 1 ? "asc" : "desc";
    }

    return payload;
  }

  private filterProperties(object: { name: string; description: string }) {
    const output: Partial<{ name: string; description: string }> = {};

    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const propertyKey = key as keyof typeof object;

        if (object[propertyKey] !== "") {
          output[propertyKey] = object[propertyKey];
        }
      }
    }

    return output;
  }

  ngOnInit() {
    this.animesService.getAll().subscribe((animes) => (this.animes = animes));
  }

  onRequestData() {
    const payload = this.mapDataToFilterPayload();

    console.log(JSON.stringify(payload, null, 2));
  }

  onLazyLoad(tableLazyLoadEvent: TableLazyLoadEvent) {
    this.tableLazyLoadEvent = tableLazyLoadEvent;
    this.onRequestData();
  }

  onSubmit(model: { name: string; description: string }) {
    // get only model properties with values
    const filters = this.filterProperties(model);

    this.filters = filters;

    this.onRequestData();
  }
}
