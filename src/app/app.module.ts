import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AbstractControl, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyPrimeNGModule } from "@ngx-formly/primeng";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { counterReducer } from "./state/counter.reducer";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { ReposService } from "./project/repos/services/repos/repos.service";
import { LoggerService } from "./project/services/logger/logger.service";
import { NewLoggerService } from "./project/services/new-logger/new-logger.service";
import { dataCyExtension } from "./project/repos/formly/extension/data-cy.extension";
import { defaultLabelExtension } from "./project/repos/formly/extension/default-label.extension";
import { CustomInputTypeComponent } from "./shared/shared/formly-custom-types";
import { FormlyWrapperPanelComponent } from "./shared/shared/formly-custom-wrappers";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";

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
        { name: "default-label", extension: defaultLabelExtension },
      ],
      wrappers: [{ name: "panel", component: FormlyWrapperPanelComponent }],
      types: [{ name: "custom-input", component: CustomInputTypeComponent }],
      validators: [
        {
          name: "fieldMatch",
          validation: fieldMatchValidator,
          options: { errorPath: "password" },
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
    MessageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
