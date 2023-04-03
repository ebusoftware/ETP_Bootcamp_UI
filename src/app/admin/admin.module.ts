import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './layout/components/components.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule,
    

  ],
  exports:[
    LayoutModule
  ]
})
export class AdminModule { }
