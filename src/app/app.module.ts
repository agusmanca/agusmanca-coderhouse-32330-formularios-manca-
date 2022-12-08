import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component'
import { MaterialModulesModule } from './material-modules/material-modules.module';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
