import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { RoleModel, RolePreviewModel } from "../../state/role.model";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { Store } from "@ngrx/store";
import { roleActions } from "../../state/role.actions";

@Component({
  selector: "app-roles-create",
  templateUrl: "./roles-create.component.html",
  styleUrls: ["./roles-create.component.scss"],
})
export class RolesCreateComponent {
  form = new FormGroup({});
  model: RolePreviewModel = { name: "", description: "" };
  fields: FormlyFieldConfig[] = [
    { key: "name", type: "input", props: { required: true, label: "Name" } },
    {
      key: "description",
      type: "input",
      props: { required: true, label: "Description" },
    },
  ];

  constructor(private readonly store: Store) {}

  onSubmit(model: RolePreviewModel) {
    const roleModel: RoleModel = { id: crypto.randomUUID(), ...model };

    this.store.dispatch(roleActions.add({ entity: roleModel }));
  }
}
