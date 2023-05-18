import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutsModule } from './layouts/layouts.module';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { CustomerModule } from './customer/customer.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    LayoutsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
   CustomerModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true
    })
  ],
  exports: [
    AppRoutingModule,
    LayoutsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
   CustomerModule,
   
  ],
  providers: [
    {provide:'apiUrl',useValue:'https://localhost:7146/api/'}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
