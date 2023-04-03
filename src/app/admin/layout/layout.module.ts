import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './aside/aside.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    LayoutComponent,
    AsideComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  exports:[
    LayoutComponent,
    AsideComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
