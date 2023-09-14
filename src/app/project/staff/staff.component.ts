import { Component, OnInit, inject } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { Observable } from "rxjs";
import { staffActions } from "state/staff.actions";
import { Staff } from "state/staff.model";
import { selectCollection } from "state/staff.reducer";

interface Column {
  field: string;
  header: string;
}

export interface Person {
  id: string;
  name: string;
  active: boolean;
  options: string;
  validity: {
    name: string;
  };
}

@Component({
  selector: "app-staff",
  templateUrl: "./staff.component.html",
  styleUrls: ["./staff.component.scss"],
})
export class StaffComponent implements OnInit {
  private readonly store = inject(Store);

  collection$!: Observable<Staff[]>;
  columns!: Column[];
  people!: Person[];
  selectedPerson!: Person;

  mainMenuClassName = "";
  mainMapClassName = "";

  form = new FormGroup({});
  model = {
    firstName: "",
    lastName: "",
    email: "",
    status: "all",
  };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: "flex gap-2",
      fieldGroup: [
        { key: "firstName", type: "input", props: { label: "First name" } },
        { key: "lastName", type: "input", props: { label: "Last name" } },
        { key: "email", type: "input", props: { label: "Email" } },
      ],
    },
    {
      key: "status",
      type: "radio",
      className: "flex",
      props: {
        type: "radio",
        label: "Status",
        required: true,
        name: "status",
        options: [
          { value: "all", label: "All" },
          { value: "active", label: "Active" },
          { value: "inactive", label: "Inactive" },
        ],
      },
    },
  ];

  constructor() {
    this.collection$ = this.store.select(selectCollection);
  }

  ngOnInit() {
    this.store.dispatch(staffActions.enter());

    this.columns = [
      { field: "id", header: "ID" },
      { field: "name", header: "Name" },
    ];

    this.people = [
      {
        id: crypto.randomUUID(),
        name: "Ada",
        active: false,
        options: "option-1",
        validity: {
          name: "a",
        },
      },
      {
        id: crypto.randomUUID(),
        name: "Leon",
        active: false,
        options: "option-1",
        validity: {
          name: "b",
        },
      },
      {
        id: crypto.randomUUID(),
        name: "Jill",
        active: false,
        options: "option-1",
        validity: {
          name: "c",
        },
      },
      {
        id: crypto.randomUUID(),
        name: "Rebeca",
        active: true,
        options: "option-2",
        validity: {
          name: "d",
        },
      },
    ];
  }

  onToggle(value: boolean) {
    console.log(value);
  }

  onEdit(person: Person) {
    this.selectedPerson = person;
  }

  onSubmit() {
    console.log(this.model);
  }
}
