import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import { AbstractControl, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyPrimeNGModule } from "@ngx-formly/primeng";
import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ArrayTypeComponent } from "./project/people/components/formly-custom-types/array.type/array.type.component";
import { dataCyExtension } from "./project/repos/formly/extension/data-cy.extension";
import { ReposService } from "./project/repos/services/repos/repos.service";
import { LoggerService } from "./project/services/logger/logger.service";
import { NewLoggerService } from "./project/services/new-logger/new-logger.service";
import { emailPattern } from "./project/utils/utils";
import { CustomInputTypeComponent } from "./shared/shared/formly-custom-types";
import { FormlyWrapperPanelComponent } from "./shared/shared/formly-custom-wrappers";
import { counterReducer } from "./state/counter.reducer";
import { MyTypeComponent } from "./project/type/components/type/type.component";
// import { AnotherCustomTypeComponent } from './src/app/shared/shared/formly-custom-types/another-custom-type/another-custom-type.component';

export function fieldMatchValidator(control: AbstractControl) {
  const { password, repeatPassword } = control.value;

  if (!password || !repeatPassword) {
    return null;
  }

  if (password === repeatPassword) {
    return null;
  }

  return { fieldMatch: { message: "Password not matching" } };
}

export function emailValidator(control: AbstractControl) {
  if (!emailPattern.test(control.value)) {
    return { email: { message: "Invalid email" } };
  }

  return null;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer }),
    StoreDevtoolsModule.instrument({}),
    FormlyModule.forRoot({
      extensions: [
        { name: "data-cy", extension: dataCyExtension },
        // { name: "default-label", extension: defaultLabelExtension },
      ],
      wrappers: [{ name: "panel", component: FormlyWrapperPanelComponent }],
      types: [
        { name: "custom-input", component: CustomInputTypeComponent },
        { name: "filter-type", component: MyTypeComponent },
        { name: "array", component: ArrayTypeComponent },
      ],
      validators: [
        {
          name: "fieldMatch",
          validation: fieldMatchValidator,
          options: { errorPath: "password" },
        },
        {
          name: "email",
          validation: emailValidator,
        },
      ],
    }),
    EffectsModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormlyPrimeNGModule,
    HttpClientModule,
    ToastModule,
  ],
  providers: [
    { provide: ReposService, useClass: ReposService },
    LoggerService,
    { provide: LoggerService, useExisting: NewLoggerService },
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
