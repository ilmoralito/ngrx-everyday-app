import { Component, OnInit, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCollection } from "./state/products.reducer";
import { productsActions } from "./state/products.actions";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { Product } from "./state/product.model";
import { formlyInput } from "src/app/shared/shared/formly-utils/formly-input";
import { Sample1Actions, SampleActions } from "./state";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  private readonly store = inject(Store);

  readonly products$ = this.store.select(selectCollection);

  form = new FormGroup({});
  model = { name: "" };
  fields: FormlyFieldConfig[] = [
    formlyInput({
      key: "name",
      label: "Name",
      props: { required: true },
    }),
  ];
  options: FormlyFormOptions = {};

  ngOnInit() {
    this.store.dispatch(productsActions.enter());
  }

  toggle(id: string) {
    this.store.dispatch(productsActions.toggle({ id }));
  }

  delete(id: string) {
    this.store.dispatch(SampleActions.add({ value: "1" }));
    this.store.dispatch(Sample1Actions.remove({ id: "1" }));
    this.store.dispatch(productsActions.delete({ id }));
  }

  onSubmit(model: { name: string }) {
    const entity: Product = { id: crypto.randomUUID(), name: model.name };

    this.store.dispatch(productsActions.add({ model: entity }));
    this.options.resetModel?.();
  }
}
