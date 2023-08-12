import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CounterRoutingModule } from "./counter-routing.module";
import { CounterComponent } from "./counter.component";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./state/counter.reducer";
import { ZillaComponent } from "./components/zilla/zilla.component";

@NgModule({
  declarations: [CounterComponent, ZillaComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature("count", counterReducer),
    CounterRoutingModule,
  ],
})
export class CounterModule {}
