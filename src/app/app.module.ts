import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { ConfirmEqualValidatorDirective } from './forms/confirm-equal-validator.directive';
import { JspdfComponent } from './jspdf/jspdf.component';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ConfirmEqualValidatorDirective,
    JspdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
