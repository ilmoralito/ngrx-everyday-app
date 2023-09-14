import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { FormlyDatepickerModule } from "@ngx-formly/primeng/datepicker";
import { ToastModule } from 'primeng/toast';

import * as fromFormlyCustomTypes from "./formly-custom-types";
import * as fromFormlyCustomWrappers from "./formly-custom-wrappers";
import { FormlyCustomInputComponent } from './formly-custom-types/formly-custom-input/formly-custom-input.component';

@NgModule({
  declarations: [
    ...fromFormlyCustomTypes.components,
    ...fromFormlyCustomWrappers.wrappers,
    FormlyCustomInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    TableModule,
    ButtonModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    TableModule,
    ButtonModule,
    ToastModule,
    FormlyDatepickerModule,
    ...fromFormlyCustomTypes.components,
  ],
})
export class SharedModule {}
