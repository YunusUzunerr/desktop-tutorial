
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarModule } from './navbar/navbar.module';
import { AsideModule } from './aside/aside.module';
import { NgModule } from '@angular/core';
import { CustomerModule } from '../customer/customer.module';



const routes : Routes=[
  {
    path: '',
    component:LayoutsComponent
  }
]

@NgModule({
  declarations: [
    LayoutsComponent
  
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule,
    AsideModule
  
  ],
  exports:[
    LayoutsComponent,
    NavbarModule,
    AsideModule
  ],

})
export class LayoutsModule { }