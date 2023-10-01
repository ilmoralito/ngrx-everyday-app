import { Highlightable, ListKeyManagerOption } from "@angular/cdk/a11y";
import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "app-product-detail",
  template: ` <p>{{ product }}</p> `,
  styles: [],
})
export class ProductDetailComponent
  implements Highlightable, ListKeyManagerOption
{
  @Input() product = "";
  @Input() disabled = false;

  private _isActive = false;

  @HostBinding("class.active") get isActive() {
    return this._isActive;
  }

  setActiveStyles() {
    this._isActive = true;
  }

  setInactiveStyles() {
    this._isActive = false;
  }

  getLabel() {
    return this.product;
  }
}
