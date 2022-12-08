import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatSelectModule } from '@angular/material/select'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatButtonModule} from '@angular/material/button'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule
  ]
})
export class MaterialModulesModule { }
