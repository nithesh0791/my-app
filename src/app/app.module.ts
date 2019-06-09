import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NameComponent } from './name.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UIFormComponent } from './form.component';

import { BenefitsComponent } from './tabs/benefits.component';
import { FundsComponent } from './tabs/funds.component';
import { QuotesComponent } from './tabs/quotes.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material";
import { DialogComponent,SelectFundsDialogue } from "./dialog/dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    UIFormComponent,
    BenefitsComponent,
    FundsComponent,
    QuotesComponent,
    DialogComponent,
    SelectFundsDialogue
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent,SelectFundsDialogue]
})
export class AppModule { }
