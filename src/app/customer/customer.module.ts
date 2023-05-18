import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPipe } from './pipe/customer.pipe';

import { NgModule } from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';


const routes :Routes=[
  {
    path:'',
    component:CustomerComponent
  }
]
@NgModule({
  declarations: [
    CustomerComponent,
    CustomerPipe],
    
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SweetAlert2Module,
    FormsModule
 

  ],
  exports:[
  CustomerComponent
  ]
})
export class CustomerModule { }
