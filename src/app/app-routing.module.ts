
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { NgModule } from '@angular/core';



const routes: Routes = [
  // { path: '', redirectTo:'customer',pathMatch:'full' },
  // { path: '', component:CustomerComponent},
  { path: 'customer', component:CustomerComponent,
  loadChildren: ()=> import('./customer/customer.module').then(m=> m.CustomerModule)}
  // {
  //   path: '/',
  //   component: CustomerComponent,
  //   loadChildren: ()=> import('./customer/customer.module').then(m=> m.CustomerModule)
  // },
  // {
  //   path: 'customer',
  //   children: [
  //     {
  //       path: '',
  //       component: CustomerComponent,
  //       loadChildren: ()=> import('./customer/customer.module').then(m=> m.CustomerModule)
  //     }
  //   ]
  // },
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
