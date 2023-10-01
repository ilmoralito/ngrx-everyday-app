import {
  AfterViewInit,
  Component,
  QueryList,
  ViewChildren,
} from "@angular/core";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ActiveDescendantKeyManager } from "@angular/cdk/a11y";
import { ENTER } from "@angular/cdk/keycodes";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements AfterViewInit {
  @ViewChildren(ProductDetailComponent)
  products!: QueryList<ProductDetailComponent>;

  productArray = ["rubicks cube", "dino bot", "barbie", "lego bus"];

  private keyManager!: ActiveDescendantKeyManager<ProductDetailComponent>;

  selection = "";

  ngAfterViewInit() {
    this.keyManager = new ActiveDescendantKeyManager(this.products)
      .withWrap()
      .withTypeAhead();
  }

  onKeyUp(event: KeyboardEvent) {
    if (event.keyCode === ENTER) {
      this.selection = this.keyManager.activeItem?.product!;
    } else {
      this.keyManager.onKeydown(event);
    }
  }
}
