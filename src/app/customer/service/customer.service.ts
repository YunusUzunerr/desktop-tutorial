import { HttpClient } from "@angular/common/http";

import { CustomerModel } from "../model/customer.model";
import { Inject } from "@angular/core";

export class CustomerService {

    constructor(
      @Inject("apiUrl") private apiUrl: string,
      private httpClient: HttpClient
    ) { }
  
    getList(){
      let api = this.apiUrl + "Customer/GetAllCustomer";
      return this.httpClient.get(api);
    }

  getCity(){
    let api=this.apiUrl+"City/GetAllCity";
    return this.httpClient.get(api);
  }
    getById(id: number){
      let api = this.apiUrl + "Customer/GetUpdateCustomer/" + id;
      return this.httpClient.get(api);
    }
    add(customer: CustomerModel){
      let api = this.apiUrl + "Customer/CustomerAdd";
      return this.httpClient.post(api, customer);
    }
  
    update(customer: CustomerModel){
      let api = this.apiUrl + "Customer/Update";
      return this.httpClient.post(api, customer);
    }
  
  }
  