
import { CustomerModel } from './model/customer.model';

import { ToastrService } from 'ngx-toastr';
import { CustomerService } from './service/customer.service';
import { HelperService } from 'src/app/services/helper.service';
import { ErrorService } from 'src/app/services/error.service';
import { CustomerCityModel } from './model/customer.citymodel';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent{
  customers: CustomerModel[] = [];
  customer: CustomerModel = new CustomerModel();
  citys:CustomerCityModel[]=[];
  city:CustomerCityModel=new CustomerCityModel();


  filterText: string = "";

  constructor(
    private toastr: ToastrService,
    private helperService: HelperService,
    private customerService: CustomerService,
    private errorService: ErrorService,
  ) { this.getList(); this.getCity()}

  // ngOnInit(): void {
  // //  this.getList();
  // //  this.getCity();
  
  // }

 exportExcel(){
    let element = document.getElementById("excel-table");
    let title = "Müşteri Listesi";
    this.helperService.exportExcel(element,title);
  }
getList(){
  this.customerService.getList().subscribe((res: any)=>{
    this.customers = res.data;
    console.log(res.data);
  },(err)=>{
    this.errorService.errorHandler(err);
  });
}
getCity(){
  this.customerService.getCity().subscribe((res: any)=>{
    this.citys = res.data;
    console.log(res.data);
  },(err)=>{
    this.errorService.errorHandler(err);
  });
}

add(addForm: NgForm){
  let customer: CustomerModel = new CustomerModel();
  customer.FullName = addForm.value.FullName;
  customer.Email = addForm.value.Email;
  customer.Gender = addForm.value.Gender;
  customer.Profession = addForm.value.Profession;
  customer.BirthDate = addForm.value.BirthDate;
  customer.Website = addForm.value.Website;
  customer.AllowPromotionEmails = addForm.value.AllowPromotionEmails;
  customer.Address = addForm.value.Address;
  customer.Notes = addForm.value.Notes;

  this.customerService.add(customer).subscribe((res: any)=>{
    this.toastr.success(res.message);
    this.getList();
    addForm.reset();
  },(err)=>{
    this.errorService.errorHandler(err);
  });
}


getCustomer(customer: CustomerModel){
  this.customerService.getById(customer.id).subscribe((res: any)=>{
    this.customer = res.data;
  },(err)=>{
    this.errorService.errorHandler(err);
  });
}

update(){
  this.customerService.update(this.customer).subscribe((res: any)=>{
    this.toastr.success(res.message);
    this.getList();
    document.getElementById("updateModelCloseBtn").click();
  },(err)=>{
    this.errorService.errorHandler(err);
  });
}

yeniTelefonEkle() {
  this.customer.TelephoneNumber.push('');
}
}
}
